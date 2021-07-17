import React from 'react';
import './ContainerMain.css';

function ContainerMain() {
    return (
        <div className="main">
            <div className="wrap title">
                <h1>
                    <a href="/377398">인문캠 자유게시판</a>
                </h1>
                <hr />
            </div>
            <div className="wrap articles">
                <form className="write">
                    <p>
                        <input name="title" autoComplete="off" placeholder="글 제목" className="title" />
                    </p>
                    <p>
                        <textarea name="text" placeholder="에브리타임은 누구나 기분 좋게 참여할 수 있는 커뮤니티를 만들기 위해 커뮤니티 이용규칙을 제정하여 운영하고 있습니다. 위반 시 게시물이 삭제되고 서비스 이용이 일정 기간 제한될 수 있습니다. 

아래는 이 게시판에 해당하는 핵심 내용에 대한 요약 사항이며, 게시물 작성 전 커뮤니티 이용규칙 전문을 반드시 확인하시기 바랍니다. 

※ 정치·사회 관련 행위 금지 
- 국가기관, 정치 관련 단체, 언론, 시민단체에 대한 언급 혹은 이와 관련한 행위 
- 정책·외교 또는 정치·정파에 대한 의견, 주장 및 이념, 가치관을 드러내는 행위 
- 성별, 종교, 인종, 출신, 지역, 직업, 이념 등 사회적 이슈에 대한 언급 혹은 이와 관련한 행위 
- 위와 같은 내용으로 유추될 수 있는 비유, 은어 사용 행위 

※ 홍보 및 판매 관련 행위 금지 
- 영리 여부와 관계 없이 사업체·기관·단체·개인에게 직간접적으로 영향을 줄 수 있는 게시물 작성 행위 
- 위와 관련된 것으로 의심되거나 예상될 수 있는 바이럴 홍보 및 명칭·단어 언급 행위 

※ 그 밖의 규칙 위반 
- 타인의 권리를 침해하거나 불쾌감을 주는 행위 
- 범죄, 불법 행위 등 법령을 위반하는 행위 
- 욕설, 비하, 차별, 혐오, 자살, 폭력 관련 내용을 포함한 게시물 작성 행위 
- 음란물, 성적 수치심을 유발하는 행위 
- 스포일러, 공포, 속임, 놀라게 하는 행위 " className="smallplaceholder large"></textarea>
                    </p>
                    <input className="file" name="file" multiple="multiple" />
                    <ol className="thumbnails">
                        <li className="new"></li>
                    </ol>
                    <div className="clearBothOnly"></div>
                    <ul className="option">
                        <li title="해시태그" className="hashtag"></li>
                        <li title="첨부" className="attach"></li>
                        <li title="완료" className="submit"></li>
                        <li title="익명" className="anonym"></li>
                    </ul>
                    <div className="clearBothOnly"></div>
                </form>
                <a id="writeArticleButton">새 글을 작성해주세요!</a>
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
                <div className="clearBothOnly"></div>
                <div className="pagination">
                    <form id="searchArticleForm" className="search">
                        <select name="search_type">
                            <option value="4">전체</option>
                            <option value="3">해시태그</option>
                            <option value="2">글 제목</option>
                            <option value="1">글 내용</option>
                        </select>
                        <input name="keyword" placeholder="검색어를 입력하세요." className="text" />
                    </form>
                    <a href="/377398/p/2" className="next">다음</a>
                </div>
            </div>
            <hr />
        </div>
    )
}

export default ContainerMain
