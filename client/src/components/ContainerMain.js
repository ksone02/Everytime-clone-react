import React, { useState, useEffect } from 'react';
import Articles from './Articles';
import './ContainerMain.css';
import axios from 'axios';
import { Route, withRouter } from 'react-router-dom';

function ContainerMain(props) {
    
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [isanon, setIsanon] = useState(false);

    const titleCheck = (e) => {
        setTitle(e.target.value);
    }
    const contentCheck = (e) => {
        setContent(e.target.value);
    }

    const isWrite = () => {
        const formDiv = document.querySelector('.writeForm');
        const writeBtn = document.querySelector('#writeArticleButton');
        formDiv.style.display = "block";
        writeBtn.style.display = "none";
    }
    const doneWrite = () => {
        const formDiv = document.querySelector('.writeForm');
        const writeBtn = document.querySelector('#writeArticleButton');
        const textarea = document.getElementsByTagName('textarea')[0];
        const title = document.getElementsByClassName('writeForm')[0].getElementsByClassName('title')[0];
        textarea.value = "";
        title.value = "";
        formDiv.style.display = "none";
        writeBtn.style.display = "block";
        setIsanon(false);
    }
    
    const isAnony = () => {
        const anonBtn = document.querySelector('.anonym');
        if(!isanon) {
            setIsanon(true);
            anonBtn.classList.toggle('active');
        } else if(isanon) {
            setIsanon(false);
            anonBtn.classList.toggle('active');
        }
    }

    const write = async() => {
        try {
            doneWrite();
            await axios.post('http://localhost:3001/writeFreeIn', { title: title, content: content, userNickname: props.user_nickname, isAnony: isanon, board: props.match.params.boardNum  });    
        } catch(e) {
            alert("오류발생 write");
        }
    }

    const [writeInfo, setWriteInfo] = useState([[]]);
    const writeCheck = async() => {
        try {
            const writeCheckResponse = await axios.post('http://localhost:3001/writeCheck', {board: props.match.params.boardNum});
            setWriteInfo(writeCheckResponse.data);
        } catch(e) {
            alert("오류발생 writecheck");
        }
    }

    const checkDate = (date) => {
        let nowDate = new Date();
        const newDate = new Date(date);
        const elapsedMsec = nowDate.getTime() - newDate.getTime();
        const elapsedSec = elapsedMsec / 1000;
        const elapsedMin = elapsedSec / 60;
        const elapsedHour = elapsedMin / 60;
        const elapsedDay = elapsedHour / 24;
        const elapsedWeek = elapsedDay / 7;
        const elapsedMonth = elapsedWeek / 4;
        const elapsedYear = elapsedMonth / 4;
        let dateResult;
        if(elapsedYear > 1) dateResult = parseInt(elapsedYear) + "년";
        else if(12 > elapsedMonth && elapsedMonth > 1) dateResult = parseInt(elapsedMonth) + "개월";
        else if(4 > elapsedWeek && elapsedWeek > 1) dateResult = parseInt(elapsedWeek) + "주";
        else if(7 > elapsedDay && elapsedDay > 1) dateResult = parseInt(elapsedDay) + "일";
        else if(24 > elapsedHour && elapsedHour > 1) dateResult = parseInt(elapsedHour) + "시간";
        else if(60 > elapsedMin && elapsedMin > 1) dateResult = parseInt(elapsedMin) + "분";
        else if(60 > elapsedSec) dateResult = "방금";
        
        return dateResult;
    }

    const [boardName, setBoardName] = useState("");
    const checkBoard = async() => {
        try {
            const checkBoardResponse = await axios.post('http://localhost:3001/checkboard', {boardNumber: props.match.params.boardNum});
            setBoardName(checkBoardResponse.data[0].boardName);
        } catch(e) {
            
        }
    }

    useEffect(() => {
        writeCheck();
        checkBoard();
    });

    return (
        <div className="main">
            <div className="wrap title">
                <h1>
                    <a href="/377398">{boardName}</a>
                </h1>
                <hr />
            </div>
            <div className="wrap articles">
            <Route path={`/main/board/${props.match.params.boardNum}`} exact render={() => 
                    <>
                        <form className="write writeForm">
                            <p>
                                <input onChange={titleCheck} name="title" placeholder="글 제목" className="title" />
                            </p>
                            <p>
                                <textarea onChange={contentCheck} name="text" placeholder="에브리타임은 누구나 기분 좋게 참여할 수 있는 커뮤니티를 만들기 위해 커뮤니티 이용규칙을 제정하여 운영하고 있습니다. 위반 시 게시물이 삭제되고 서비스 이용이 일정 기간 제한될 수 있습니다. &#13;

                                아래는 이 게시판에 해당하는 핵심 내용에 대한 요약 사항이며, 게시물 작성 전 커뮤니티 이용규칙 전문을 반드시 확인하시기 바랍니다. &#13;
                                
                                ※ 정치·사회 관련 행위 금지 
                                - 국가기관, 정치 관련 단체, 언론, 시민단체에 대한 언급 혹은 이와 관련한 행위 
                                - 정책·외교 또는 정치·정파에 대한 의견, 주장 및 이념, 가치관을 드러내는 행위 
                                - 성별, 종교, 인종, 출신, 지역, 직업, 이념 등 사회적 이슈에 대한 언급 혹은 이와 관련한 행위 
                                - 위와 같은 내용으로 유추될 수 있는 비유, 은어 사용 행위 &#13;
                                
                                ※ 홍보 및 판매 관련 행위 금지 
                                - 영리 여부와 관계 없이 사업체·기관·단체·개인에게 직간접적으로 영향을 줄 수 있는 게시물 작성 행위 
                                - 위와 관련된 것으로 의심되거나 예상될 수 있는 바이럴 홍보 및 명칭·단어 언급 행위 &#13;
                                
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
                                <li onClick={write} title="완료" className="submit"></li>
                                <li onClick={isAnony} title="익명" className="anonym"></li>
                            </ul>
                            <div className="clearBothOnly"></div>
                        </form>
                        <div onClick={isWrite} id="writeArticleButton">새 글을 작성해주세요!</div>
                        {
                            writeInfo.map((v, i) => {
                                return <Articles key={i} number={v.number} title={v.title} content={v.content} userNickname={v.isAnony === 1 ? "익명" : v.userNickname} date={checkDate(v.date) + "전"} likeNum={v.likeNum} boardNum={v.board}/>
                            })
                        }
                    </>
                } />
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

export default withRouter(ContainerMain);
