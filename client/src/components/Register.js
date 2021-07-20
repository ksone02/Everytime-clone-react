import React, { useState, useEffect } from 'react';
import './Register.css';
import CheckIcon from '@material-ui/icons/Check';
import ClearIcon from '@material-ui/icons/Clear';
import { useHistory } from "react-router-dom";
import axios from 'axios';

function Register() {

    let history = useHistory();

    const [id, setId] = useState("");
    const [pw, setPw] = useState("");
    const [email, setEmail] = useState("");
    const [user_name, setName] = useState("");
    const [nickname, setNickname] = useState("");

    const [overlapId, setOverlapId] = useState(false);
    const [overlapEmail, setOverlapEmail] = useState("노멀");
    const [overlapNickname, setOverlapNickname] = useState();

    const [checkIdDisplay, setCheckIdDisplay] = useState("none");
    const [clearIdDisplay, setClearIdDisplay] = useState("none");

    const [checkPwDisplay, setCheckPwDisplay] = useState("none");
    const [clearPwDisplay, setClearPwDisplay] = useState("none");

    const [checkRepwDisplay, setCheckRepwDisplay] = useState("none");
    const [clearRepwDisplay, setClearRepwDisplay] = useState("none");

    const [checkEmailDisplay, setCheckEmailDisplay] = useState("none");
    const [clearEmailDisplay, setClearEmailDisplay] = useState("none");

    const [checkNameDisplay, setCheckNameDisplay] = useState("none");
    const [clearNameDisplay, setClearNameDisplay] = useState("none");

    const [checkNicknameDisplay, setCheckNicknameDisplay] = useState("none");
    const [clearNicknameDisplay, setClearNicknameDisplay] = useState("none");

    const idCheck = async(e) => {
        try {
            const responseCheckId = await axios.post('http://localhost:3001/checkid', { id: e.target.value });    
            const idH3 = document.querySelector('h3');

            if(responseCheckId.data.tf === true && e.target.value.length >= 6) {
                setId(document.querySelector('.id_search').value);
                setCheckIdDisplay("block");
                setClearIdDisplay("none");
                idH3.style.display = "block";
                idH3.innerHTML = "사용 가능한 아이디 입니다.";
                idH3.style.color = "green";
            } else if(responseCheckId.data.tf === false){
                setClearIdDisplay("block");
                setCheckIdDisplay("none");
                idH3.style.display = "block";
                idH3.innerHTML = "중복된 아이디 입니다.";
                idH3.style.color = "#c62917"
            } else if(e.target.value.length < 6) {
                setClearIdDisplay("block");
                setCheckIdDisplay("none");
                idH3.style.display = "block";
                idH3.innerHTML = "아이디는 6글자 이상이여야 합니다.";
                idH3.style.color = "#c62917"
            }
        } catch(e) {

        }
    };
    const pwCheck = (e) => {
        if(e.target.value.length < 6) {
            setClearPwDisplay("block");
            setCheckPwDisplay("none");
        } else {
            setPw(e.target.value);
            setCheckPwDisplay("block");
            setClearPwDisplay("none");
        }
    };
    const rePwCheck = (e) => {
        if(e.target.value !== pw) {
            setClearRepwDisplay("block");
            setCheckRepwDisplay("none");
        } else {
            setCheckRepwDisplay("block");
            setClearRepwDisplay("none");
        }
    };
    const emailCheck = (e) => {
        if(e.target.value.length < 6) {
            setClearEmailDisplay("block");
            setCheckEmailDisplay("none");
        } else {
            setEmail(e.target.value);
            setCheckEmailDisplay("block");
            setClearEmailDisplay("none");
        }
    };
    const nameCheck = (e) => {
        if(e.target.value.length < 2) {
            setClearNameDisplay("block");
            setCheckNameDisplay("none");
        } else {
            setName(e.target.value);
            setCheckNameDisplay("block");
            setClearNameDisplay("none");
        }
    };
    const nicknameCheck = (e) => {
        if(e.target.value.length < 3) {
            setClearNicknameDisplay("block");
            setCheckNicknameDisplay("none");
        } else {
            setNickname(e.target.value);
            setCheckNicknameDisplay("block");
            setClearNicknameDisplay("none");
        }
    };

    const submitId = () => {
        const post = {
            id: id,
            pw: pw,
            email: email,
            user_name: user_name,
            nickname: nickname
        };
        if(checkIdDisplay === "block" && checkPwDisplay === "block" && checkRepwDisplay === "block" && checkEmailDisplay === "block" && checkNameDisplay === "block" && checkNicknameDisplay === "block" ) {
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

            history.push("/login");
        } else {
            alert("입력사항을 다시 확인해주세요.");
        }
        
    };

    return (
        <div id="register-container">
            <h2>에브리타임 회원가입</h2>
            <p className="description">에브리타임 계정으로 <strong>캠퍼스픽, 에브리타임</strong> 등<br />다양한 대학생 서비스를 모두 이용하실 수 있습니다.</p>
            <div className="input">
                <div className="label"><label>아이디</label></div>
                <div className="inputbox">
                    <input onChange={idCheck} type="text" name="user_id" maxlength="20" placeholder="아이디를 입력하세요." className="search id_search" />
                    <CheckIcon className="checkIcon"style={{ display: checkIdDisplay }}/>    
                    <ClearIcon className="clearIcon" style={{ display: clearIdDisplay }}/>    
                </div>
                <h3></h3>
            </div>
            <div className="input">
                <div className="label"><label>비밀번호</label></div>
                <div className="inputbox">
                    <input onBlur={pwCheck} type="password" name="user_pw" maxlength="20" placeholder="비밀번호를 입력하세요." className="search" />
                    <CheckIcon className="checkIcon"style={{ display: checkPwDisplay }}/>    
                    <ClearIcon className="clearIcon" style={{ display: clearPwDisplay }}/>  
                </div>
            </div>
            <div className="input">
                <div className="label"><label>비밀번호 확인</label></div>
                <div className="inputbox">
                    <input onChange={rePwCheck} type="password" name="user_repw" maxlength="20" placeholder="비밀번호를 다시 입력하세요." className="search" />
                    <CheckIcon className="checkIcon"style={{ display: checkRepwDisplay }}/>    
                    <ClearIcon className="clearIcon" style={{ display: clearRepwDisplay }}/>  
                </div>
            </div>
            <div className="input">
                <div className="label"><label>이메일</label></div>
                <div className="inputbox">
                    <input onChange={emailCheck} type="email" name="user_email" maxlength="50" placeholder="이메일을 입력하세요." className="search" />
                    <CheckIcon className="checkIcon"style={{ display: checkEmailDisplay }}/>    
                    <ClearIcon className="clearIcon" style={{ display: clearEmailDisplay }}/>  
                </div>
            </div>
            <div className="input">
                <div className="label"><label>이름</label></div>
                <div className="inputbox">
                    <input onChange={nameCheck} type="text" name="user_name" maxlength="20" placeholder="이름을 입력하세요." className="search" />
                    <CheckIcon className="checkIcon"style={{ display: checkNameDisplay }}/>    
                    <ClearIcon className="clearIcon" style={{ display: clearNameDisplay }}/>  
                </div>
            </div>
            <div className="input">
                <div className="label"><label>닉네임</label></div>
                <div className="inputbox">
                    <input onChange={nicknameCheck} type="text" name="user_nickname" maxlength="20" placeholder="닉네임(별명)을 입력하세요." className="search" />
                    <CheckIcon className="checkIcon"style={{ display: checkNicknameDisplay }}/>    
                    <ClearIcon className="clearIcon" style={{ display: clearNicknameDisplay }}/>  
                </div>
            </div>
            <input onClick={submitId} type="button" value="가입하기"></input>
            <h3>{overlapEmail}</h3>
        </div>
    )    
}

export default Register
