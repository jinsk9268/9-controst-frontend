import React from "react";
import "./Signup.scss";

import { Link } from "react-router-dom";

export class Signup extends React.Component {
  constructor() {
    super();
    this.state = {
      id: "",
      pw: "",
      pwre: "",
      nick: "",
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
  pwreChangeEvent = (e) => {
    this.setState({ pwre: e.target.value });
    console.log("pw >>> ", this.state.pwre);
  };
  nickChangeEvent = (e) => {
    this.setState({ pwre: e.target.value });
    console.log("pw >>> ", this.state.pwre);
  };

  clickHandler = () => {
    //e.prevent.Default();
    //POST
    fetch("http://10.58.0.88:8000/users/signup", {
      method: "POST",
      body: JSON.stringify({
        email: this.state.id,
        password: this.state.pw,
        nickname: this.state.pwre,
      }), //이 )소괄호는 아직 fetch에 소괄호니까 밑에 then 가능
    })
      .then((res) => res.json()) // 제이슨 바디로 온다...
      .then((res) => console.log(res)); //그냥 콘솔에 뿌리고 끝 리턴 안함
  };
  //.then(res=> console.log(res)); 그냥 콘솔에 뿌리고 끝 리턴 안함 then은 겟이든 포스트던 불림. 에러던 뭐든 ,,,꼭 제이슨 바디가 잇어야만 들어오는 것이 아님.
  //.then(res=> console.log(res)); 위에 이미 뿌리니까 이 콘솔로그는 안되는거임.. 이거 생각보다 중요!!
  //첫번쨰 then에서 콘솔 찍어보기 then(Res=>res.status))<-이거만 확인하기
  //console.log(res.status)
  //콘솔에서 200인지 ,400인지 확인 가능

  render() {
    return (
      <div className="signUp-email-content">
        <h2 className="signUp-head">이메일로 회원가입</h2>
        <div className="signUp-input-wrap">
          <div className="signUp-col-left">
            <div className="signUp-input-box">
              <label for="userEmail">
                <em className="signUp-input-box-head">이메일</em>
              </label>
              <div className="signUp-style-col-2">
                <input
                  onChange={this.idChangeEvent}
                  className="idinput"
                  id="logIn"
                  type="text"
                  className="signUp-input-box-input join-style-popup
                          -input-box-input-inline is-focus"
                  id="userEmail"
                  name="emil"
                  maxlength="50"
                  autofocus=""
                />
                <button
                  type="button"
                  className="signUp-input-box-btn-inline-1"
                  id="btnOverlapCheckEmail"
                >
                  중복확인
                </button>
              </div>
              <div className="signUp-input-box-bottom-info" id="emailMsg">
                <p className="signUp-input-box-bottom--info-list-1">
                  수신 가능한 이메일을 입력해주세요. 최초 인증 및 비밀번호
                  분실시 안내 메일이 발송됩니다.
                </p>
              </div>
            </div>
            <div className="signUp-input-box">
              <label for="userPw">
                <em className="signUp-input-box-head">비밀번호</em>
                <input
                  onChange={this.pwChangeEvent}
                  type="password"
                  className="signUp-input-box-input"
                  id="userPw"
                  minlength="6"
                  maxlength="14"
                />
              </label>
              <div className="signUp-input-box-bottom-info" id="pwMsg">
                <p className="signUp-input-box-bottom-info-list-2">
                  6~14자 이내로 영문, 숫자, 특수문자를 조합하여 작성합니다.
                </p>
                <p className="signUp-input-box-bottom-info-list-3">
                  사용 가능한 특수문자 !@#$%^&amp;*?()_~
                </p>
              </div>
            </div>
            <div className="signUp-input-box">
              <label for="userPwCheck">
                <em className="signUp-input-box-head">비밀번호 확인</em>
                <input
                  onChange={this.pwreChangeEvent}
                  type="password"
                  className="signUp-input-box-input"
                  id="userPwCheck"
                />
              </label>
              <div
                className="signUp-input-box-bottom-info"
                id="pwCheckMsg"
              ></div>
            </div>
          </div>
          <div className="signUp-col-right">
            <div className="signUp-input-box">
              <label for="">
                <em className="signUp-input-box-head">닉네임</em>
              </label>
              <div className="signUp-style-col-2">
                <input
                  onChange={this.nickChangeEvent}
                  type="text"
                  className="signUp-input-box-input-3"
                  id="inputJoinNickName"
                  minlength="2"
                  maxlength="8"
                />
                <button
                  type="button"
                  className="signUp-input-box-btn-inline-2"
                  id="btnOverlapCheckNickname"
                >
                  중복확인
                </button>
              </div>
              <div
                className="signUp-input-box-bottom-info"
                id="nicknameCheckMsg"
              >
                <p className="signUp-input-box-bottom-info-list-4">
                  닉네임은 상담 시 사용되는 이름으로 가입 후 수정이 불가합니다.
                </p>
                <p className="signUp-input-box-bottom-info-list-5">
                  자동으로 입력된 닉네임은 가입완료 전에 수정이 가능합니다.
                </p>
              </div>
            </div>
            <div className="signUp-input-box">
              <label for="inputJoinRecUserCode">
                <em className="signUp-input-box-head">추천인 코드(선택)</em>
              </label>
              <input
                type="text"
                className="signUp-input-box-input"
                id="inputJoinRecUserCode"
                maxlength="50"
              />
              <div
                className="signUp-input-box-bottom-info"
                id="recUserCodeCheckMsg"
              ></div>
            </div>
            <div className="signUp-input-box">
              <label for="inputJoinRecProgramCode">
                <em className="signUp-input-box-head">맞춤 추천 코드(선택)</em>
              </label>
              <input
                type="text"
                className="signUp-input-box-input"
                id="inputJoinRecProgramCode"
                maxlength="50"
              />
              <div
                className="signUp-input-box-bottom-info"
                id="recProgramCodeCheckMsg"
              >
                <p className="signUp-input-box-bottom-info-list-6">
                  맞춤 추천 프로그램을 구입하신 분만 입력해주세요.
                </p>
                <p className="signUp-input-box-bottom-info-list-7">
                  맞춤 추천 프로그램으로 구매하신 상담권은 트로스트 앱에서만
                  사용 가능합니다.
                </p>
              </div>
            </div>
          </div>
        </div>
        <label className="signUp-bottom-checkbox">
          <input
            type="checkbox"
            name="emailAgreeTerms"
            id="checkboxEmailAgreeTerms"
          />
          (선택)무료 상담, 할인 이벤트 등의 혜택 정보를 수신합니다.
        </label>
        <button
          onClick={this.clickHandler}
          className="main-btn-active"
          type="button"
          id="btnLoginEmail"
          style={{
            backgroundColor:
              this.state.id && this.state.pw.length > 5 ? "#f57c00" : "#f59000",
          }}
          className="signUp-main-btn"
          type="button"
          id="submitSignUpEmail"
          disabled=""
        >
          가입 완료{" "}
        </button>
        <div className="signUp-popup-info-txt">
          이미 트로스트 회원이신가요?
          <button
            className="signUp-popup-link-join"
            id="goLoginMain2"
            type="button"
          >
            로그인
          </button>
        </div>
        <button
          className="join-style-popup-close js-popup-bg-close"
          type="button"
        >
          닫기
        </button>
      </div>
    );
  }
}
export default Signup;
