import React from 'react';
import './AnotherArticles.css';
import { Link } from 'react-router-dom';

function AnotherArticles(props) {
    return (
        <article>
            <Link to={{
                pathname: `/main/freeboardin/${props.number}`
            }} className="article">
                <img src="https://cf-fpi.everytime.kr/0.png" className="picture medium"alt="profile"/>
                <h3 className="medium">{props.userNickname}</h3>
                <time className="medium">{props.date}</time>
                <hr/>
                <h2 className="medium bold">{props.title}</h2>
                <p className="medium">{props.content}</p>
                <hr />
                <h3 className="boardname">인문캠 자유게시판</h3>
                <ul className="status">
                    <li title="공감" className="vote">0</li>
                    <li title="댓글" className="comment">11</li>
                </ul>
                <hr />
                <input type="hidden" name="200806133_comment_anonym" value="0"/>
            </Link>
        </article>
    )
}

export default AnotherArticles
