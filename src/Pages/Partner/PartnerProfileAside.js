import React, { Component } from 'react';
import './PartnerProfile.scss';

export default class PartnerProfileAside extends Component {
  render() {
    return (
      <aside className='partner-profile-aside'>
        <article className='partner-program-notice'>
          <div className='notice-contents'>
            <h4>알려드립니다!</h4>
            <p>
              트로스트는 상담권 결제 후 상담사와 일정을
              <br />
              조율하여 예약 상담으로 진행됩니다.
              <br />
              결제 후 바로 상담이 불가능 할 수 있습니다.
            </p>
          </div>
          <button className='btn-apply' type='button'>
            상담 신청하기
          </button>
        </article>
        <article className='partner-program-texttera'>
          <div className='texttera-img'>
            <div className='texttera-header'>
              <h3>텍스트테라피</h3>
              <button type='button'>텍스트테라피 안내버튼</button>
            </div>
            <p className='texttera-content'>
              트로스트 앱 또는 웹페이지에서
              <br />
              채팅으로 진행되는 상담입니다.
            </p>
            <p className='texttera-link'>텍스트테라피 진행방법 알아보기</p>
          </div>
          <ul className='price-list'>
            <li>
              <span>4주 코딩로봇 프로그램</span>
              <em>100,010,000원</em>
            </li>
            <li>
              <span>2주 새사람 프로그램</span>
              <em>5,110,000원</em>
            </li>
            <li>
              <span>1주 프로그램</span>
              <em>510,000원</em>
            </li>
            {/* <li>
            <span>50분 프로그램</span>
            <em>110,000원</em>
          </li> */}
          </ul>
        </article>
        <article className='partner-program-phone'>
          <div className='phone-img'>
            <div className='phone-head-content-wrap'>
              <div className='phone-header'>
                <h3>전화상담은</h3>
                <button type='button'>전화상담 안내버튼</button>
              </div>
              <p className='phone-content'>트로스트 앱에서 진행됩니다.</p>
              <p className='phone-link'>전화상담 진행방법 알아보기</p>
              <button className='btn-app-install'>앱 설치하기</button>
            </div>
            <ul className='app-install-list '>
              <li className='play-store'></li>
              <li className='app-store'></li>
            </ul>
          </div>
          <ul className='price-list'>
            <li>
              <span>4주 탈인간 프로그램</span>
              <em>10,010,000원</em>
            </li>
            <li>
              <span>2주 새사람 프로그램</span>
              <em>5,110,000원</em>
            </li>
            <li>
              <span>1주 프로그램</span>
              <em>510,000원</em>
            </li>
            {/* <li>
            <span>50분 프로그램</span>
            <em>110,000원</em>
          </li> */}
          </ul>
        </article>
        <article className='partner-program-meet'>
          <div className='meet-img'>
            <div className='meet-header'>
              <h3>대면상담은</h3>
              <button type='button'>텍스트테라피 안내버튼</button>
            </div>
            <p className='meet-content'>오프라인에서 진행됩니다.</p>
            <p className='meet-link'>대면상담 진행방법 알아보기</p>
          </div>
          <ul className='price-list'>
            <li>
              <span>4주 탈인간 프로그램</span>
              <em>50,010,000원</em>
            </li>
            <li>
              <span>2주 새사람 프로그램</span>
              <em>9,110,000원</em>
            </li>
            <li>
              <span>1주 프로그램</span>
              <em>510,000원</em>
            </li>
            {/* <li>
            <span>50분 프로그램</span>
            <em>110,000원</em>
          </li> */}
          </ul>
        </article>
      </aside>
    );
  }
}
