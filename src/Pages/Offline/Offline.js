import React, { Component } from 'react';
import Map from './Map';

export default class Offline extends Component {
    render() {
        return (
            <div className="offline-container">
                <aside className="offline-aside">
                    <div className="aside-title">상담센터 리스트 100</div>
                    <div className="center-list-box">
                        <div className="center-recommend-list">
                            {Array(2).fill().map(() => {
                                return(
                                <div className="center-recommend-item">
                                    <div className="center-recommend-img"></div>
                                    <div className="center-recommend-text">
                                        <div className="center-recommend-name">
                                            변명숙<span> 마스터 상담사</span>
                                        </div>
                                        <div className="center-recommend-type">
                                            온라인상담<span>|</span>
                                            <div className="center-recommend-star">
                                                <ul>
                                                    <li></li>
                                                    <li></li>
                                                    <li></li>
                                                    <li></li>
                                                    <li></li>
                                                </ul>
                                                <span className="star-num">(35)</span>
                                            </div>
                                        </div>
                                        <div className="center-recommend-intro">
                                            힘들땐 여길보쇼
                                        </div>
                                        <div className="center-recommend-price">
                                            <div className="center-recommend-normal-price">50,000원 ~</div>
                                            <div className="center-recommend-reduced-price">45,000원 ~</div>
                                        </div>
                                    </div>

                                </div>
                            )})}
                        </div>
                        <ul className="center-list">
                            {Array(20).fill().map(()=>{
                               return(
                               <li className="center-item">
                                   <div className="center-item-img"></div>
                                   <div className="center-item-text">
                                       <div className="center-item-name">위코드상담센터</div>
                                       <div className="center-item-type">
                                            심리상담센터
                                       </div>
                                       <div className="center-item-distance">
                                           671m<span>|</span>서울특별시 강남구 테헤란로 427 겁나김겁나김겁나김
                                       </div>
                                       <div className="center-item-number">
                                           02-2226-8772
                                       </div>
                                   </div>
                               </li>
                               
                            )})}
                        </ul>
                    </div>
                </aside>
                <Map/>
            </div>
        )
    }
}
