import React, { Component } from "react";
import PartnerNav from "./PartnerNav";
import PartnerAside from "./PartnerAside";
import PartnerList from "./PartnerList";
import "./Partner.scss";

const DEFAULT_CHECKED = {
  check1: true,
  check2: false,
};

export default class Partner extends Component {
  constructor() {
    super();
    this.state = {
      partnerData: [],
      ptEndPoint: "",
      inputPtName: "",
      genderPt: "",
      masterPt: true,
      subPt: true,
      nomalPt: true,
      // 별점 순서별 정렬 확인용 / 구현 가능시 작성 (테스트용)
      starPointPt: "",
      // 리셋 확인용 / 구현 가능시 작성 (테스트용)
      checkStatus: DEFAULT_CHECKED,
    };
  }

  componentDidMount() {
    fetch("http://localhost:3000/data/data.json")
      .then((res) => res.json())
      // 확인용
      //.then((res) => console.log(res));
      .then((res) =>
        this.setState({
          partnerData: res.information.sort(() => {
            return Math.random() - Math.random();
          }),
        })
      );
    //http://localhost:3000/data/data.json
    //http://10.58.7.28:8000/partner
  }

  handleChangeInput = (e) => {
    this.setState({ inputPtName: e.target.value });
  };

  handleClickGender = (e) => {
    this.setState({ genderPt: e.target.value });
  };

  handleClickPosition = (e) => {
    this.setState({ [e.target.name]: !this.state[e.target.name] });
  };

  // 리셋 확인용
  handleClickReset = () => {
    this.setState({
      inputPtName: "",
      genderPt: "",
      masterPt: true,
      subPt: true,
      nomalPt: true,
      checkStatus: DEFAULT_CHECKED,
    });
  };

  render() {
    const {
      partnerData,
      inputPtName,
      genderPt,
      masterPt,
      subPt,
      nomalPt,
      checkStatus,
    } = this.state;

    // 최종 필터 : 상담사 레벨, 상담사 성별, 상담사 이름
    let ptFilter = partnerData
      .filter((positionData) => {
        return positionData.level !== (masterPt ? "" : "마스터 상담사");
      })
      .filter((positionData) => {
        return positionData.level !== (subPt ? "" : "전문 상담사");
      })
      .filter((positionData) => {
        return positionData.level !== (nomalPt ? "" : "일반 상담사");
      })
      .filter((genderData) => {
        return genderData.gender.includes(genderPt);
      })
      .filter((nameData) => {
        return nameData.name.includes(inputPtName);
      });

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
          <PartnerAside
            handleChangeInput={this.handleChangeInput}
            handleClickGender={this.handleClickGender}
            handleClickPosition={this.handleClickPosition}
            handleClickReset={this.handleClickReset}
            //default 체크 확인용
            checkStatus={checkStatus}
          />

          {/* 파트너 list */}
          <PartnerList partnerData={ptFilter} />
        </main>
      </div>
    );
  }
}
