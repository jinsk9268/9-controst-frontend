import React, { Component } from "react";
import "./Partner.scss";
import PartnerNav from "./PartnerNav.jsx";

export default class Partner extends Component {
  render() {
    return (
      <div className="Partner">
        <PartnerNav />
        <main className="partner-main">
          {/* 상담사 찾기 aside */}
          <aside className="partner-filter">
            {/* 상담사 찾기 arti-1 */}
            <article className="partner-filter-box">
              <div className="partner-filter-search">
                <button className="btn-partner-filter-search" type="button">
                  찾기
                </button>
                <input
                  type="search"
                  placeholder="상담사 이름 검색"
                  className="input-partner-filter-search"
                />
              </div>
            </article>
            {/* 상담사 찾기 arti-2 */}
            <article className="partner-filter-box">
              <h3 className="partner-filter-keyword">나의 고민 키워드</h3>
              <button className="btn-partner-filter-keyword" type="button">
                다시 선택하기
              </button>
              <div className="partner-filter-keyword-wrap">
                <ul className="partner-filter-keyword-ul">
                  <li className="partner-filter-keyword-li">#우울</li>
                  <li className="partner-filter-keyword-li">#우울우울</li>
                  <li className="partner-filter-keyword-li">#우울</li>
                  <li className="partner-filter-keyword-li">#우울</li>
                  <li className="partner-filter-keyword-li">#우울</li>
                </ul>
              </div>
              <div className="partner-filter-box-type">
                <h3>상담 유형</h3>
                <div className="partner-filter-box-type-row">
                  <input
                    type="checkbox"
                    name="check-counseling-type"
                    value="typeText"
                    id="checkbox-text"
                  />
                  <label className="type-checkbox-1" for="checkbox-text">
                    텍스트테라피
                  </label>
                </div>
                <div className="partner-filter-box-type-row">
                  <input
                    type="checkbox"
                    name="check-counseling-type"
                    value="typeText"
                    id="checkbox-call"
                  />
                  <label className="type-checkbox-1" for="checkbox-call">
                    전화상담
                  </label>
                </div>
                <div className="partner-filter-box-type-row">
                  <input
                    type="checkbox"
                    name="check-counseling-type"
                    value="typeText"
                    id="checkbox-meet"
                  />
                  <label className="type-checkbox-1" for="checkbox-meet">
                    대면상담
                  </label>
                </div>
              </div>
              <div className="partner-filter-box-zone">
                <h3>지역</h3>
                <select className="partner-filter-box-zone-select">
                  <option value="전체">전체</option>
                  <option value="서울">서울</option>
                  <option value="경기">경기</option>
                  <option value="인천">인천</option>
                  <option value="세종">세종</option>
                  <option value="광주">광주</option>
                  <option value="대전">대전</option>
                  <option value="대구">대구</option>
                  <option value="울산">울산</option>
                  <option value="부산">부산</option>
                  <option value="강원">강원</option>
                  <option value="충북">충북</option>
                  <option value="충남">충남</option>
                  <option value="전북">전북</option>
                  <option value="전남">전남</option>
                  <option value="경북">경북</option>
                  <option value="경남">경남</option>
                  <option value="제주">제주</option>
                </select>
              </div>
            </article>
            {/* 상담사 찾기 arti-2 */}
            <article className="partner-filter-box">
              <h3 className="partner-filter-keyword add-condition">상세조건</h3>
              <button className="btn-partner-filter-keyword" type="button">
                선택 초기화
              </button>
              <div className="partner-filter-box-type level">
                <h4>
                  상담사 트로스트 레벨
                  <button className="btn-partner-level-guide" type="button">
                    상담사 트로스트 레벨 안내
                  </button>
                </h4>
                <div className="partner-filter-box-type-row check-level">
                  <input
                    type="checkbox"
                    name="check-counseling-type"
                    value="typeText"
                    id="checkbox-master"
                  />
                  <label className="type-checkbox-2" for="checkbox-master">
                    마스터 상담사
                  </label>
                </div>
                <div className="partner-filter-box-type-row check-level">
                  <input
                    type="checkbox"
                    name="check-counseling-type"
                    value="typeText"
                    id="checkbox-sub"
                  />
                  <label className="type-checkbox-2" for="checkbox-sub">
                    전문 상담사
                  </label>
                </div>
                <div className="partner-filter-box-type-row check-level">
                  <input
                    type="checkbox"
                    name="check-counseling-type"
                    value="typeText"
                    id="checkbox-nomal"
                  />
                  <label className="type-checkbox-2" for="checkbox-nomal">
                    일반 상담사
                  </label>
                </div>
              </div>
              <div className="partner-filter-checkbox">
                <h4>상담사 성별</h4>
                <div className="filter-radio-wrap">
                  <div className="partner-filter-radio">
                    <input
                      type="radio"
                      name="check-counseling-gender-type"
                      value="type-radio"
                      id="radio-gender-all"
                    />
                    <label className="type-checkbox-3" for="radio-gender-all">
                      무관
                    </label>
                  </div>
                  <div className="partner-filter-radio">
                    <input
                      type="radio"
                      name="check-counseling-gender-type"
                      value="type-radio"
                      id="radio-gender-m"
                    />
                    <label className="type-checkbox-3" for="radio-gender-m">
                      남자
                    </label>
                  </div>
                  <div className="partner-filter-radio">
                    <input
                      type="radio"
                      name="check-counseling-gender-type"
                      value="type-radio"
                      id="radio-gender-f"
                    />
                    <label className="type-checkbox-3" for="radio-gender-f">
                      여자
                    </label>
                  </div>
                </div>
              </div>
              <div className="partner-filter-checkbox">
                <h4>상담 가능 요일</h4>
                <div className="filter-radio-wrap">
                  <div className="partner-filter-radio">
                    <input
                      type="radio"
                      name="check-counseling-day-type"
                      value="type-radio"
                      id="radio-day-all"
                    />
                    <label className="type-checkbox-3" for="radio-day-all">
                      무관
                    </label>
                  </div>
                  <div className="partner-filter-radio">
                    <input
                      type="radio"
                      name="check-counseling-day-type"
                      value="type-radio"
                      id="radio-weekdays"
                    />
                    <label className="type-checkbox-3" for="radio-weekdays">
                      평일
                    </label>
                  </div>
                  <div className="partner-filter-radio">
                    <input
                      type="radio"
                      name="check-counseling-day-type"
                      value="type-radio"
                      id="radio-weekends"
                    />
                    <label className="type-checkbox-3" for="radio-weekends">
                      주말
                    </label>
                  </div>
                </div>
              </div>
              <div className="partner-filter-checkbox">
                <h4>상담사 자격증</h4>
                <div className="filter-radio-wrap">
                  <div className="partner-filter-radio">
                    <input
                      type="radio"
                      name="check-counseling-certi-type"
                      value="type-radio"
                      id="radio-certi-all"
                    />
                    <label className="type-checkbox-3" for="radio-certi-all">
                      무관
                    </label>
                  </div>
                  <div className="partner-filter-radio">
                    <input
                      type="radio"
                      name="check-counseling-certi-type"
                      value="type-radio"
                      id="radio-certi-two"
                    />
                    <label className="type-checkbox-3" for="radio-certi-two">
                      2급
                    </label>
                  </div>
                  <div className="partner-filter-radio">
                    <input
                      type="radio"
                      name="check-counseling-certi-type"
                      value="type-radio"
                      id="radio-certi-one"
                    />
                    <label className="type-checkbox-3" for="radio-certi-one">
                      1급
                    </label>
                  </div>
                </div>
              </div>
              <div className="partner-filter-checkbox">
                <h4>우수 후기 선정</h4>
                <div className="filter-radio-wrap">
                  <div className="partner-filter-radio">
                    <input
                      type="radio"
                      name="check-counseling-review-type"
                      value="type-radio"
                      id="radio-review-all"
                    />
                    <label
                      className="type-checkbox-3 review"
                      for="radio-review-all"
                    >
                      무관
                    </label>
                  </div>
                  <div className="partner-filter-radio">
                    <input
                      type="radio"
                      name="check-counseling-review-type"
                      value="type-radio"
                      id="radio-review-mid"
                    />
                    <label
                      className="type-checkbox-3 review"
                      for="radio-review-mid"
                    >
                      1회 이상
                    </label>
                  </div>
                  <div className="partner-filter-radio">
                    <input
                      type="radio"
                      name="check-counseling-review-type"
                      value="type-radio"
                      id="radio-review-top"
                    />
                    <label
                      className="type-checkbox-3 review"
                      for="radio-review-top"
                    >
                      5회 이상
                    </label>
                  </div>
                </div>
              </div>
              <div className="partner-filter-checkbox">
                <h4>특수 경험</h4>
                <div className="filter-radio-wrap">
                  <div className="partner-filter-radio final">
                    <input
                      type="radio"
                      name="check-counseling-specific-type"
                      value="type-radio"
                      id="radio-specific-all"
                    />
                    <label
                      className="type-checkbox-3 specific-first"
                      for="radio-specific-all"
                    >
                      무관
                    </label>
                  </div>
                  <div className="partner-filter-radio final">
                    <input
                      type="radio"
                      name="check-counseling-specific-type"
                      value="type-radio"
                      id="radio-specific-queer"
                    />
                    <label
                      className="type-checkbox-3 specific"
                      for="radio-specific-queer"
                    >
                      퀴어 프렌들리
                    </label>
                  </div>
                  <div className="partner-filter-radio final">
                    <input
                      type="radio"
                      name="check-counseling-specific-type"
                      value="type-radio"
                      id="radio-specific-abroad"
                    />
                    <label
                      className="type-checkbox-3 specific"
                      for="radio-specific-abroad"
                    >
                      해외 거주
                    </label>
                  </div>
                  <div className="partner-filter-radio final">
                    <input
                      type="radio"
                      name="check-counseling-specific-type"
                      value="type-radio"
                      id="radio-specific-eng"
                    />
                    <label
                      className="type-checkbox-3 specific"
                      for="radio-specific-eng"
                    >
                      영어 상담
                    </label>
                  </div>
                  <div className="partner-filter-radio final">
                    <input
                      type="radio"
                      name="check-counseling-specific-type"
                      value="type-radio"
                      id="radio-specific-divorce"
                    />
                    <label
                      className="type-checkbox-3 specific"
                      for="radio-specific-divorce"
                    >
                      이혼 상담
                    </label>
                  </div>
                  <div className="partner-filter-radio final">
                    <input
                      type="radio"
                      name="check-counseling-specific-type"
                      value="type-radio"
                      id="radio-specific-violence"
                    />
                    <label
                      className="type-checkbox-3 specific"
                      for="radio-specific-violence"
                    >
                      성폭력 상담
                    </label>
                  </div>
                </div>
              </div>
            </article>
          </aside>

          {/* 파트너 리스트 메인 */}
          <section className="partner-list">
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
                >
                  고민 연관순
                </button>
                <ul className="partner-list-option-list">
                  <li className="partner-list-option-list-element">
                    고민 연관순
                  </li>
                  <li className="partner-list-option-list-element">
                    상담 만족도순
                  </li>
                  <li className="partner-list-option-list-element">
                    낮은 상담 가격순
                  </li>
                  <li className="partner-list-option-list-element">
                    높은 상담 가격순
                  </li>
                </ul>
              </div>
            </header>
            <div className="partner-list-content-wrap">
              {/* 컴포넌트 */}
              <article className="partner-list-box">
                <button className="btn-partner-wish">상담사 찜하기</button>
                <div className="partner-info">
                  {/* <div className="partner-info-recomend">추천</div> */}
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
            <div className="partner-list-pages"></div>
          </section>
        </main>
      </div>
    );
  }
}
