import React, { Component } from "react";
import PartnerProfileReviewData from "./PartnerProfileReviewData";
import "./PartnerProfile.scss";

export default class PartnerProfileReview extends Component {
  changePointClassName = (num) => {
    let starNum = this.props.point - num;
    if (starNum >= 0) {
      return "star-point full";
    } else if (-1 < starNum && starNum < -0.5) {
      return "star-point";
    } else if (-0.5 <= starNum && starNum < 0) {
      return "star-point half";
    } else if (this.props.point - num <= -1) {
      return "star-point";
    }
  };

  render() {
    return (
      <section className="profile-content-review">
        <h3>상담 후기</h3>
        <article className="review-star-graph">
          <div className="review-star">
            <div className="review-star-head">
              <h4>상담 만족도 평균</h4>
              <span>4.9</span>
            </div>
            <div className="review-star-list">
              <ol>
                <li className="star-point"></li>
                <li className="star-point"></li>
                <li className="star-point"></li>
                <li className="star-point"></li>
                <li className="star-point"></li>
              </ol>
            </div>
          </div>
          {/* 사용 여부 확인 */}
          <div className="review-graph">
            <div className="review-graph-head">
              <h4>상담 만족도 비율</h4>
            </div>
            <div className="review-graph-list">
              <div className="review-graph-el">
                <div className="review-graph-height"></div>
                <div className="review-graph-num">1</div>
              </div>
              <div className="review-graph-el">
                <div className="review-graph-height"></div>
                <div className="review-graph-num">2</div>
              </div>
              <div className="review-graph-el">
                <div className="review-graph-height"></div>
                <div className="review-graph-num">3</div>
              </div>
              <div className="review-graph-el">
                <div className="review-graph-height one-fourth"></div>
                <div className="review-graph-num">4</div>
              </div>
              <div className="review-graph-el">
                <div className="review-graph-height full"></div>
                <div className="review-graph-num">5</div>
              </div>
            </div>
          </div>
        </article>
        <article className="review-input"></article>
        <article className="review-data">
          <ul className="review-list">
            {/* 리뷰데이터 컴포넌트, map 구현 */}
            <PartnerProfileReviewData />
          </ul>
          <button></button>
        </article>
      </section>
    );
  }
}
