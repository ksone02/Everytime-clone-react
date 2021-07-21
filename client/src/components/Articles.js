import React from 'react'

function Articles() {
    return (
        <article>
            <a className="article" href="/377398/v/200129186">
                <h2 className="medium">글 제목</h2>
                <p className="small">글 내용</p>
                <time className="small">시간</time>
                <h3 className="small">익명</h3>
                <ul className="status">
                    <li title="공감" className="vote">좋아요수</li>
                    <li title="댓글" className="comment">댓글수</li>
                </ul>
                <hr />
            </a>
            <div class="comments"></div>
        </article>
    )
}

export default Articles
