import React, { Component } from "react";
import "./Partner.scss";
import PartnerNav from "./PartnerNav";
import PartnerAside from "./PartnerAside";
import PartnerList from "./PartnerList";

export default class Partner extends Component {
  constructor() {
    super();

    this.state = {
      partnerData: []
    };
  }

  componentDidMount () {
    fetch("http://localhost:3000/data/data.json")
    .then(res => res.json())
    .then(res => this.setState({partnerData: res.data}))
  }


  render() {
    console.log(this.state.partnerData)
    return (
      <div className="Partner">
        <nav className="partner-nav">
          <ul>
            <PartnerNav pageLink={"/"} pageName={"홈"} />
            <PartnerNav pageLink={"/partner"} pageName={"상담사 찾기"} />
          </ul>
        </nav>
        <main className="partner-main">
          {/* 상담사 찾기 aside */}
          <PartnerAside />

          {/* 파트너 list */}
          <PartnerList partnerData={this.state.partnerData}/>
        </main>
      </div>
    );
  }
}
