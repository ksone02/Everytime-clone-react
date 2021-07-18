import React from 'react';
import './Login.css';

function Login() {
    return (
        <div className="loginDiv">
            <div id="login-container" className="login">
                <h1 className="logo">
                    <a href="/">짭브리타임</a>
                </h1>
                <form action="/user/login" method="post">
                    <p className="input"><input type="text" name="userid" maxlength="20" className="text" placeholder="아이디" /></p>
                    <p className="input"><input type="password" name="password" maxlength="20" className="text" placeholder="비밀번호" /></p>
                    <p className="submit"><input type="submit" value="로그인" className="text" /></p>
                    <label className="autologin"><input type="checkbox" name="autologin" value="1" />로그인 유지</label>
                    <p className="find"><a href="/forgot">아이디/비밀번호 찾기</a></p>
                    <p className="register">
                        <span>에브리타임에 처음이신가요?</span>
                        <a href="/register">회원가입</a>
                    </p>
                </form>
            </div>
            <address>
                <ul className="links">
                <li><a href="/page/serviceagreement">이용약관</a></li>
                <li className="privacy"><a href="/page/privacy">개인정보처리방침</a></li>
                <li><a href="/page/faq">문의하기</a></li>
                <li className="copyright"><a href="/">© 에브리타임</a></li>
                </ul>
            </address>
        </div>
    )
}

export default Login
