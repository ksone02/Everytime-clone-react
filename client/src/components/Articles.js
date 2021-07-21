import React  from 'react';
import './Articles.css';

function Articles(props) {
    return (
        <div>
        <article>
            <a className="article" href={`/freeboardin/${props.number}`}>
                <h2 className="medium">{props.title}</h2>
                <p className="small">{props.content}</p>
                <time className="small">{props.date}</time>
                <h3 className="small">{props.userNickname}</h3>
                <ul className="status">
                    <li title="공감" className="vote">좋아요수</li>
                    <li title="댓글" className="comment">댓글수</li>
                </ul>
                <hr />
            </a>
            <div class="comments"></div>
        </article>
        </div>
    )
}

export default Articles
