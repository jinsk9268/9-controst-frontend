import React, { Component } from 'react';
import PartnerNav from './PartnerNav';
import './PartnerProfile.scss';
import PartnerProfileInfo from './PartnerProfileInfo';
import PartnerProfileCard from './PartnerProfileCard';
import PartnerProfileReservation from './PartnerProfileReservation';
import PartnerProfileReview from './PartnerProfileReview';
import PartnerProfileAside from './PartnerProfileAside';

export default class PartnerProfile extends Component {
  render() {
    return (
      <div className='PartnerProfile'>
        <nav className='partner-profile-nav'>
          <ul>
            <PartnerNav pageLink={'/'} pageName={'홈'} />
            <PartnerNav pageLink={'/partner'} pageName={'상담사 찾기'} />
            <PartnerNav pageLink={'/partner/profile'} pageName={'상담사 프로필'} />
          </ul>
        </nav>
        <main className='partner-profile-main'>
          <section className='partner-profile-section'>
            {/* 파트너 카드 */}
            <PartnerProfileCard />
            {/* 메인 content 구현 */}
            <div className='partner-profile-contents'>
              <header className='profile-contents-wrap-list'>
                <ul className='content-list'>
                  <li className='content-el is-click'>상담사 정보</li>
                  <li className='content-el'>예약 방법</li>
                  <li className='content-el'>상담 후기</li>
                </ul>
              </header>
              {/* 상담사 정보 -> 컴포넌트 */}
              <PartnerProfileInfo />
              {/* 예약 방법 -> 컴포넌트 */}
              <PartnerProfileReservation />
              {/* 상담 후기 -> 컴포넌트 */}
              <PartnerProfileReview />
            </div>
          </section>
          {/* 사이드바 구현 */}
          <PartnerProfileAside />
        </main>
      </div>
    );
  }
}
