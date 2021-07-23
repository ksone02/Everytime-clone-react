import React from 'react';
import { Link } from 'react-router-dom';
import './Articles.css';

function Articles(props) {

    return (
        <article>
            <Link to={{
                pathname: `/main/board/${props.boardNum}/${props.number}`
            }} className="article">
                <h2 className="medium">{props.title}</h2>
                <p className="small">{props.content}</p>
                <time className="small">{props.date}</time>
                <h3 className="small">{props.userNickname}</h3>
                <ul className="status">
                    <li title="공감" className="vote">{props.likeNum}</li>
                    <li title="댓글" className="comment">1</li>
                </ul>
                <hr />
            </Link>
        <div className="comments"></div>
        </article>
    )
}

export default Articles;
