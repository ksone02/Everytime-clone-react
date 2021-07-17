import React from 'react';
import './Footer.css';

function Footer() {
    return (
        <div className="bottom">
            <ul className="links">
                <li>
                    <a href="/page/serviveagreement">이용약관</a>
                </li>
                <li className="privacy">
                    <a href="/page/privacy">개인정보처리방침</a>
                </li>
                <li>
                    <a href="/page/rules">커뮤니티이용규칙</a>
                </li>
                <li>
                    <a href="/notice">공지사항</a>
                </li>
                <li>
                    <a href="/page/faq">문의하기</a>
                </li>
                <li className="copyright">
                    <a href="/">© 에브리타임</a>
                </li>
            </ul>
        </div>
    )
}

export default Footer
