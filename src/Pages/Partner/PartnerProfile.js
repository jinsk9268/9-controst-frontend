import React, { Component } from "react";
import PartnerNav from "./PartnerNav";
import "./Partner.scss";
import "./PartnerProfile.scss";


export default class PartnerProfile extends Component {
  render() {
    return (
        <div className="PartnerProfile">
            <nav className="partner-profile-nav">
                <ul>
                    <PartnerNav pageLink={"/"} pageName={"홈"} />
                    <PartnerNav pageLink={"/partner"} pageName={"상담사 찾기"} />
                    <PartnerNav pageLink={"/partner/profile"} pageName={"상담사 프로필"} />
                </ul>
            </nav>
            <main className="partner-profile-main">
                <section className="partner-profile-section">
                    
                </section>
                <aside className="partner-profile-aside">

                </aside>
            </main>
        </div>
    );
  }
}