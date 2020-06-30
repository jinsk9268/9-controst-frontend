import React, { Component } from 'react';
import PartnerNav from './PartnerNav';
import './PartnerProfile.scss';
import PartnerProfileInfo from './PartnerProfileInfo';
import PartnerProfileCard from './PartnerProfileCard';
import PartnerProfileReservation from './PartnerProfileReservation';
import PartnerProfileReview from './PartnerProfileReview';
import PartnerProfileAside from './PartnerProfileAside';

const ptContentTab = {
  tabInfo: <PartnerProfileInfo />,
  tabReservation: <PartnerProfileReservation />,
  tabReview: <PartnerProfileReview />,
};

export default class PartnerProfile extends Component {
  constructor() {
    super();

    this.state = {
      showTab: 'tabInfo',
    };
  }

  clickShowTab = (tabName) => {
    this.setState({ showTab: tabName });
  };

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
                  <li
                    className={this.state.showTab === 'tabInfo' ? 'content-el is-click' : 'content-el'}
                    onClick={() => this.clickShowTab('tabInfo')}
                  >
                    상담사 정보
                  </li>
                  <li
                    className={this.state.showTab === 'tabReservation' ? 'content-el is-click' : 'content-el'}
                    onClick={() => this.clickShowTab('tabReservation')}
                  >
                    예약 방법
                  </li>
                  <li
                    className={this.state.showTab === 'tabReview' ? 'content-el is-click' : 'content-el'}
                    onClick={() => this.clickShowTab('tabReview')}
                  >
                    상담 후기
                  </li>
                </ul>
              </header>
              {ptContentTab[this.state.showTab]}
            </div>
          </section>
          {/* 사이드바 구현 */}
          <PartnerProfileAside />
        </main>
      </div>
    );
  }
}
