import React from 'react';
import 'Pages/Login/Login.scss';
import { Link } from 'react-router-dom';


export class Login extends React.Component {


render() {
        return (
        <div className="login-container">
            <div className="login-box">
                <div className="login-logo">
                <button className="login-close-btn" type="button">닫기</button>
                <form className="login-form"> 
                <div className="login-btn-wrap">

                <button type="button" className="login-btn-kakao" >  카카오톡 로그인</button>
                <button type="button" className="login-btn-facebook" >페이스북 로그인</button>
                <button type="button" className="login-btn-naver" >네이버 로그인</button>
                <button type="button" className="login-btn-apple" >애플 로그인</button>


                <div className="login-email">
                  <Link to="#" className="login-email-a">이메일로 로그인</Link>
                </div>
                </div>
                <div className="login-info">트로스트 계정이 없으신가요?

                  <Link to="#" className="sign-link">회원가입하기</Link>
                </div>
                </form>

            </div>
            </div>
        </div>

        )
    }
}
export default Login;