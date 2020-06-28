import React, { Component } from "react";
import PartnerNav from "./PartnerNav";
import "./PartnerProfile.scss";


export default class PartnerProfile extends Component {
  render() {
    return (
        <div className="PartnerProfile">
            <nav className="partner-profile-nav">
                <ul>
                    <PartnerNav pageLink={"/"} pageName={"홈"} />
                    <PartnerNav pageLink={"/partner"} pageName={"상담사 찾기"} />
                    <PartnerNav pageLink={"/partner/profile"} pageName={"상담사 프로필"} />
                </ul>
            </nav>
            <main className="partner-profile-main">
                <section className="partner-profile-section">
                    <div className="partner-profile-card-wrap">
                        <article className="partner-profile-card">
                            <button className="btn-partner-profile-wish">상담사 찜하기</button>
                            <div className="partner-profile-wrap-info">
                                <div className="partner-wrap-img">
                                    <img
                                    className="partner-img"
                                    alt="상담사 사진"
                                    src="https://d2qrvi4l1nprmf.cloudfront.net/images/partner/1548650941_.png"
                                    />
                                </div>
                                <div className="partner-wrap-text">
                                    <div className="partner-text-info">
                                        <h3>상담사 이름</h3>
                                        <h3 className="partner-profile-position">상담사 직책</h3>
                                    </div>
                                    <div className="partner-reputation">
                                        <div className="partner-point-star">
                                            <ol>
                                                <li className=""></li>
                                                <li></li>
                                                <li></li>
                                                <li></li>
                                                <li></li>
                                            </ol>
                                        </div>
                                        <div className="partner-profile-point-num">4.9 (143)</div>
                                    </div>
                                    <div className="partner-session-text">
                                        <span>트로스트 상담 <em>1084회기</em> 진행</span>
                                    </div>
                                </div>
                            </div>
                            <div className="partner-profile-wrap-counsel-type">
                                <div className="partner-counsel-type">
                                    <img
                                        className="partner-counsel-type-img"
                                        alt="문자상담 사진"
                                        src="https://d2qrvi4l1nprmf.cloudfront.net/images/service/partner/ic_item_tt.png"
                                    />
                                    <div className="partner-counsel-type-text">텍스트테라피</div>
                                </div>
                                <div className="partner-counsel-type">
                                    <img
                                        className="partner-counsel-type-img"
                                        alt="전화상담 사진"
                                        src="https://d2qrvi4l1nprmf.cloudfront.net/images/service/partner/ic_item_vt.png"
                                    />
                                    <div className="partner-counsel-type-text">전화상담</div>
                                </div>
                                <div className="partner-counsel-type">
                                    <img
                                        className="partner-counsel-type-img"
                                        alt="대면상담 사진"
                                        src="https://d2qrvi4l1nprmf.cloudfront.net/images/service/partner/ic_item_ot.png"
                                    />
                                    <div className="partner-counsel-type-text last">대면상담</div>
                                </div>
                            </div>
                        </article>
                    </div>
                    {/* 메인 content 구현 */}
                    <div className="partner-profile-contents"></div>
                </section>
                {/* 사이드바 구현 */}
                <aside className="partner-profile-aside">
                    <article className="partner-program-notice">
                        <div className="notice-contents">
                            <h4>알려드립니다!</h4>
                            <p>트로스트는 상담권 결제 후 상담사와 일정을<br /> 
                            조율하여 예약 상담으로 진행됩니다.<br/> 
                            결제 후 바로 상담이 불가능 할 수 있습니다.</p>
                        </div>
                        <button className="btn-apply" type="button">상담 신청하기</button>
                    </article>
                    <article className="partner-program-texttera">
                        <div className="texttera-img">
                            <div className="texttera-header">
                                <h3>텍스트테라피</h3>
                                <button type="button">텍스트테라피 안내버튼</button>
                            </div>
                            <p className="texttera-content">
                                트로스트 앱 또는 웹페이지에서<br />
                                채팅으로 진행되는 상담입니다.
                            </p>
                            <p className="texttera-link">텍스트테라피 진행방법 알아보기</p>
                        </div>
                        <ul className="price-list">
                            <li><span>4주 탈인간 프로그램</span><em>100,010,000원</em></li>
                            <li><span>2주 새사람 프로그램</span><em>5,110,000원</em></li>
                            <li><span>1주 프로그램</span><em>510,000원</em></li>
                            <li><span>50분 프로그램</span><em>110,000원</em></li>
                        </ul>
                    </article>
                    <article className="partner-program-phone">
                        <div className="phone-img">
                            <div className="phone-head-content-wrap">
                                <div className="phone-header">
                                    <h3>전화상담은</h3>
                                    <button type="button">전화상담 안내버튼</button>
                                </div>
                                <p className="phone-content">트로스트 앱에서 진행됩니다.</p>
                                <p className="phone-link">전화상담 진행방법 알아보기</p>
                                <button className="btn-app-install">앱 설치하기</button>
                            </div>   
                            <ul className="app-install-list ">
                                <li className="play-store"></li>
                                <li className="app-store"></li>
                            </ul>
                        </div>
                        <ul className="price-list">
                            <li><span>4주 탈인간 실화 프로그램</span><em>10,010,000원</em></li>
                            <li><span>2주 새사람 프로그램</span><em>5,110,000원</em></li>
                            <li><span>1주 프로그램</span><em>510,000원</em></li>
                            <li><span>50분 프로그램</span><em>110,000원</em></li>
                        </ul>
                    </article>
                    <article className="partner-program-meet">
                        <div className="meet-img">
                            <div className="meet-header">
                                <h3>대면상담은</h3>
                                <button type="button">텍스트테라피 안내버튼</button>
                            </div>
                            <p className="meet-content">
                                오프라인에서 진행됩니다.
                            </p>
                            <p className="meet-link">대면상담 진행방법 알아보기</p>
                        </div>
                        <ul className="price-list">
                            <li><span>4주 탈인간 실화 프로그램</span><em>10,010,000원</em></li>
                            <li><span>2주 새사람 프로그램</span><em>5,110,000원</em></li>
                            <li><span>1주 프로그램</span><em>510,000원</em></li>
                            <li><span>50분 프로그램</span><em>110,000원</em></li>
                        </ul>
                    </article>
                </aside>
            </main>
        </div>
    );
  }
}