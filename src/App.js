import React, { useState } from "react";
import LoginPage from "./Components/LoginPage";
import MyPage from "./Components/MyPage";

const App = () => {
  const [login, setLogin] = useState(false);
  const [logout, setLogout] = useState(false);


  const onLoginHandler = () => {
    setLogin(true);
  
  }

  const onLogoutHandler = () => {
    setLogout(true);
  }


  return (
    <React.Fragment>
      {!login&& <LoginPage onLogin={onLoginHandler}/>}
      {login && <MyPage login={login} onLogout={onLogoutHandler}/>}
    </React.Fragment>
  );
}

export default App;
