import React from 'react';
import './Register.css';

function Register() {
    return (
        <form id="register-container" method="post" action="/register/agreement">
            <h2>에브리타임 회원가입</h2>
            <p className="description">에브리타임 계정으로 <strong>캠퍼스픽, 에브리타임</strong> 등<br />다양한 대학생 서비스를 모두 이용하실 수 있습니다.</p>
            <div class="input">
                <div class="label"><label>아이디</label></div>
                <input type="text" name="user_id" maxlength="20" placeholder="아이디를 입력하세요." className="search" />
            </div>
            <div class="input">
                <div class="label"><label>비밀번호</label></div>
                <input type="password" name="user_pw" maxlength="20" placeholder="비밀번호를 입력하세요." className="search" />
            </div>
            <div class="input">
                <div class="label"><label>비밀번호 확인</label></div>
                <input type="password" name="user_repw" maxlength="20" placeholder="비밀번호를 다시 입력하세요." className="search" />
            </div>
            <div class="input">
                <div class="label"><label>이메일</label></div>
                <input type="email" name="user_email" maxlength="50" placeholder="이메일을 입력하세요." className="search" />
            </div>
            <div class="input">
                <div class="label"><label>이름</label></div>
                <input type="text" name="user_name" maxlength="20" placeholder="이름을 입력하세요." className="search" />
            </div>
            <div class="input">
                <div class="label"><label>닉네임</label></div>
                <input type="text" name="user_nickname" maxlength="20" placeholder="닉네임(별명)을 입력하세요." className="search" />
            </div>
            <input type="submit" value="가입하기"></input>
        </form>
    )
}

export default Register
