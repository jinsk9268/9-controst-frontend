import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Partner.scss";
import PartnerCard from "Pages/Partner/PartnerCard";

class PartnerResult extends Component {
  constructor() {
    super();

    this.state = {
      ptConditionShow: false,
      ptBtnOptionListShow: "고민 연관순",
    };
  }

  ptConditionClassName = () => {
    this.setState({ ptConditionShow: !this.state.ptConditionShow });
  };

  ptBtnClick = (name) => {
    this.setState({ ptBtnOptionListShow: name });
  };

  render() {
    return (
      <header className="partner-list-header">
        <div className="partner-list-header-result">
          <span className="partner-list-header-num">
            검색 결과 <em className="partner-count">56</em> 건
          </span>
        </div>
        <div className="partner-list-search-condition">
          <button
            className="btn-partner-list-search-condition"
            type="button"
            onClick={this.ptConditionClassName}
          >
            {this.state.ptBtnOptionListShow}
          </button>
          <ul
            className={
              this.state.ptConditionShow
                ? "partner-list-option-list"
                : "partner-list-option-list not-show"
            }
          >
            <li
              className="partner-list-option-list-element"
              onClick={(event) => {
                this.ptConditionClassName();
                this.ptBtnClick("고민 연관순");
              }}
            >
              고민 연관순
            </li>
            <li
              className="partner-list-option-list-element"
              onClick={(event) => {
                this.ptConditionClassName();
                this.ptBtnClick("상담 만족도순");
              }}
            >
              상담 만족도순
            </li>
            <li
              className="partner-list-option-list-element"
              onClick={(event) => {
                this.ptConditionClassName();
                this.ptBtnClick("낮은 상담 가격순");
              }}
            >
              낮은 상담 가격순
            </li>
            <li
              className="partner-list-option-list-element"
              onClick={(event) => {
                this.ptConditionClassName();
                this.ptBtnClick("높은 상담 가격순");
              }}
            >
              높은 상담 가격순
            </li>
          </ul>
        </div>
      </header>
    );
  }
}

export default class PartnerList extends Component {
  render() {
    console.log(this.props.partnerData);
    return (
      <section className="partner-list">
        <PartnerResult />

        <div className="partner-list-content-wrap">
          {this.props.partnerData.map((data) => {
            return (
              <PartnerCard
                key={data.name}
                partnerImg={data.profile_image_url}
                name={data.name}
                level={data.level}
                //new={data.new}
                headLine={data.introduction}
                //point={data.point}
                //포인트 확인용
                point={4.6}
                reviewNum={data.counsel_count}
                textPrice={Number(data.prices[0])}
                phonePrice={Number(data.prices[3])}
                meetPrice={Number(data.prices[6])}
                //recommend={data.recommend}
              />
            );
          })}
        </div>

        <div className="partner-list-pages"></div>
      </section>
    );
  }
}
