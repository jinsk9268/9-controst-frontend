import React from "react";
import "./SignIn.scss";
import { Link } from "react-router-dom";

class SignIn extends React.Component {
  constructor() {
    super();
    this.state = {
      id: "",
      pw: "",
    };
  }

  idChangeEvent = (e) => {
    this.setState({ id: e.target.value });
    console.log("id >>> ", this.state.id);
  };

  pwChangeEvent = (e) => {
    this.setState({ pw: e.target.value });
    console.log("pw >>> ", this.state.pw);
  };

  clickHandler = () => {
    //e.prevent.Default();
    //POST
    fetch("http://10.58.0.88:8000/users/signin", {
      method: "POST",
      body: JSON.stringify({
        email: this.state.id,
        password: this.state.pw,
      }), //이 )소괄호는 아직 fetch에 소괄호니까 밑에 then 가능
    })
      .then((res) => res.json()) // 제이슨 바디로 온다...
      .then((res) => console.log(res)); //그냥 콘솔에 뿌리고 끝 리턴 안함
  };

  render() {
    return (
      <div className="signIn-container">
        <h2 className="signIn-head">이메일 로그인</h2>
        <div className="signIn-input-box">
          <label for="user-email-login">
            <em className="user-head">아이디</em>
            <input
              type="text"
              onChange={this.idChangeEvent}
              className="idinput"
              id="user-email-login"
              maxlength="50"
              autofocus=""
              style={{
                borderColor: this.state.id.length > 1 ? "#f57c00" : "#9e9e9e",
              }}
            />
          </label>
          <div className="signIn-npminfo" id="emailLoginMsg">
            {" "}
          </div>
        </div>
        <div className="signIn-input-box">
          <label for="user-pw-login">
            <em className="user-head">비밀번호</em>
            <input
              type="password"
              onChange={this.pwChangeEvent}
              className="pwinput"
              minlength="6"
              maxlength="14"
              style={{
                borderColor: this.state.pw.length > 1 ? "#f57c00" : "#9e9e9e",
              }}
            />
          </label>
          <div className="signIn-info" id="pwLoginMsg"></div>
          <div className="signIn-bottom-note">
            <div id="loginMsg"></div>
          </div>
        </div>
        <button
          onClick={this.clickHandler}
          className="main-btn-active"
          type="button"
          id="btnLoginEmail"
          style={{
            backgroundColor:
              this.state.id && this.state.pw.length > 5 ? "#f57c00" : "#f59000",
          }}
        >
          로그인
        </button>
        <div className="login-info-txt">
          <button className="login-link-join-1" id="goJoinMain2" type="button">
            회원가입
          </button>
          <button className="login-link-join-2" id="gofindPw" type="button">
            비밀번호 찾기
          </button>
        </div>
        <button
          id="popupLoginClose"
          class="join-style-popup-close js-popup-btn-close"
          type="button"
        >
          닫기
        </button>
      </div>
    );
  }
}
export default SignIn;
