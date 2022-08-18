import React, { useState, useEffect } from "react";
import LoginPage from "./Components/LoginPage";
import MyPage from "./Components/MyPage";

const App = () => {
  const [isLogin, setIsLogin] = useState(false);

  // 처음 렌더링 될때 로컬스토리지에 해당 키값이 있는지 확인하고 그게 value값과 같다면 로그인상태를 유지하는 useEffect
  useEffect(()=> {
    const storedLoggedInInfo = localStorage.getItem('isLoggedIn');
    if(storedLoggedInInfo === '1') {
      setIsLogin(true);
    }
  }, [])

  const onLoginHandler = () => {
    localStorage.setItem("isLoggedIn", '1');
    setIsLogin(true);
  }

  const onLogoutHandler = () => {
    localStorage.removeItem("isLoggedIn")
    setIsLogin(false);
  }


  return (
    <React.Fragment>
      {!isLogin&& <LoginPage onLogin={onLoginHandler}/>}
      {isLogin && <MyPage onLogout={onLogoutHandler}/>}
    </React.Fragment>
  );
}

export default App;
