import React from 'react';
import './LeftSide.css';
import axios from 'axios';

function LeftSide({user_id, user_name, user_nickname}) {

    const logout = async() => {
        try {
            const logoutResponse = await axios.post('http://localhost:3001/logout');  
            logoutResponse.withCredentials = true;
        } catch(e) {

        }
    }

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
                            <a href="/" onClick={logout}>로그아웃</a>
                        </li>
                    </ul>
                    <hr />
                </form>
            </div>
            <div className="card">
                <div className="menus">
                    <a href="/myarticle" className="myarticle">내가 쓴 글</a>
                    <a href="/mycommentarticle" className="mycommentarticle">댓글 단 글</a>
                    <a href="/myscrap" className="myscrap">내 스크랩</a>
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
