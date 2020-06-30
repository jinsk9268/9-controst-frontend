import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Partner.scss';

export default class PartnerCard extends Component {
  constructor() {
    super();

    this.state = {
      btnWishChange: false,
    };
  }

  ptRecomendAdd = () => {
    return this.props.level === '마스터 상담사' ? 'partner-list-box marter-recommend ' : 'partner-list-box';
  };

  ptWishClassName = () => {
    this.setState({ btnWishChange: !this.state.btnWishChange });
  };

  ptPositionClassName = () => {
    if (this.props.level === '마스터 상담사') {
      return 'partner-info-position main';
    } else if (this.props.level === '전문 상담사') {
      return 'partner-info-position sub';
    } else if (this.props.level === '일반 상담사') {
      return 'partner-info-position nomal';
    }
  };

  ptPointClassName = (num) => {
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
      <article className={this.ptRecomendAdd()}>
        <button className={this.state.btnWishChange ? 'btn-partner-wish add-wish' : 'btn-partner-wish'} onClick={this.ptWishClassName}>
          상담사 찜하기
        </button>
        <div className='partner-info'>
          <div className='partner-info-wrap-img'>
            <img className='partner-info-img' alt='상담사 사진' src={this.props.partnerImg} />
          </div>
          <div className='partner-info-wrap-text'>
            <div className='partner-info-text'>
              <span className='partner-info-name'>{this.props.name}</span>
              <span className={this.ptPositionClassName()}>{this.props.level}</span>
              {/* <span className="partner-info-new">빼기로함</span>  */}
            </div>
            <div className='partner-info-headline'>{this.props.headLine}</div>
            <div className='partner-info-point-count'>
              <div className='partner-info-point'>
                <ol>
                  <li className={this.ptPointClassName(1)}></li>
                  <li className={this.ptPointClassName(2)}></li>
                  <li className={this.ptPointClassName(3)}></li>
                  <li className={this.ptPointClassName(4)}></li>
                  <li className={this.ptPointClassName(5)}></li>
                </ol>
              </div>
              <div className='partner-info-count'>{`(${this.props.reviewNum})`}</div>
            </div>
          </div>
        </div>
        <div className='partner-price'>
          <div className='partner-price-text'>
            <img
              className='partner-price-img'
              alt='문자상담 사진'
              src='https://d2qrvi4l1nprmf.cloudfront.net/images/service/partner/ic_item_tt.png'
            />
            {/* <div className="partner-price-won">1,000,000원</div> */}
            {/* 확인용 */}
            <div className='partner-price-won'>{`${this.props.textPrice.toLocaleString()}원`}</div>
          </div>
          <div className='partner-price-call'>
            <img
              className='partner-price-img'
              alt='전화상담 사진'
              src='https://d2qrvi4l1nprmf.cloudfront.net/images/service/partner/ic_item_vt.png'
            />
            {/* <div className="partner-price-won">1,000,000원</div> */}
            {/* 확인용 */}
            <div className='partner-price-won'>{`${this.props.phonePrice.toLocaleString()}원`}</div>
          </div>
          <div className='partner-price-meet'>
            <img
              className='partner-price-img'
              alt='대면상담 사진'
              src='https://d2qrvi4l1nprmf.cloudfront.net/images/service/partner/ic_item_ot.png'
            />
            {/* <div className="partner-price-won">1,000,000원</div> */}
            {/* 확인용 */}
            <div className='partner-price-won'>{`${this.props.meetPrice.toLocaleString()}원`}</div>
          </div>
        </div>
      </article>
    );
  }
}
