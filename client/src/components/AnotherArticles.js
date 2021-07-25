import React, { useState, useEffect, useCallback } from 'react';
import './AnotherArticles.css';
import { Link } from 'react-router-dom';
import axios from 'axios';

function AnotherArticles(props) {
    const [boardName, setBoardName] = useState("");
    const checkBoard = useCallback(async() => {
        try {
            const checkBoardResponse = await axios.post('http://localhost:3001/checkboard', {boardNumber: props.boardNum});
            setBoardName(checkBoardResponse.data[0].boardName);
        } catch(e) {
            
        }
    }, [props.boardNum]);

    useEffect(() => {
        checkBoard();
    }, [checkBoard])
    return (
        <article>
            <Link to={{
                pathname: `/main/board/${props.boardNum}/${props.number}`
            }} className="article">
                <img src="https://cf-fpi.everytime.kr/0.png" className="picture medium"alt="profile"/>
                <h3 className="medium">{props.userNickname}</h3>
                <time className="medium">{props.date}</time>
                <hr/>
                <h2 className="medium bold">{props.title}</h2>
                <p className="medium">{props.content}</p>
                <hr />
                <h3 className="boardname">{boardName}</h3>
                <ul className="status">
                    <li title="공감" className="vote">{props.likeNum}</li>
                    <li title="댓글" className="comment">1</li>
                </ul>
                <hr />
                <input type="hidden" name="200806133_comment_anonym" value="0"/>
            </Link>
        </article>
    )
}

export default AnotherArticles
