import classes from './MyPage.module.css';


const MyPage = ({onLogout}) => {
    const logoutHandler = () => {
        onLogout();
    }

    return(
        <div className={classes.mypage}>
            <h2>✨ Welcome back! 🕶</h2>
            <button onClick={logoutHandler}>Logout</button>
        </div>
    )
}

export default MyPage;