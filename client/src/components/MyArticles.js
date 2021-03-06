import React, { useEffect, useState, useCallback } from 'react';
import './MyArticles.css';
import AnotherArticles from './AnotherArticles';
import axios from 'axios';
import { Link } from 'react-router-dom';

function MyArticles(props) {
    const checkDate = (date) => {
        if(date) {
            var newDate = new Date(date);
            let month = (newDate.getMonth() + 1) < 10 ? "0" + (newDate.getMonth() + 1) : (newDate.getMonth() + 1);
            let day = newDate.getDate() < 10 ? "0"+ newDate.getDate() : newDate.getDate();
            let hour = newDate.getHours() < 10 ? "0" + newDate.getHours() : newDate.getHours();
            let minute = newDate.getMinutes() < 10 ? "0" + newDate.getMinutes() : newDate.getMinutes();
            return month + "/" + day + " " +  hour + ":" + minute;    
        } else {
            return 0;
        }
        
    }
    const [writeInfo, setWriteInfo] = useState([[]]);
    const detailPost = useCallback(async() => {
        try {
            if(props.user_nickname) {
                const myarticlesResponse = await axios.post('http://localhost:3001/myarticles', {userNickname: props.user_nickname});
                if(myarticlesResponse.data.length > 0) {
                    setWriteInfo(myarticlesResponse.data);
                }
            }   
        } catch(e) {
            alert("오류발생 myarticles");
        }
    }, [props.user_nickname])
    useEffect(() => {
        detailPost();
    },[detailPost]);

    return (
        <div className="main">
            <div className="wrap title">
                <h1>
                    <Link to="/main/myarticles">내 게시물</Link>
                </h1>
                <hr />
            </div>
            <div className="wrap articles">
                {
                    writeInfo.length > 1 ?
                    writeInfo.map((v, i) => {
                        return <AnotherArticles key={i} number={v.number} title={v.title} content={v.content} userNickname={v.isAnony === 1 ? "익명" : v.userNickname} date={checkDate(v.date)} likeNum={v.likeNum} boardNum={v.board} />
                    }) :
                    <article className="dialog">
                        아직 글이 하나도 없어요.
                    </article>
                }
            </div>
        </div>
    )
}

export default MyArticles
