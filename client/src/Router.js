import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Login from "./components/Login";
import IsLogin from "./components/IsLogin";
import Notlogin from "./components/Notlogin";
import Register from "./components/Register";
import axios from "axios";

function Router() {
  const [loginStatus, setloginStatus] = useState(false);
  const [sessionId, setSessionId] = useState("");
  const [sessionName, setSessionName] = useState("");
  const [sessionNickname, setSessionNickname] = useState("");

  const isLogin = async () => {
    try {
      const LoginCheckedResponse = await axios.post(
        "http://localhost:3001/loginchecked"
      );
      if (LoginCheckedResponse.data.logined === true) {
        setloginStatus(true);
        setSessionId(LoginCheckedResponse.data.user_id);
        setSessionName(LoginCheckedResponse.data.user_name);
        setSessionNickname(LoginCheckedResponse.data.user_nickname);
      } else if (LoginCheckedResponse.data.logined === false) {
        setloginStatus(false);
      }
    } catch (e) {}
  };
  useEffect(() => {
    isLogin();
  });
  return (
    <div>
      <BrowserRouter basename="process.env.PUBLIC_URL">
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/main">
            {loginStatus === true ? (
              <IsLogin
                user_id={sessionId}
                user_name={sessionName}
                user_nickname={sessionNickname}
              />
            ) : (
              <Notlogin />
            )}
          </Route>
          <Route render={() => <div className="error">에러 페이지</div>} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default Router;
