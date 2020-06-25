import React, { Component } from "react";

export default class Main extends Component {
  render() {
    return (
      <div className="container">
        <section className="section-one">
          <div className="content-box-one">
            <div className="main-title">
              <div className="main-animation">"사람들뭐라고"</div>
              <div className="main-sub-title">
                " 나의 24시간 마음전문가 트로스트 "
              </div>
            </div>
            <div className="main-app-link">
              <button className="google-app"></button>
              <button className="appstore-app"></button>
            </div>
            <div className="main-center">
              <p className="center-text">
                지금까지 트로스트에서 위안을 얻은 분들은
                <br />
                <span className="count-animation"></span>명 입니다
              </p>
            </div>
          </div>
        </section>
        <section className="section-two">
          <div className="content-box-two">
            <h2 className="content-title">트로스트와 함께한 하루</h2>
            <ul className="trost-day-list">
              <li>
                <button className="trost-day-one">
                  AM 1:00
                  <p>바로상담 신청</p>
                </button>
              </li>
              <li>
                <button className="trost-day-one">
                  AM 8:30
                  <p>
                    출근길 <span>감정기록</span>
                  </p>
                </button>
              </li>
              <li>
                <button className="trost-day-one">
                  PM 12:00
                  <p>
                    점심시간 <span>미션 수행</span>
                  </p>
                </button>
              </li>
              <li>
                <button className="trost-day-one">
                  PM 6:00
                  <p>
                    퇴근길 <br />
                    <span>마음정리 보고서</span>
                  </p>
                </button>
              </li>
              <li>
                <button className="trost-day-one">
                  PM 10:00
                  <p>
                    <span>예약 상담</span> 진행
                  </p>
                </button>
              </li>
            </ul>
            <button className="trost-all-day-btn">
              트로스트와 24시간 함께해보기 
            </button>
          </div>
        </section>
        <section className="section-three">
          <div className="content-box-three">
            <h2 className="content-title">감정데이터에 기반한 전문 심리상담</h2>
            <div className="partner-intro-box">
              <ul className="partner-intro-list">
                <li className="partner-intro-item">
                  상담, 심리, 임상 전공 석사 졸업 이상의 학력!
                </li>
                <li className="partner-intro-item">
                  공인된 상담학회의 자격증 보유
                  <ul className="partner-intro-sub-list">
                    <li>- 한국상담심리학회 상담심리사 2급 이상</li>
                    <li>- 한국상담학회 전문상담사 2급 이상</li>
                  </ul>
                </li>
                <li className="partner-intro-item">
                  상담진행 횟수, 후기로 검증된 상담사
                </li>
              </ul>
              <div className="partner-intro-img"></div>
            </div>
          </div>
        </section>
        <section className="section-four">
          <div className="content-box-four">
            <ul className="service-tab">
              <li className="text-service">텍스트테라피</li>
              <li className="call-service">전화상담</li>
              <li className="pc-version">PC버전</li>
            </ul>
            <div className="service-contents">
              <div className="text-service-contents">
                <div className="text-service-slide">
                  <div className="text-service-slide-bg">
                    <ul className="text-service-slide-images">
                      <li className="slide-img"></li>
                      <li className="slide-img"></li>
                      <li className="slide-img"></li>
                      <li className="slide-img"></li>
                      <li className="slide-img"></li>
                    </ul>
                  </div>
                </div>
                <h3>텍스트 테라피</h3>
                <p>
                  트로스트 앱 또는 웹페이지에서 전문 심리상담사와 채팅으로
                  진행되는 상담입니다.
                  <br />
                  익명으로 모든 비밀이 보장되며, 상담사와 일정을 조율해 자신이
                  원하는 시간에 편리하게 상담을 받을 수 있습니다.
                </p>
                <div className="service-link-tab">
                  <button className="service-info">상담권 정보</button>
                  <a href="#">이용 안내</a>
                </div>
              </div>
              <div className="call-service-contents">
                <div className="call-service-slide">
                  <div className="call-service-slide-bg"></div>
                </div>
                <h3>전화상담</h3>
                <p>
                  트로스트 앱을 통해 전문 심리상담사와 전화로 진행되는
                  상담입니다.
                  <br />
                  익명으로 모든 비밀이 보장되며, 상담사와 일정을 조율해 자신이
                  원하는 시간에 편리하게 상담을 받을 수 있습니다.
                </p>
                <div className="service-link-tab">
                  <button className="service-info">상담권 정보</button>
                  <a href="#">이용 안내</a>
                </div>
              </div>
              <div className="pc-version-contents">
                <p>
                  PC를 이용하여
                  <br />
                  트로스트 웹사이트에서도
                  <br />
                  상담을 받으실 수 있습니다.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="section-five">
          <div className="content-box-five">
            <h2 className="content-title">심리상담 후기</h2>
            <ul className="review-list">
              <li className="review-header">
                <strong className="review-program">
                  대면상담 4주 프로그램
                </strong>
                <div className="hash-tags">
                  <span>#우울#불안#스트레스#인간관계#자존감상실</span>
                </div>
                <div className="review-text">
                  대면상담은 첨이라서 좀 많이 긴장되긴 했지만 좋았습니다!
                  상담사님 소개도 꼼꼼히 읽고 후기도 꼼꼼히 읽어서 그런지 괜히
                  혼자 친근감 느껴지고 편안하게 느껴지더라고요 ㅎㅎㅎㅎ상담을
                  진행하면할수록 진짜 하길 잘했다는 생각많이 들었고 무엇보다
                  제가 느끼는 우울한감정들을 컨트롤 할 수 있게 되었고 스스로를
                  더 잘이해하게 되었다는게 너무 좋습니다. 평소같으면 무너졌을
                  일들을 지금은 이렇게 아무렇지 않게 지나보내고 있네요 ㅎㅎ
                  대면상담 끝나면 텍스트나 전화로 계속 이어나가려구요.
                </div>
                <div className="review-user-name">4922...님</div>
              </li>
            </ul>
            <div className="slide-left"></div>
            <div className="slide-right"></div>
          </div>
        </section>
        <section className="section-six">
          <div className="content-box-six">
            <h2 className="content-title">기술 연구</h2>
            <p className="technical-research">
              트로스트는 전산심리치료(Computational Psychotherapy) 분야를
              선도하며, <br />
              효과적인 심리치료를 위한 자연어처리 기술과 기계학습 모델을
              연구합니다.
            </p>
            <div className="technical-research-list">
              <div className="technical-research-item">
                <div className="technical-research-head">
                  01.
                  <br />
                  머신러닝으로 의미있는 정보찾기
                </div>
                <div className="technical-research-img"></div>
                <div className="technical-research-text">
                  트로스트의 머신러닝 기술은 당신의 이야기 속에서 중요한{" "}
                  <span>비언어적 단서</span>를 찾아냅니다.
                  <br />
                  상담학적으로 의미있는 사실, 경험, 변화의 실마리가 되는 순간 등{" "}
                  <span>5개 주요반응</span>을 통해 심리치료 효과를 높입니다.
                </div>
                <div className="technical-research-notice">
                  ※ 본 연구는 2019년 자연어처리 분야 최고 수준의 국제학술대회
                  NAACL에서 발표, 논문 게재 승인되며 기술력을 인정받았습니다.
                </div>
              </div>
              <div className="technical-research-item">
                <div className="technical-research-head">
                  01.
                  <br />
                  머신러닝으로 의미있는 정보찾기
                </div>
                <div className="technical-research-img"></div>
                <div className="technical-research-text">
                  트로스트의 머신러닝 기술은 당신의 이야기 속에서 중요한{" "}
                  <span>비언어적 단서</span>를 찾아냅니다.
                  <br />
                  상담학적으로 의미있는 사실, 경험, 변화의 실마리가 되는 순간 등{" "}
                  <span>5개 주요반응</span>을 통해 심리치료 효과를 높입니다.
                </div>
                <div className="technical-research-notice">
                  ※ 본 연구는 2019년 자연어처리 분야 최고 수준의 국제학술대회
                  NAACL에서 발표, 논문 게재 승인되며 기술력을 인정받았습니다.
                </div>
              </div>
            </div>
            <div className="content-six-footer">
              <h3>투자사</h3>
              <div className="content-six-footer-img">
                <div className="content-six-footer-img-one"></div>
                <div className="content-six-footer-img-two"></div>
              </div>
            </div>
          </div>
        </section>
        <section className="section-seven">
          <div className="content-box-seven">
            <h2 className="content-title">트로스트 모바일 EAP</h2>
            <div className="eap-intro">
              <div className="eap-intro-title">
                EAP(Employee Assistance Program) 란?
              </div>
              <div className="eap-intro-text">
                기업 내 임직원이 개인, 조직 내 문제로 어려움을 겪을 때 <br />
                심리진단, 상담 서비스 등을 통해 종합적으로 해결방안을 지원하는
                복지 프로그램
              </div>
            </div>
            <div className="eap-contents">
              <div className="eap-content">
                <div className="eap-content-img"></div>
                <div className="eap-content-text">
                  <div className="eap-content-title">철저한 익명성 보장</div>
                  <div className="eap-content-sub-title">
                    대면상담의 부담을 벗어나 훨씬 더 편하고 자유로운 이용
                  </div>
                </div>
              </div>
              <div className="eap-content">
                <div className="eap-content-img"></div>
                <div className="eap-content-text">
                  <div className="eap-content-title">철저한 익명성 보장</div>
                  <div className="eap-content-sub-title">
                    대면상담의 부담을 벗어나 훨씬 더 편하고 자유로운 이용
                  </div>
                </div>
              </div>
              <div className="eap-content">
                <div className="eap-content-img"></div>
                <div className="eap-content-text">
                  <div className="eap-content-title">철저한 익명성 보장</div>
                  <div className="eap-content-sub-title">
                    대면상담의 부담을 벗어나 훨씬 더 편하고 자유로운 이용
                  </div>
                </div>
              </div>
            </div>
            <div className="eap-content-contact">
              <a href="#" className="eap-content-contact-email">
                제휴 문의 : management@hu-mart.com
              </a>
            </div>
          </div>
        </section>
        <section className="section-eight">
          <div className="content-box-eight">
            <h3 className="eap-companies-title"></h3>
            <div className="eap-companies">
              <div className="eap-company"></div>
              <div className="eap-company"></div>
              <div className="eap-company"></div>
              <div className="eap-company"></div>
              <div className="eap-company"></div>
              <div className="eap-company"></div>
              <div className="eap-company"></div>
              <div className="eap-company"></div>
              <div className="eap-company"></div>
              <div className="eap-company"></div>
              <div className="eap-company"></div>
              <div className="eap-company"></div>
              <div className="eap-company"></div>
              <div className="eap-company"></div>
            </div>
            <h3 className="partnership-title">제휴 기업</h3>
            <div className="partnership-companies">
              <div className="partnership-company"></div>
              <div className="partnership-company"></div>
              <div className="partnership-company"></div>
              <div className="partnership-company"></div>
              <div className="partnership-company"></div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
