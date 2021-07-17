import React from 'react'
import "./Nav.css";

function Nav() {
    return (
        //jshint ignore:start
        <div>
            <nav>
                <div className="wrap">
                    <div className="logo">
                        <a href="/">
                            <img src="https://everytime.kr/images/new/nav.logo.png" alt="logo" />
                        </a>
                        <p>
                            <span className="name multiple">짭브리타임</span>
                            <span className="subname">명지클래스</span>
                        </p>
                    </div>
                    <div className="account">
                        <a href="/message" title="쪽지함" className="icon message">쪽지함</a>
                        <a href="/my" title="내 정보" className="icon my">내 정보</a>
                    </div>
                    <ul className="menu">
                        <li className="active">
                            <a href="/">게시판</a>
                        </li>
                        <li><a href="/timetable">시간표</a></li>
                        <li><a href="/lecture">강의평가</a></li>
                        <li><a href="/calculator">학점계산기</a></li>
                        <li><a href="/friend">친구</a></li>
                        <li><a href="https://bookstore.everytime.kr/">책방</a></li>
                        <li><a href="https://www.campuspick.com/">캠퍼스픽</a></li>
                    </ul>
                </div>
            </nav>
            <div className="submenu">
                <div className="wrap">
                    <div className="divider"></div>
                    <div className="group">
                        <ul>
                            <li><a href="/377398" data-id="377398" className="new">인문캠 자유게시판</a></li>
                            <li><a href="/377399" data-id="377399" className="new">자연캠 자유게시판</a></li>
                            <li><a href="/375142" data-id="375142" className="new">비밀게시판</a></li>
                            <li><a href="/386032" data-id="386032" className="new">졸업생게시판</a></li>
                            <li><a href="/385883" data-id="385883" className="new">새내기게시판</a></li>
                            <li><a href="/482586" data-id="482586" className="new">시사·이슈</a></li>
                            <li><a href="/420654" data-id="420654" className="new">인문캠 장터게시판</a></li>
                            <li><a href="/420655" data-id="420655" className="new">자연캠 장터게시판</a></li>
                        </ul>
                    </div>
                    <div className="group">
                        <ul>
                            <li><a href="/375144" data-id="375144" className="new">정보게시판</a></li>
                            <li><a href="/375143" data-id="375143" className="new">홍보게시판</a></li>
                            <li><a href="/418778" data-id="418778" className="new">동아리·학회</a></li>
                        </ul>
                    </div>
                    <div className="divider"></div>
                    <div className="group">
                        <ul>
                            <li><a href="/377478" data-id="377478" className="new">취업·진로</a></li>
                            <li><a href="/486774" data-id="486774">공시 고시 준비생 게시판</a></li>
                            <li><a href="/485146" data-id="485146">공무원 공기업 게시판</a></li>
                        </ul>
                    </div>
                    <div className="divider"></div>
                    <div className="group">
                        <ul>
                            <li><a href="/457802" data-id="457802">영자신문사</a></li>
                            <li><a href="/390265" data-id="390265">방송국</a></li>
                            <li><a href="/420111" data-id="420111">명대신문</a></li>
                            <li><a href="/452204" data-id="452204">홍보대사</a></li>
                        </ul>
                    </div>
                    <div className="divider"></div>
                    <div className="group">
                        <ul>
                            <li><a href="/432387" data-id="432387" className="new">경제학과 모이자!</a></li>
                            <li><a href="/411422" data-id="411422" className="new">문헌정보학과 모여라~!</a></li>
                            <li><a href="/487872" data-id="487872" className="new">✒문예창작학과 게시판🖋</a></li>
                            <li><a href="/380770" data-id="380770">기계공학과</a></li>
                            <li><a href="/466231" data-id="466231" className="new">🌟정치외교학과 게시판🌟</a></li>
                            <li><a href="/493481" data-id="493481">산업디자인과 게시판</a></li>
                        </ul>
                    </div>
                    <div className="divider"></div>
                    <div className="group">
                        <ul>
                            <li><a href="/376189" data-id="376189" className="new">연애 게시판♡</a></li>
                            <li><a href="/383672" data-id="383672" className="new">성 고민 게시판</a></li>
                            <li><a href="/428175" data-id="428175" className="new">헬스 게시판</a></li>
                            <li><a href="/392155" data-id="392155" className="new">군대 게시판</a></li>
                            <li><a href="/391148" data-id="391148" className="new">게임_게시판</a></li>
                            <li><a href="/457258" data-id="457258">주식일기</a></li>
                            <li><a href="/383682" data-id="383682" className="new">기숙사생 게시판</a></li>
                            <li><a href="/431067" data-id="431067">넷플릭스 게시판</a></li>
                        </ul>
                    </div>
                    <div className="group">
                        <ul>
                            <li><a href="/394848" data-id="394848" className="new">성소수자 게시판</a></li>
                            <li><a href="/418287" data-id="418287">메이플스토리🍁</a></li>
                            <li><a href="/384153" data-id="384153">노래 추천 게시판</a></li>
                            <li><a href="/489205" data-id="489205" className="new">노래가사</a></li>
                            <li><a href="/489509" data-id="489509" className="new">케인 게시판</a></li>
                            <li><a href="/454521" data-id="454521">엔시티즌 게시판</a></li>
                            <li><a href="/403023" data-id="403023">애니 게시판</a></li>
                            <li><a href="/" className="more">더 보기</a></li>
                        </ul>
                    </div>
                    <div className="group hidden">
                        <ul>
                            <li><a href="/489617" data-id="489617" className="new">일찍자고 🌝 일찍일어나 🌞</a></li>
                            <li><a href="/384832" data-id="384832" className="new">페미니즘 게시판</a></li>
                            <li><a href="/391017" data-id="391017">우울게시판</a></li>
                            <li><a href="/383557" data-id="383557" className="new">고양이게시판</a></li>
                            <li><a href="/390179" data-id="390179" className="new">덕질게시판</a></li>
                            <li><a href="/492003" data-id="492003" className="new">코인일기</a></li>
                            <li><a href="/393328" data-id="393328">댕댕이 게시판🐶</a></li>
                            <li><a href="/493947" data-id="493947">혼잣말 게시판</a></li>
                        </ul>
                    </div>
                    <div className="group hidden">
                        <ul>
                            <li><a href="/384664" data-id="384664" className="new">아무말대잔치</a></li>
                            <li><a href="/389052" data-id="389052">먹고싶은것을 적어보자</a></li>
                            <li><a href="/424746" data-id="424746">공부하기싫을때 소리지르는게시판</a></li>
                            <li><a href="/492112" data-id="492112">mbti 게시판</a></li>
                            <li><a href="/493964" data-id="493964">🇯🇵👘⛩일본,일본어 게시판</a></li>
                            <li><a href="/407944" data-id="407944">연뮤덕 게시판</a></li>
                            <li><a href="/377332" data-id="377332">💛방탄 게시판💛</a></li>
                            <li><a href="/390481" data-id="390481" className="new">전과 게시판</a></li>
                        </ul>
                    </div>
                    <div className="group hidden">
                        <ul>
                            <li><a href="/458053" data-id="458053">과제하기 싫을때 소리지르는 게시판</a></li>
                            <li><a href="/490581" data-id="490581">공포게시판</a></li>
                            <li><a href="/492242" data-id="492242">캐럿게시판</a></li>
                            <li><a href="/497285" data-id="497285">🎬영화 게시판🍿</a></li>
                            <li><a href="/community/search" className="search">게시판 찾기</a></li>
                        </ul>
                    </div>
                    <div className="divider"></div>
                    <hr />
                </div>
            </div>            
        </div>
        
        //jshint ignore:end
    )
}

export default Nav
