import React from 'react';
import './LeftSide.css';

function LeftSide({user_id, user_name, user_nickname}) {

    return (
        <div className="leftside">
            <div className="card pconly">
                <form className="logged">
                    <img src="https://cf-fpi.everytime.kr/0.png" className="picture" alt="profile"/>
                    <p className="nickname">{user_nickname}</p>
                    <p className="school">{user_name}</p>
                    <p className="school">{user_id}</p>
                    <ul className="buttons">
                        <li>
                            <a href="/my">내 정보</a>
                        </li>
                        <li>
                            <a href="/user/logout">로그아웃</a>
                        </li>
                    </ul>
                    <hr />
                </form>
            </div>
            <div className="card">
                <div className="menus">
                    <a href="/myarticle" class="myarticle">내가 쓴 글</a>
                    <a href="/mycommentarticle" class="mycommentarticle">댓글 단 글</a>
                    <a href="/myscrap" class="myscrap">내 스크랩</a>
                </div>
            </div>
            <div className="card">
                <div className="banner">
                    <a href="href=https://ad.everytime.kr/adClick?adToken=4ZrJFI3XuA6VKL6UPoRXNwoheK2MvRbSuzMz%2Fi1zmlMZI%2FOapwZoYoNv3Nbs2OlfvbqYkRUyMxT7zvHFJDI8UWXAVWHETrxkcgPF4c9DGfj6AE3Jbfafo24O3h0KXTMxzrbiHBV4PKLLN1tBInHWFzlJG%2FLpMljGnmg4aaJvY7UnMqOrpBk2kYvBFJHaBiJJdKio2gEFhqAT30fN4%2FUX0kB1kK1X1dyDhMS1ZAcjd6TpP%2Bq%2FEUmCKo4BqmyhKUMt">
                        <img src="https://cf-eba.everytime.kr/20210715_LGinnotek_card.jpg" alt="ad" />
                    </a>
                </div>
            </div>
        </div>
    )
}

export default LeftSide
