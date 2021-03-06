import React from "react";
import "./Notlogin.css";
import appstoreImg from "../images/appstore.png";
import playstoreImg from "../images/playstore.png";
import logo from "../images/logo.png";
import { Link } from "react-router-dom";

function Notlogin() {
  return (
    //jshint ignore:start
    <div className="notlogin">
      <aside>
        <div className="login">
          <Link to="/islogin" className="logo">
            <img src={logo} alt="짭브리타임" />
          </Link>
          <Link to="/login" className="button login">
            로그인
          </Link>
          <Link to="/register" className="button register">
            짭브리타임 회원가입
          </Link>
          <p className="find">
            <a href="/forgot">아이디/비밀번호 찾기</a>
          </p>
          <hr />
        </div>
      </aside>
      <section className="init">
        <div className="wrap">
          <h1>
            대학 생활을 더 편하고 즐겁게,
            <br />
            <strong>에브리타임</strong>
          </h1>
          <div className="stores">
            <a href="/page/mlink?lid=web_about&stores-playstore">
              <img src={playstoreImg} alt="에브리타임 - Play Store -Google" />
            </a>
            <a href="/page/mlink?lid=web_about&stores-appstore">
              <img src={appstoreImg} alt="에브리타임 - AppStore -Apple" />
            </a>
          </div>
          <hr />
          <div className="device active">
            <div className="screen">
              <div className="image home"></div>
            </div>
          </div>
        </div>
      </section>
      <section className="service white">
        <h2>
          350만 대학생을 위한
          <br />
          <strong>국내 1위 대학생 서비스 에브리타임!</strong>
        </h2>
        <div className="paragraph">
          <p>
            시간표 작성, 수업 일정 및 할일 등 편리한
            <strong> 학업관리</strong>
            가 가능하고,
            <br />
            학식 등 유용한
            <strong> 학교 생활 정보</strong>
            를 접할 수 있으며,
            <br />
            같은 캠퍼스의 학생들과 소통하는
            <strong> 익명 커뮤니티</strong>를 이용할 수 있습니다.
          </p>
        </div>
        <div className="figures">
          <div>
            <p className="number">
              <strong data-number="519">519</strong>
              <span>만</span>
            </p>
            <p className="description">가입한 대학생</p>
          </div>
          <hr />
          <div>
            <p className="number">
              <strong data-number="2767">2,767</strong>
              <span>만</span>
            </p>
            <p className="description">만들어진 시간표</p>
          </div>
          <hr />
          <div>
            <p className="number">
              <strong data-number="369">369</strong>
              <span>만</span>
            </p>
            <p className="description">강의평/시험정보</p>
          </div>
          <hr />
          <div>
            <p className="number">
              <strong data-number="170">170</strong>
              <span>만</span>
            </p>
            <p className="description">중고 거래된 책</p>
          </div>
          <hr />
          <div>
            <p className="number">
              <strong data-number="11">11</strong>
              <span>억</span>
              <strong data-number="5149">5,149</strong>
              <span>만</span>
            </p>
            <p className="description">작성된 게시물</p>
          </div>
        </div>
      </section>
      <section className="footer white">
        <ul className="links">
          <li>
            <a href="/page/serviceagreement">이용약관</a>
          </li>
          <li className="privacy">
            <a href="/page/privacy">개인정보처리방침</a>
          </li>
          <li>
            <a href="/page/faq">문의하기</a>
          </li>
          <li className="copyright">
            <a href="/">© 에브리타임</a>
          </li>
        </ul>
      </section>
    </div>
    //jshint ignore:end
  );
}

export default Notlogin;
