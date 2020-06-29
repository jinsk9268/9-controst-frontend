import React, { Component } from 'react';
import Map from './Map';

export default class Offline extends Component {
    constructor(){
        super();

        this.state = {
            partnerList : "",
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
    
    randomNum =() => {
        return Math.floor(Math.random() * (this.state.partnerList.length - 1));
    }

    render() {
        let PartnerInfoRandomNum = Math.floor(Math.random() * (this.state.partnerList.length - 1)); //0~ 갯수 -1
        let PartnerShowRandomNum = Math.floor(Math.random() * 2) + 1;
        console.log(PartnerShowRandomNum+"dsadasd");
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
