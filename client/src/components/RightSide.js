import React, { useCallback, useEffect, useState } from 'react';
import './RightSide.css';
import axios from 'axios';
import { Link } from 'react-router-dom';

function RightSide() {
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
    const writeCheck = useCallback(async() => {
        try {
            const famousWriteCheck = await axios.post('http://localhost:3001/famouswrite');
            setWriteInfo(famousWriteCheck.data);
        } catch(e) {
            alert("오류발생 writecheckRightside");
        }
    }, []);
    const [boardName, setBoardName] = useState("");
    const checkBoard = useCallback(async() => {
        if(writeInfo.length > 0) {
            try {
                let checkBoardResponse = null;
                if(writeInfo[0].board){
                    checkBoardResponse = await axios.post('http://localhost:3001/checkboard', {boardNumber: writeInfo[0].board});    
                    if(checkBoardResponse.data.length > 0) setBoardName(checkBoardResponse.data[0].boardName);
                }     
            } catch(e) {
                alert("오류발생 checkboardRightside: "+ e)
            }    
        }
        
    }, [writeInfo]);

    const [writeInfoHot, setWriteInfoHot] = useState([[]]);
    const hotWrite = async() => {
        try {
            const hotArticleResponse = await axios.post('http://localhost:3001/hotarticles');
            setWriteInfoHot(hotArticleResponse.data);
        } catch(e) {
            alert("오류발생 hotwrite");
        }
    }
    useEffect(() => {
        writeCheck();
    }, [writeCheck]);

    useEffect(() => {
        checkBoard();
    },[checkBoard]);

    useEffect(() => {
        hotWrite();
    }, []);
    return (
        <div className="rightside">
            <form className="search">
                <input type="text" name="keyword" placeholder="전체 게시판의 글을 검색하세요!" className="text" />
            </form>
            <div className="card">
                <div className="board">
                    <h3>
                        <p>실시간 인기 글</p>
                    </h3>
                    <Link className="article" to={`/main/board/${writeInfo[0].board}/${writeInfo[0].number}`}>
                        <p className="title">{writeInfo[0].title}</p>
                        <p className="small">{writeInfo[0].content}</p>
                        <h4>{boardName}</h4>
                        <ul className="status">
                            <li className="vote active">{writeInfo[0].likeNum}</li>
                            <li className="comment active">1</li>
                        </ul>
                        <hr />
                    </Link>
                </div>
            </div>
            <div className="card">
                <div className="board">
                    <h3>
                        <Link to="/main/hotarticles">
                            HOT 게시물
                            <span>더 보기</span>
                        </Link>
                    </h3>
                    {
                        writeInfoHot.length > 0 ?
                        <>
                            <Link className="list" to={`/main/board/${writeInfoHot[0].board}/${writeInfoHot[0].number}`}>
                                <time>{checkDate(writeInfoHot[0].date)}</time>
                                <p>{writeInfoHot[0].title}</p>
                                <hr />
                            </Link>
                        </>
                        :
                        <div className="list"> <p>게시물이 없습니다.</p> </div>
                    }
                </div>
            </div>
            <div className="card">
                    <div className="board">
                        <h3>
                            <a href="/bestarticle">
                                BEST 게시판
                                <span> 더 보기</span>
                            </a>
                        </h3>
                    </div>
                </div>
        </div>
    )
}

export default RightSide
