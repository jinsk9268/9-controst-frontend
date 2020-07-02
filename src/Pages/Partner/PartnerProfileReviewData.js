import React, { Component } from 'react';
import './PartnerProfile.scss';

export default class PartnerProfileReviewData extends Component {
  changePointClassName = (num) => {
    let starNum = this.props.point - num;
    if (starNum >= 0) {
      return 'star-point full';
    } else if (-1 < starNum && starNum < -0.5) {
      return 'star-point';
    } else if (-0.5 <= starNum && starNum < 0) {
      return 'star-point half';
    } else if (this.props.point - num <= -1) {
      return 'star-point';
    }
  };

  render() {
    return (
      <li className='review-content-wrap'>
        <div className='review-content-top'>
          <div className='review-star-point'>
            <ol>
              <li className='star-point'></li>
              <li className='star-point'></li>
              <li className='star-point'></li>
              <li className='star-point'></li>
              <li className='star-point'></li>
            </ol>
          </div>
          <div className='review-info'>
            <span>1329....</span> 님 / <span>2020-06-26</span>
          </div>
        </div>
        <div className='review-content-main'>
          <div className='review-text'>제 이야기 잘 들어주시고 좋은 말씀도 많이 해주시고 공감도 해주셔서 너무 감사했습니다 !!</div>
          <div className='review-cate'>
            <h5>텍스트테라피 50분 상담권 상담후기</h5>
            <ul>
              <li>#우울</li>
              <li>#늪</li>
              <li>#바닥</li>
            </ul>
          </div>
        </div>
      </li>
    );
  }
}
