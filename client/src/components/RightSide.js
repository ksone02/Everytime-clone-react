import React from 'react';
import './RightSide.css';

function RightSide() {
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
                        <p className="title">글 제목</p>
                        <p className="small">글 내용</p>
                        <h4>게시판 이름</h4>
                        <ul className="status">
                            <li className="vote active">좋아요수</li>
                            <li className="comment active">댓글수</li>
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
