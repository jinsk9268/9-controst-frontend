import React, { Component } from "react";
import "./Partner.scss";
import PartnerNav from "./PartnerNav";
import PartnerAside from "./PartnerAside";
import PartnerList from "./PartnerList";

export default class Partner extends Component {
  render() {
    return (
      <div className="Partner">
        <PartnerNav />
        <main className="partner-main">
          {/* 상담사 찾기 aside */}
          <PartnerAside />

          {/* 파트너 list */}
          <PartnerList />
        </main>
      </div>
    );
  }
}
