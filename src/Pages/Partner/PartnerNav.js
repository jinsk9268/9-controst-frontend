import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Partner.scss";

export default class PartnerNav extends Component {
  render() {
    return (
      <nav className="partner-nav">
        <ul>
          <li>
            <Link to="/">홈</Link>
          </li>
          <li>
            <Link to="/partner">상담사 찾기</Link>
          </li>
        </ul>
      </nav>
    );
  }
}
