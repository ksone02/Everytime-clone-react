import React, { useState } from 'react';
import './Login.css';
import axios from 'axios';

function Login() {

    const [id, setId] = useState("");
    const [pw, setPw] = useState("");

    const idCheckFn = (e) => {setId(e.target.value) };
    const pwCheckFn = (e) => {setPw(e.target.value) };

    const submitId = async() => {
        try {
            const loginResponse = await axios.post('http://localhost:3001/login', { id: id, pw: pw });  
            loginResponse.withCredentials = true;
            if(loginResponse.data.tf === true) {
                alert("로그인성공");
                window.location.replace('/main');
            } else if(loginResponse.data.tf === false) {
                alert("아이디와 비밀번호를 다시 확인해주세요.");
            }
        } catch(e) {
             alert("오류");
        }
    }

    return (
        <div className="loginDiv">
            <div id="login-container" className="login">
                <h1 className="logo">
                    <a href="/">짭브리타임</a>
                </h1>
                <div>
                    <p className="input"><input onChange={idCheckFn}type="text" name="id" className="text" placeholder="아이디" /></p>
                    <p className="input"><input onChange={pwCheckFn} type="password" name="pw" className="text" placeholder="비밀번호" /></p>
                    <p className="submit"><input onClick={submitId} type="button" value="로그인" className="text" /></p>
                    <label className="autologin"><input type="checkbox" name="autologin" value="1" />로그인 유지</label>
                    <p className="find"><a href="/forgot">아이디/비밀번호 찾기</a></p>
                    <p className="register">
                        <span>에브리타임에 처음이신가요?</span>
                        <a href="/register">회원가입</a>
                    </p>
                </div>
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
