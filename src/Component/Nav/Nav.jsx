import React from 'react';
import 'Component/Nav/Nav.scss';
import imgA from '../Images/trost_logo.png';

export class Nav extends React.Component {
  

render() {
        return (
        <nav class="navbar">
            <div class="navbar-logo">
              <image class=""></image>
              <a href="#"></a>
            </div>
              <div class="dropdown-first-btn">
                <div class="dropdown">
                <button class="dropbtn-left">심리상담 받기</button>
                <div class="dropdown-content">
                    <a href="#">상담사 찾기</a>
                    <a href="#">상담센터 찾기</a>
                    <a href="#">상담하기</a>
                </div>
                </div>
               </div>
            <div class="dropdown-second-btn">
                <div class="dropdown">
                <button class="dropbtn-center">자기분석 테스트</button>
                <div class="dropdown-content">
                    <a href="#">심리검사</a>
                    <a href="#">성격검사</a>
                </div>
                </div>  
            </div>
            <div class="dropdown-third-btn">
                <div class="dropdown">
                <button class="dropbtn-right">약물치료 바로알기</button>
                <div class="dropdown-content">
                    <a href="#">복용약 찾기</a>
                    <a href="#">약물 의존도 자가체크</a>
                     <a href="#">정신의학과 찾기</a>
                </div>
                </div>   
            </div>
            <ul class="navbar-login">
               <li class="navbar-login-page"><a class="navbar-login-a" href="#">로그인</a></li>
               <li class="navbar-signup"><a class="navbar-signup-a"href="#">상담사 회원가입</a></li>
            </ul>
        </nav>
        )
    }
}
export default Nav;