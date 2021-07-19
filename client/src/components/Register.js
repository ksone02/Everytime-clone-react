import React, { useState } from 'react';
import './Register.css';
import CheckIcon from '@material-ui/icons/Check';
import ClearIcon from '@material-ui/icons/Clear';

function Register() {

    const [id, setId] = useState("");
    const [pw, setPw] = useState("");
    const [email, setEmail] = useState("");
    const [user_name, setName] = useState("");
    const [nickname, setNickname] = useState("");

    const idCheck = (e) => {setId(e.target.value) };
    const pwCheck = (e) => {setPw(e.target.value) };
    const emailCheck = (e) => {setEmail(e.target.value) };
    const nameCheck = (e) => {setName(e.target.value) };
    const nicknameCheck = (e) => {setNickname(e.target.value) };

    const submitId = () => {
        const post = {
            id: id,
            pw: pw,
            email: email,
            user_name: user_name,
            nickname: nickname
        };
        if(id === "" || pw === "" || email === "" || user_name === "" || nickname === "") {
            alert("입력이 안 된 사항이 있습니다.");
        } else {
            fetch("http://localhost:3001/register", {
                method: "post",
                headers: {
                    "content-type" : "application/json",
                },
                body: JSON.stringify(post),
            })
            .then((res) => res.json())
            .then((json) => {
                setId(json.text);
            });    
        }
        
    };

    return (
        <form id="register-container" onSubmit={submitId}>
            <h2>에브리타임 회원가입</h2>
            <p className="description">에브리타임 계정으로 <strong>캠퍼스픽, 에브리타임</strong> 등<br />다양한 대학생 서비스를 모두 이용하실 수 있습니다.</p>
            <div className="input">
                <div className="label"><label>아이디</label></div>
                <div className="inputbox">
                    <input onChange={idCheck} type="text" name="user_id" maxlength="20" placeholder="아이디를 입력하세요." className="search" />
                    <CheckIcon className="checkIcon"/>    
                    <ClearIcon className="clearIcon" />    
                </div>
            </div>
            <div className="input">
                <div className="label"><label>비밀번호</label></div>
                <input onChange={pwCheck} type="password" name="user_pw" maxlength="20" placeholder="비밀번호를 입력하세요." className="search" />
            </div>
            <div className="input">
                <div className="label"><label>비밀번호 확인</label></div>
                <input type="password" name="user_repw" maxlength="20" placeholder="비밀번호를 다시 입력하세요." className="search" />
            </div>
            <div className="input">
                <div className="label"><label>이메일</label></div>
                <input onChange={emailCheck} type="email" name="user_email" maxlength="50" placeholder="이메일을 입력하세요." className="search" />
            </div>
            <div className="input">
                <div className="label"><label>이름</label></div>
                <input onChange={nameCheck} type="text" name="user_name" maxlength="20" placeholder="이름을 입력하세요." className="search" />
            </div>
            <div className="input">
                <div className="label"><label>닉네임</label></div>
                <input onChange={nicknameCheck} type="text" name="user_nickname" maxlength="20" placeholder="닉네임(별명)을 입력하세요." className="search" />
            </div>
            <input type="submit" value="가입하기"></input>
            <h1>{id}</h1>
        </form>
    )    
}

export default Register
