import React, { Component } from 'react';
import './PartnerProfile.scss';

export default class PartnerProfileCard extends Component {
  render() {
    return (
      <div className='partner-profile-card-wrap'>
        <article className='partner-profile-card'>
          <button className='btn-partner-profile-wish'>상담사 찜하기</button>
          <div className='partner-profile-wrap-info'>
            <div className='partner-wrap-img'>
              <img className='partner-img' alt='상담사 사진' src='https://d2qrvi4l1nprmf.cloudfront.net/images/partner/1548650941_.png' />
            </div>
            <div className='partner-wrap-text'>
              <div className='partner-text-info'>
                <h3>상담사 이름</h3>
                <h3 className='partner-profile-position'>상담사 직책</h3>
              </div>
              <div className='partner-reputation'>
                <div className='partner-point-star'>
                  <ol>
                    <li className='star-point'></li>
                    <li className='star-point'></li>
                    <li className='star-point'></li>
                    <li className='star-point'></li>
                    <li className='star-point'></li>
                  </ol>
                </div>
                <div className='partner-profile-point-num'>4.9 (143)</div>
              </div>
              <div className='partner-session-text'>
                <span>
                  트로스트 상담 <em>1084회기</em> 진행
                </span>
              </div>
            </div>
          </div>
          <div className='partner-profile-wrap-counsel-type'>
            <div className='partner-counsel-type'>
              <img
                className='partner-counsel-type-img'
                alt='문자상담 사진'
                src='https://d2qrvi4l1nprmf.cloudfront.net/images/service/partner/ic_item_tt.png'
              />
              <div className='partner-counsel-type-text'>텍스트테라피</div>
            </div>
            <div className='partner-counsel-type'>
              <img
                className='partner-counsel-type-img'
                alt='전화상담 사진'
                src='https://d2qrvi4l1nprmf.cloudfront.net/images/service/partner/ic_item_vt.png'
              />
              <div className='partner-counsel-type-text'>전화상담</div>
            </div>
            <div className='partner-counsel-type'>
              <img
                className='partner-counsel-type-img'
                alt='대면상담 사진'
                src='https://d2qrvi4l1nprmf.cloudfront.net/images/service/partner/ic_item_ot.png'
              />
              <div className='partner-counsel-type-text last'>대면상담</div>
            </div>
          </div>
        </article>
      </div>
    );
  }
}
