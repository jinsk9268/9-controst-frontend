import React, { Component } from 'react';
import Map from './Map';

export default class Offline extends Component {
    constructor(){
        super();

        this.state = {
            partnerList : "",
            locationList : "",
            showDetail : "",
            detailIndex :"",
        }
    }

    componentDidMount(){
        fetch('http://localhost:3000/data/partnerList.json')
        .then(res => res.json())
        .then(res => {
            this.setState({
                partnerList : res["information"],
            })
        })
        fetch('http://localhost:3000/data/location.json')
        .then(res => res.json())
        .then(res => {
            this.setState({
                locationList : res["location"],
            })
        })
        
    }

    ptPointClassName = (num, PartnerstarNum) => {
        let starNum = PartnerstarNum - num;
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
    
    randomNum = () => {
        return Math.floor(Math.random() * (this.state.partnerList.length - 1));
    }

    listClick = (i) => {
        if(i === "close"){
            this.setState({
                showDetail : "",
            })
        } else{
        this.setState({
            detailIndex : i.toString(),
            showDetail : " is-show",
        })
        }
    }
    
    render() {
        let PartnerShowRandomNum = Math.floor(Math.random() * 2) + 1;

        let validationIndex = () => {
            let imgIndexArr = [];
            let alphabetArr = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T"];
            for(let i in this.state.locationList){
                if(this.state.locationList[i]["vip"] === true){
                    imgIndexArr.push('trost');
                }
            }
            let alphabetRemovedArr = alphabetArr.splice(imgIndexArr.length, alphabetArr.length-1);
            let resultArr = imgIndexArr.concat(alphabetRemovedArr);
            return resultArr;
        }
        return (
            <div className="offline-container">
                <aside className="offline-aside">
                    <div className="aside-title">상담센터 리스트 100</div>
                    <div className="center-list-box">
                        <div className="center-recommend-list">
                            {this.state.partnerList && Array(PartnerShowRandomNum).fill().map(() => {
                                var randomNumber = this.randomNum();
                                return(
                                <div className="center-recommend-item">
                                    <div className="center-recommend-img" style={{backgroundImage: `url(${this.state.partnerList[randomNumber]["profile_image_url"]})`}}></div>
                                    <div className="center-recommend-text">
                                        <div className="center-recommend-name">
                                            {this.state.partnerList[randomNumber]["name"]}
                                            <span style={ this.state.partnerList[randomNumber]["level"][0] === "마" ? {color:"#ef8b24"} : this.state.partnerList[randomNumber]["level"][0] === "전" ? {color:"#f5ba08"} : {color:"#91897F"}}> {this.state.partnerList && this.state.partnerList[randomNumber]["level"]}</span>
                                        </div>
                                        <div className="center-recommend-type">
                                            온라인상담<span>|</span>
                                            <div className="center-recommend-star">
                                                <ul>
                                                    <li className={this.ptPointClassName(1, this.state.partnerList[randomNumber]["stars"])}></li>
                                                    <li className={this.ptPointClassName(2, this.state.partnerList[randomNumber]["stars"])}></li>
                                                    <li className={this.ptPointClassName(3, this.state.partnerList[randomNumber]["stars"])}></li>
                                                    <li className={this.ptPointClassName(4, this.state.partnerList[randomNumber]["stars"])}></li>
                                                    <li className={this.ptPointClassName(5, this.state.partnerList[randomNumber]["stars"])}></li>
                                                </ul>
                                                <span className="review-num">{`(${this.state.partnerList[randomNumber]["review_count"]})`}</span>
                                            </div>
                                        </div>
                                        <div className="center-recommend-intro">
                                            {this.state.partnerList[randomNumber]["introduction"]}
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
                            {this.state.locationList && this.state.locationList.map((_,i) => {
                               return(
                               <li className="center-item" onClick={() => this.listClick(i)}>
                                   <div className="center-item-img" style={{backgroundImage:`url(https://d2qrvi4l1nprmf.cloudfront.net/images/service/mobile/offline/is_unselected_mark/${validationIndex()[i]}_unselected.png)`}}></div>
                                   <div className="center-item-text">
                                       <div className="center-item-name">{this.state.locationList[i]["center"]}</div>
                                       <div className="center-item-type">
                                            {this.state.locationList[i]["type"]}
                                       </div>
                                       <div className="center-item-distance">
                                           671m<span>|</span>{this.state.locationList[i]["distance"]}
                                       </div>
                                       <div className="center-item-number">
                                           {this.state.locationList[i]["number"]}
                                       </div>
                                   </div>
                               </li>
                            )})}
                        </ul>
                    </div>
                </aside>
                <div className={`center-detail-box${this.state.showDetail}`}>
                    <div className="center-detail-close" onClick={() => this.listClick("close")}>
                        <div className="close-img"/>
                    </div>
                    <div className="center-detail-item">
                        <div className="detail-title">
                            <div className="detail-title-name">{this.state.detailIndex && this.state.locationList[this.state.detailIndex]["center"]}</div>
                            <div className="detail-title-type">{this.state.detailIndex && this.state.locationList[this.state.detailIndex]["type"]}</div>
                            <div className="find-road">
                                <div>길찾기</div>
                            </div>
                        </div>
                        <div className="border-line"></div>
                        <div className="center-detail-data">
                            <div className="center-address">
                                <div className="center-address-icon"/>
                                <div className="center-new-address">{this.state.detailIndex && this.state.locationList[this.state.detailIndex]["distance"]}</div>
                                <div className="center-old-address">{`지번) ${this.state.detailIndex && this.state.locationList[this.state.detailIndex]["distance"]}`}</div>
                            </div>
                            <div className="center-number">
                                <div className="center-number-icon"/>
                                <div className="center-number-text">{this.state.detailIndex && this.state.locationList[this.state.detailIndex]["number"]}</div>
                            </div>
                            <div className="center-url">
                                <div className="center-url-icon"/>
                                <div className="center-url-text"><a href="https://theraphy.com">https://theraphy.com</a></div>
                            </div>
                            <div className="center-profile">
                                <div className="center-profile-icon"/>
                                <div className="center-profile-item">
                                    <div className="center-profile-img"></div>
                                    <div className="center-profile-name">{this.state.detailIndex && this.state.locationList[this.state.detailIndex]["name"]}</div>
                                    <div className="center-profile-level">{this.state.detailIndex && this.state.locationList[this.state.detailIndex]["level"]}</div>
                                </div>
                            </div>
                            <div className="detail-banner"></div>
                            <div className="theraphy-info">
                                <div className="theraphy-info-title">상담관련 정보</div>
                                <div className="theraphy-info-sub-title">상담</div>
                                <div className="theraphy-info-text">아동상담, 청소년상담, 성인상담</div>
                                <div className="theraphy-info-notice">* 모든 정보는 변경이 있을 수 있습니다. 반드시 전화 확인 후 방문해주세요.</div>
                                <div className="info-change-request">정보 수정 요청 ></div>
                            </div>
                        </div>
                    </div>
                </div>
                <Map location={this.state.locationList} clickIndex={this.state.detailIndex}/>
            </div>
        )
    }
}
