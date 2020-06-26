import React from "react";
import "Component/Nav/Nav.scss";
import { Link } from "react-router-dom";

export class Nav extends React.Component {
  render() {
    return (
      <nav className="navbar">
        <div className="navbar-logo">
          <Link to=""></Link>
        </div>
        <div className="dropdown-first-btn">
          <div className="dropdown">
            <button className="dropbtn-left">심리상담 받기</button>
            <div className="dropdown-content">
              <Link to="partner">상담사 찾기</Link>
              <Link to="offline">상담센터 찾기</Link>
              <Link to="#">상담하기</Link>
            </div>
          </div>
        </div>
        <div className="dropdown-second-btn">
          <div className="dropdown">
            <button className="dropbtn-center">자기분석 테스트</button>
            <div className="dropdown-content">
              <Link to="#">심리검사</Link>
              <Link to="#">성격검사</Link>
            </div>
          </div>
        </div>
        <div className="dropdown-third-btn">
          <div className="dropdown">
            <button className="dropbtn-right">약물치료 바로알기</button>
            <div className="dropdown-content">
              <Link to="#">복용약 찾기</Link>
              <Link to="#">약물 의존도 자가체크</Link>
              <Link to="#">정신의학과 찾기</Link>
            </div>
          </div>
        </div>
        <ul className="navbar-login">
          <li className="navbar-login-page">
            <Link to="login" className="navbar-login-a">
              로그인
            </Link>
          </li>
          <li className="navbar-signup">
            <Link to="signup" className="navbar-signup-a">
              회원가입
            </Link>
          </li>
        </ul>
      </nav>
    );
  }
}
export default Nav;
