import React, { useState } from 'react';
import classes from './LoginPage.module.css';


const LoginPage = ({onLogin}) => {
    const [ enteredEmail, setEnteredEmail ] = useState('');
    const [ enteredPassword, setEnteredPassword ] = useState('');

    const emailChangeHandler = (e) => {
        setEnteredEmail(e.target.value);
    }

    const passwordChangeHandler = (e) => {
        setEnteredPassword(e.target.value);
    }

    const loginHandler = (e) => {
        e.preventDefault();
        onLogin(enteredEmail,enteredPassword);

        setEnteredEmail('');
        setEnteredPassword('');
    }


    return (
        <div className={classes.login}>
            <form onSubmit={loginHandler} className={classes.loginForm}>
                <div className={classes.control}>
                    <label htmlFor='email'>E-mail</label>
                    <input 
                    id='email'
                    type='email' 
                    value={enteredEmail}
                    onChange={emailChangeHandler}/>
                </div>
                <div className={classes.control}>
                    <label htmlFor='password'>Password</label>
                    <input 
                    id='password' 
                    type='password'
                    value={enteredPassword}
                    onChange={passwordChangeHandler}/>
                </div>
                <div className={classes.button}>
                    <button type='submit'>Login</button>
                </div>
            </form>
        </div>
    )
}

export default LoginPage;