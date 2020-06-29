import React, { Component } from 'react';
import './PartnerProfile.scss';

export default class PartnerProfileReview extends Component {
  render() {
    return (
      <section className='profile-content-review'>
        <h3>상담 후기</h3>
        <article className='review-star-graph'>
          <div className='review-star'>
            <div className='review-star-head'>
              <h4>상담 만족도 평균</h4>
              <span>4.9</span>
            </div>
            <div className='review-star-list'>
              <ol>
                <li className='star-point'></li>
                <li className='star-point'></li>
                <li className='star-point'></li>
                <li className='star-point'></li>
                <li className='star-point'></li>
              </ol>
            </div>
          </div>
          {/* 사용 여부 확인 */}
          <div className='review-graph'>
            <div className='review-graph-head'>
              <h4>상담 만족도 비율</h4>
            </div>
            <div className='review-graph-list'>
              <div className='review-graph-el'>
                <div className='review-graph-height'></div>
                <div className='review-graph-num'>1</div>
              </div>
              <div className='review-graph-el'>
                <div className='review-graph-height'></div>
                <div className='review-graph-num'>2</div>
              </div>
              <div className='review-graph-el'>
                <div className='review-graph-height'></div>
                <div className='review-graph-num'>3</div>
              </div>
              <div className='review-graph-el'>
                <div className='review-graph-height one-fourth'></div>
                <div className='review-graph-num'>4</div>
              </div>
              <div className='review-graph-el'>
                <div className='review-graph-height full'></div>
                <div className='review-graph-num'>5</div>
              </div>
            </div>
          </div>
        </article>
        <articel className='review-input'></articel>
        <articel className='review-data'>
          <ul className='review-list'>
            {/* 리뷰데이터 컴포넌트 */}
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
          </ul>
          <button></button>
        </articel>
      </section>
    );
  }
}
