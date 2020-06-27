import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Partner.scss";

class PartnerResult extends Component {
  render() {
    return (
      <header className="partner-list-header">
        <div className="partner-list-header-result">
          <span className="partner-list-header-num">
            검색 결과 <em className="partner-count">56</em> 건
          </span>
        </div>
        <div className="partner-list-search-condition">
          <button className="btn-partner-list-search-condition" type="button">
            고민 연관순
          </button>
          <ul className="partner-list-option-list">
            <li className="partner-list-option-list-element">고민 연관순</li>
            <li className="partner-list-option-list-element">상담 만족도순</li>
            <li className="partner-list-option-list-element">
              낮은 상담 가격순
            </li>
            <li className="partner-list-option-list-element">
              높은 상담 가격순
            </li>
          </ul>
        </div>
      </header>
    );
  }
}

class PartnerCard extends Component {
  render() {
    return (
      <div className="partner-list-content-wrap">
        <article className="partner-list-box">
          <button className="btn-partner-wish">상담사 찜하기</button>
          <div className="partner-info">
            <div className="partner-info-wrap-img">
              <img
                className="partner-info-img"
                alt="상담사 사진"
                src="https://d2qrvi4l1nprmf.cloudfront.net/images/partner/1548650941_.png"
              />
            </div>
            <div className="partner-info-wrap-text">
              <div className="partner-info-text">
                <span className="partner-info-name">상담사 이름</span>
                <span className="partner-info-position">상담사 직책</span>
                <span className="partner-info-new">신규여부</span>
              </div>
              <div className="partner-info-headline">
                나는누구여긴어디나는누구여긴어디나는누구여긴어디나는누구여긴어디나는누구여긴어디
              </div>
              <div className="partner-info-point-count">
                <div className="partner-info-point">
                  <ol>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                  </ol>
                </div>
                <div className="partner-info-count">(143)</div>
              </div>
            </div>
          </div>
          <div className="partner-price">
            <div className="partner-price-text">
              <img
                className="partner-price-img"
                alt="문자상담 사진"
                src="https://d2qrvi4l1nprmf.cloudfront.net/images/service/partner/ic_item_tt.png"
              />
              <div className="partner-price-won">45,000원</div>
            </div>
            <div className="partner-price-call">
              <img
                className="partner-price-img"
                alt="전화상담 사진"
                src="https://d2qrvi4l1nprmf.cloudfront.net/images/service/partner/ic_item_vt.png"
              />
              <div className="partner-price-won">45,000원</div>
            </div>
            <div className="partner-price-meet">
              <img
                className="partner-price-img"
                alt="대면상담 사진"
                src="https://d2qrvi4l1nprmf.cloudfront.net/images/service/partner/ic_item_ot.png"
              />
              <div className="partner-price-won">45,000원</div>
            </div>
          </div>
        </article>
      </div>
    );
  }
}

// 파트너 페이지 수 (한페이지 카드 12개)
// class PartnerPageNum extends Component {
//     render() {
//         return ();
//     }
// }

export default class PartnerList extends Component {
  render() {
    return (
      <section className="partner-list">
        <PartnerResult />

        <PartnerCard />

        <div className="partner-list-pages"></div>
      </section>
    );
  }
}
