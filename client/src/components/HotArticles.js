import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import AnotherArticles from './AnotherArticles';
import './HotArticles.css';

function HotArticles() {
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
    const detailPost = async() => {
        try {
            const myarticlesResponse = await axios.post('http://localhost:3001/hotarticles');
            if(myarticlesResponse.data.length > 0) {
                setWriteInfo(myarticlesResponse.data);
            }
        } catch(e) {
            alert("오류발생" + e);
        }
    }
    useEffect(() => {
        detailPost();
    }, []);
    return (
        <div className="main">
            <div className="wrap title">
                <h1>
                    <Link to={`/main/hotarticles`}>HOT 게시판</Link>
                </h1>
                <p>공감 10개를 받으면 HOT 게시물로 자동 선정됩니다.</p>
                <hr />
            </div>
            <div className="wrap articles">
                {
                    writeInfo.length > 0
                    ? writeInfo.map((v, i) => {
                        return <AnotherArticles key={i} number={v.number} title={v.title} content={v.content} userNickname={v.isAnony === 1 ? "익명" : v.userNickname} date={checkDate(v.date)} likeNum={v.likeNum} boardNum={v.board} />
                    })
                    : <article className="dialog">
                        아직 글이 하나도 없어요.
                    </article>
                }
            </div>
        </div>
    )
}

export default HotArticles
