import React from 'react';
import './ArticlesPlus.css';

function ArticlesPlus() {
    return (
        <article>
            <a className="article">
                <img src="	https://cf-fpi.everytime.kr/0.png" class="picture large" />
                <div className="profile">
                    <h3 className="large">익명</h3>
                    <time className="large">5분 전</time>
                </div>
                <ul className="status">
                    <li class="messagesend" data-modal="messageSend" data-article-id="200607902" data-is-anonym="1">쪽지</li>
                    <li class="abuse">신고</li>
                </ul>
                <hr />
                <h2 class="large">밥먹을곳 추천이나 친구구함</h2>
                <p class="large">대면할까봐 겁남</p>
                <ul className="status left">
                    <li title="공감" class="vote">0</li>
                    <li title="댓글" class="comment">1</li>
                    <li title="스크랩" class="scrap">0</li>
                </ul>
                <hr />
                <div class="buttons">
                    <span class="posvote">공감</span>
                    <span class="scrap">스크랩</span>
                </div>
            </a>
            <div class="comments" style="display: block;">
                <article class="parent">
                    <img src="https://cf-fpi.everytime.kr/0.png" class="picture medium" alt="profile"/>
                    <h3 class="medium">익명1</h3>
                    <ul class="status">
                        <li class="childcomment">대댓글</li>
                        <li class="commentvote">공감</li>
                        <li class="messagesend" data-modal="messageSend" data-comment-id="953998436" data-is-anonym="1">쪽지</li>
                        <li class="abuse">신고</li>
                    </ul>
                    <hr />
                    <p class="large">나 여잔데 내 자취방 어때</p>
                    <time class="medium">방금</time>
                    <ul class="status commentvotestatus">
                        <li class="vote commentvote" style="display: none;">0</li>
                    </ul>
                </article>
                <form class="writecomment">
                    <input type="text" name="text" maxlength="300" autocomplete="off" placeholder="댓글을 입력하세요." class="text" />
                    <ul class="option">
                        <li title="익명" class="anonym"></li>
                        <li title="완료" class="submit"></li>
                    </ul>
                    <div class="clearBothOnly"></div>
                </form>
            </div>
        </article>
    )
}

export default ArticlesPlus;
