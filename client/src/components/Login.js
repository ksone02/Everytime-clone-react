import React, { useState } from 'react';
import './Login.css';

function Login() {

    const [id, setId] = useState("");
    const [pw, setPw] = useState("");
    const [idCheck, setIdCheck] = useState(false);
    const [pwCheck, setPwCheck] = useState(false);

    const idCheckFn = (e) => {setId(e.target.value) };
    const pwCheckFn = (e) => {setPw(e.target.value) };

    const submitId = () => {
        const post = {
            id: id,
            pw: pw,
        };


        
        fetch("http://localhost:3001/login", {
            method: "post",
            headers: {
                "content-type" : "application/json",
            },
            body: JSON.stringify(post),
        })
        .then((res) => res.json())
        .then((json) => {
            console.log("asdasdasdasd");
            if(json === true){		// json을 받아왔는데 .tf 값이 true면 사용가능
                alert("사용가능한 ID입니다");  //알람!
                setIdCheck(true);
            }
            else{
                alert("다른 ID를 입력해주세요");
            }
        });    
    };

    return (
        <div className="loginDiv">
            <div id="login-container" className="login">
                <h1 className="logo">
                    <a href="/">짭브리타임</a>
                </h1>
                <form onSubmit={submitId}>
                    <p className="input"><input onChange={idCheckFn}type="text" name="id" maxlength="20" className="text" placeholder="아이디" /></p>
                    <p className="input"><input onChange={pwCheckFn} type="password" name="pw" maxlength="20" className="text" placeholder="비밀번호" /></p>
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
