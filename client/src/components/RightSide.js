import React, { useEffect, useState } from 'react';
import './RightSide.css';
import axios from 'axios';

function RightSide() {
    const [writeInfo, setWriteInfo] = useState([[]]);
    const writeCheck = async() => {
        try {
            const famousWriteCheck = await axios.post('http://localhost:3001/famouswrite');
            setWriteInfo(famousWriteCheck.data);
        } catch(e) {
            alert("오류발생");
        }
    }
    useEffect(() => {
        writeCheck();
    })
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
                    <a className="article" href="/377398/v/200018326">
                        <p className="title">{writeInfo[0].title}</p>
                        <p className="small">{writeInfo[0].content}</p>
                        <h4>인문캠 자유게시판</h4>
                        <ul className="status">
                            <li className="vote active">{writeInfo[0].likeNum}</li>
                            <li className="comment active">1</li>
                        </ul>
                        <hr />
                    </a>
                </div>
            </div>
            <div className="card">
                <div className="board">
                    <h3>
                        <a href="/hotarticle">
                            HOT 게시물
                            <span>더 보기</span>
                        </a>
                    </h3>
                    <a className="list" href="/주소잉여잉여">
                        <time>시간</time>
                        <p>글 제목</p>
                        <hr />
                    </a>
                    <a className="list" href="/주소잉여잉여">
                        <time>시간</time>
                        <p>글 제목</p>
                        <hr />
                    </a>
                    <a className="list" href="/주소잉여잉여">
                        <time>시간</time>
                        <p>글 제목</p>
                        <hr />
                    </a>
                    <a className="list" href="/주소잉여잉여">
                        <time>시간</time>
                        <p>글 제목</p>
                        <hr />
                    </a>
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
