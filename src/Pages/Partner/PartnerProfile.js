import React, { Component } from "react";
import PartnerNav from "./PartnerNav";
import "./PartnerProfile.scss";

export default class PartnerProfile extends Component {
  render() {
    return (
      <div className="PartnerProfile">
        <nav className="partner-profile-nav">
          <ul>
            <PartnerNav pageLink={"/"} pageName={"홈"} />
            <PartnerNav pageLink={"/partner"} pageName={"상담사 찾기"} />
            <PartnerNav
              pageLink={"/partner/profile"}
              pageName={"상담사 프로필"}
            />
          </ul>
        </nav>
        <main className="partner-profile-main">
          <section className="partner-profile-section">
            <div className="partner-profile-card-wrap">
              <article className="partner-profile-card">
                <button className="btn-partner-profile-wish">
                  상담사 찜하기
                </button>
                <div className="partner-profile-wrap-info">
                  <div className="partner-wrap-img">
                    <img
                      className="partner-img"
                      alt="상담사 사진"
                      src="https://d2qrvi4l1nprmf.cloudfront.net/images/partner/1548650941_.png"
                    />
                  </div>
                  <div className="partner-wrap-text">
                    <div className="partner-text-info">
                      <h3>상담사 이름</h3>
                      <h3 className="partner-profile-position">상담사 직책</h3>
                    </div>
                    <div className="partner-reputation">
                      <div className="partner-point-star">
                        <ol>
                          <li className="star-point"></li>
                          <li className="star-point"></li>
                          <li className="star-point"></li>
                          <li className="star-point"></li>
                          <li className="star-point"></li>
                        </ol>
                      </div>
                      <div className="partner-profile-point-num">4.9 (143)</div>
                    </div>
                    <div className="partner-session-text">
                      <span>
                        트로스트 상담 <em>1084회기</em> 진행
                      </span>
                    </div>
                  </div>
                </div>
                <div className="partner-profile-wrap-counsel-type">
                  <div className="partner-counsel-type">
                    <img
                      className="partner-counsel-type-img"
                      alt="문자상담 사진"
                      src="https://d2qrvi4l1nprmf.cloudfront.net/images/service/partner/ic_item_tt.png"
                    />
                    <div className="partner-counsel-type-text">
                      텍스트테라피
                    </div>
                  </div>
                  <div className="partner-counsel-type">
                    <img
                      className="partner-counsel-type-img"
                      alt="전화상담 사진"
                      src="https://d2qrvi4l1nprmf.cloudfront.net/images/service/partner/ic_item_vt.png"
                    />
                    <div className="partner-counsel-type-text">전화상담</div>
                  </div>
                  <div className="partner-counsel-type">
                    <img
                      className="partner-counsel-type-img"
                      alt="대면상담 사진"
                      src="https://d2qrvi4l1nprmf.cloudfront.net/images/service/partner/ic_item_ot.png"
                    />
                    <div className="partner-counsel-type-text last">
                      대면상담
                    </div>
                  </div>
                </div>
              </article>
            </div>
            {/* 메인 content 구현 */}
            <div className="partner-profile-contents">
              <header className="profile-contents-wrap-list">
                <ul className="content-list">
                  <li className="content-el is-click">상담사 정보</li>
                  <li className="content-el">예약 방법</li>
                  <li className="content-el">상담 후기</li>
                </ul>
              </header>
              {/* 상담사 정보 -> 컴포넌트 */}
              <section className="profile-content-info">
                <article className="info-youtube"></article>
                <article className="info-excellent-act">
                  <h3 className="excellent-act-headline">
                    트로스트 우수 활동 내역
                  </h3>
                  <div className="excellent-act-list">
                    <div className="trost-partner">
                      <div className="trost-img">트로스트 150회기 이미지</div>
                      <div className="trost-text">
                        트로스트 상담
                        <br />
                        150회기 이상
                      </div>
                    </div>
                    <div className="excellent-partenr">
                      <div className="excellent-img">우수 후기 이미지</div>
                      <div className="excellent-text">
                        우수 후기 상담사
                        <br />
                        0회
                      </div>
                    </div>
                    <div className="month-partner">
                      <div className="month-img">이달의 이미지</div>
                      <div className="month-text">
                        이달의 상담사
                        <br />
                        0회
                      </div>
                    </div>
                  </div>
                </article>
                <article className="info-counsel-header">
                  <h3>당신에게 건네는 손을 잡아주세요</h3>
                  <p>
                    바쁘게 하루하루를 살다 보면 문득 나라는 사람이 누구지, 지금
                    뭐하고 있는 거지라는 생각이 들 때가 있습니다. 잠깐이라도
                    상담을 통해 나의 허전한 마음을 어루만져주시는 건 어떨까요?
                    그리고 저도 당신의 시간에 함께 하고 싶습니다.
                  </p>
                </article>
                <article className="info-counsel-history">
                  <h3>주요 자격 및 경력</h3>
                  <div className="info-counsel-list">
                    <ul className="partner-qualification">
                      <li className="list-el medal">
                        상담심리사 1급(상담심리전문가) (한국상담심리학회)
                      </li>
                      <li className="list-el medal">
                        상담심리사 2급 (한국상담심리학회)
                      </li>
                      <li className="list-el">
                        상담심리사 2급 (한국상담심리학회/한국심리학회)
                      </li>
                      <li className="list-el">
                        임상심리사 2급 (한국산업인력공단)
                      </li>
                      <li className="list-el">
                        상담심리사 1급 (한국상담심리학회/한국심리학회)
                      </li>
                    </ul>
                    <ul className="partner-education">
                      <li className="list-el">
                        심리학과 상담심리학전공 석사 졸업
                      </li>
                    </ul>
                    <ul className="partner-career">
                      <li className="list-el">
                        이전) 광진인터넷중독예방상담센터 심리상담원
                      </li>
                      <li className="list-el">
                        이전) 가톨릭대학교 학생생활상담소 수련상담사
                      </li>
                      <li className="list-el">
                        이전) 서초구립여성회관 임상심리상담원
                      </li>
                      <li className="list-el">
                        현재) 살레시오청소년센터 임상심리상담원
                      </li>
                      <li className="list-el">
                        이전) 인하대학교 병원 임상심리상담원
                      </li>
                    </ul>
                  </div>
                </article>
                <article className="info-counsel-story">
                  <h3>상담사 이야기</h3>
                  <div className="q-and-a">
                    <h4>상담사님의 상담 스타일은?</h4>
                    <p>
                      저는 우리 모두가 현재의 내 모습에서 한층 더 성장하기를
                      바라는 욕구, 행복해지고 싶은 욕구를 갖고 있다고
                      생각합니다. 그리고 이러한 욕구만큼 현실의 어려움을
                      이겨내고 해결할 수 있는 능력도 지니고 있다고 믿고
                      있습니다. 다만 그 능력을 내가 의식하지 못하고 있기 때문에,
                      흔히들 말하는 '문제상황'에 압도당하고 무기력해진다고
                      생각합니다. 이러한 두 가지 생각을 바탕으로, 저는 상담에서
                      탐색적 질문을 통해 다양한 각도로 '나'라는 사람을 알아가는
                      시간을 가집니다. 그리고 내가 하는 행동의 이유를
                      찾아갑니다. 이러한 과정은 때때로 지지부진하기도 하고
                      머리가 복잡해지기도 합니다. 하지만 미로 같은 내 마음을
                      따라가다 보면 어느 순간 '나'라는 존재를 새롭게 바라보게
                      되고 희망을 가지게 됩니다.
                    </p>
                  </div>
                  <div className="q-and-a">
                    <h4>심리상담을 망설이는 분들께 하고 싶은 이야기</h4>
                    <p>
                      하늘이 제일 어두울 때는 바로 해뜨기 전이라고 해요. 희망을
                      잃지 않고 당신의 어두운 순간을 함께 인내하고 마음을 나눌
                      수 있는 시간을 가져보세요. 혼자만의 짐을 상담자와 함께
                      나누다 보면 어느새 당신의 해가 밝게 뜰 거예요.
                    </p>
                  </div>
                </article>
              </section>
              {/* 예약 방법 -> 컴포넌트 */}
              <section className="profile-content-reservation">
                <article className="reservation-text-phone">
                  <div className="text-phone-title">
                    텍스트테라피 / 전화상담
                  </div>
                  <div className="text-phone-sub-title">
                    트로스트 앱을 통해 진행하는 비대면 심리상담입니다.
                  </div>
                  <div className="text-phone-flow">
                    <div className="flow-title">
                      텍스트테라피 / 전화상담 진행 과정
                    </div>
                    <div className="flow-content-wrap">
                      <div className="flow-one">
                        <img
                          className="img-num"
                          alt="1"
                          src="https://d2qrvi4l1nprmf.cloudfront.net/images/service/partner/ic_one.png"
                        />
                        <img
                          className="img-process"
                          alt="텍스트테라피, 전화상담 결제 이미지"
                          src="https://d2qrvi4l1nprmf.cloudfront.net/images/service/partner/img_online_process_1.png"
                        />
                        <div className="text-process">
                          상담신청 후<br />
                          상담권결제
                        </div>
                      </div>
                      <div className="flow-two">
                        <img
                          className="img-num"
                          alt="2"
                          src="https://d2qrvi4l1nprmf.cloudfront.net/images/service/partner/ic_two.png"
                        />
                        <img
                          className="img-process"
                          alt="텍스트테라피, 전화상담 프로세스 이미지"
                          src="https://d2qrvi4l1nprmf.cloudfront.net/images/service/partner/img_online_process_2.png"
                        />
                        <div className="text-process">
                          상담방에서
                          <br />
                          일정예약
                        </div>
                      </div>
                      <div className="flow-three">
                        <img
                          className="img-num"
                          alt="3"
                          src="https://d2qrvi4l1nprmf.cloudfront.net/images/service/partner/ic_three.png"
                        />
                        <img
                          className="img-process"
                          alt="텍스트테라피, 전화상담 예약 이미지"
                          src="https://d2qrvi4l1nprmf.cloudfront.net/images/service/partner/img_online_process_3.png"
                        />
                        <div className="text-process">
                          예약일 상담방에서
                          <br />
                          상담시작
                        </div>
                      </div>
                    </div>
                  </div>
                </article>
                <article className="reservation-meet">
                  <div className="meet-title">대면상담</div>
                  <div className="meet-sub-title">
                    상담센터에 방문하여 진행하는 대면 심리상담입니다.
                  </div>
                  <div className="meet-map">
                    <div className="map-title">대면상담 위치정보</div>
                    <div className="flow-meet-location"></div>
                    <div className="flow-meet-location-text">
                      <p>
                        구로구청소년상담복지센터
                        <br />
                        서울특별시 구로구 부일로13길 3
                      </p>
                    </div>
                  </div>
                  <div className="meet-flow">
                    <div className="flow-title">대면상담 진행과정</div>
                    <div className="flow-content-wrap">
                      <div className="flow-one">
                        <img
                          className="img-num"
                          alt="1"
                          src="https://d2qrvi4l1nprmf.cloudfront.net/images/service/partner/ic_one.png"
                        />
                        <img
                          className="img-process"
                          alt="상담사 위치확인"
                          src="https://d2qrvi4l1nprmf.cloudfront.net/images/service/partner/img_offline_process_1.png"
                        />
                        <div className="text-process">
                          상담사
                          <br />
                          위치확인
                        </div>
                      </div>
                      <div className="flow-two">
                        <img
                          className="img-num"
                          alt="2"
                          src="https://d2qrvi4l1nprmf.cloudfront.net/images/service/partner/ic_two.png"
                        />
                        <img
                          className="img-process"
                          alt="상담신청 후 상담권 결제"
                          src="https://d2qrvi4l1nprmf.cloudfront.net/images/service/partner/img_offline_process_2.png"
                        />
                        <div className="text-process">
                          상담신청 후<br />
                          상담권 결제
                        </div>
                      </div>
                      <div className="flow-three">
                        <img
                          className="img-num"
                          alt="3"
                          src="https://d2qrvi4l1nprmf.cloudfront.net/images/service/partner/ic_three.png"
                        />
                        <img
                          className="img-process"
                          alt="상담방에서 일정예약"
                          src="https://d2qrvi4l1nprmf.cloudfront.net/images/service/partner/img_offline_process_3.png"
                        />
                        <div className="text-process">
                          상담방에서
                          <br />
                          일정예약
                        </div>
                      </div>
                      <div className="flow-four">
                        <img
                          className="img-num"
                          alt="4"
                          src="https://d2qrvi4l1nprmf.cloudfront.net/images/service/partner/ic_four.png"
                        />
                        <img
                          className="img-process"
                          alt="텍스트테라피, 전화상담 예약 이미지"
                          src="https://d2qrvi4l1nprmf.cloudfront.net/images/service/partner/img_offline_process_4.png"
                        />
                        <div className="text-process">
                          예약일 센터
                          <br />
                          방문상담
                        </div>
                      </div>
                    </div>
                  </div>
                </article>
                <article className="reservation-notice">
                  <div className="reservation-title">상담 예약 안내</div>
                  <div className="reservation-notice-list">
                    <ul className="reservation-list">
                      <li className="list-el">
                        상담 예약은 상담권 구매 후 상담방이 연결되면 상담사와
                        일정을 협의하여 확정합니다.
                      </li>
                      <li className="list-el">
                        다른 상담 진행 중인 경우 첫응대까지 시간이 소요될 수
                        있습니다.
                      </li>
                      <li className="list-el">
                        원하는 일정이 맞지 않는 경우, 일대일 문의에 예약 희망
                        시간을 남겨주세요. 원하는 시간에 최대한 상담받으실 수
                        있도록 도움드립니다.
                      </li>
                      <li className="list-el">
                        지금 빠르게 상담이 필요할 땐 바로상담을 이용해주세요.
                      </li>
                      <li className="list-el">
                        상담사찾기 메뉴에서 바로상담 배너를 선택하면 지금 상담
                        가능한 상담사님을 확인하실 수 있습니다.
                      </li>
                    </ul>
                  </div>
                </article>
              </section>
              {/* 상담 후기 -> 컴포넌트 */}
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
                <articel className="review-input"></articel>
                <articel className="review-data">
                  <ul className="review-list">
                    {/* 리뷰데이터 컴포넌트 */}
                    <li className="review-content-wrap">
                      <div className="review-content-top">
                        <div className="review-star-point">
                          <ol>
                            <li className="star-point"></li>
                            <li className="star-point"></li>
                            <li className="star-point"></li>
                            <li className="star-point"></li>
                            <li className="star-point"></li>
                          </ol>
                        </div>
                        <div className="review-info">
                          <span>1329....</span> 님 / <span>2020-06-26</span>
                        </div>
                      </div>
                      <div className="review-content-main">
                        <div className="review-text">
                          제 이야기 잘 들어주시고 좋은 말씀도 많이 해주시고
                          공감도 해주셔서 너무 감사했습니다 !!
                        </div>
                        <div className="review-cate">
                          <h5>텍스트테라피 50분 상담권 상담후기</h5>
                          <ul>
                            <li>#우울</li>
                            <li>#늪</li>
                            <li>#바닥</li>
                          </ul>
                        </div>
                      </div>
                    </li>
                  </ul>
                  <button></button>
                </articel>
              </section>
            </div>
          </section>
          {/* 사이드바 구현 */}
          <aside className="partner-profile-aside">
            <article className="partner-program-notice">
              <div className="notice-contents">
                <h4>알려드립니다!</h4>
                <p>
                  트로스트는 상담권 결제 후 상담사와 일정을
                  <br />
                  조율하여 예약 상담으로 진행됩니다.
                  <br />
                  결제 후 바로 상담이 불가능 할 수 있습니다.
                </p>
              </div>
              <button className="btn-apply" type="button">
                상담 신청하기
              </button>
            </article>
            <article className="partner-program-texttera">
              <div className="texttera-img">
                <div className="texttera-header">
                  <h3>텍스트테라피</h3>
                  <button type="button">텍스트테라피 안내버튼</button>
                </div>
                <p className="texttera-content">
                  트로스트 앱 또는 웹페이지에서
                  <br />
                  채팅으로 진행되는 상담입니다.
                </p>
                <p className="texttera-link">텍스트테라피 진행방법 알아보기</p>
              </div>
              <ul className="price-list">
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
            <article className="partner-program-phone">
              <div className="phone-img">
                <div className="phone-head-content-wrap">
                  <div className="phone-header">
                    <h3>전화상담은</h3>
                    <button type="button">전화상담 안내버튼</button>
                  </div>
                  <p className="phone-content">트로스트 앱에서 진행됩니다.</p>
                  <p className="phone-link">전화상담 진행방법 알아보기</p>
                  <button className="btn-app-install">앱 설치하기</button>
                </div>
                <ul className="app-install-list ">
                  <li className="play-store"></li>
                  <li className="app-store"></li>
                </ul>
              </div>
              <ul className="price-list">
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
            <article className="partner-program-meet">
              <div className="meet-img">
                <div className="meet-header">
                  <h3>대면상담은</h3>
                  <button type="button">텍스트테라피 안내버튼</button>
                </div>
                <p className="meet-content">오프라인에서 진행됩니다.</p>
                <p className="meet-link">대면상담 진행방법 알아보기</p>
              </div>
              <ul className="price-list">
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
        </main>
      </div>
    );
  }
}
