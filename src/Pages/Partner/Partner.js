import React, { Component } from 'react';
import './Partner.scss';
import PartnerNav from './PartnerNav';
import PartnerAside from './PartnerAside';
import PartnerList from './PartnerList';

export default class Partner extends Component {
  constructor() {
    super();

    this.state = {
      partnerData: [],
      inputPtName: '',
    };
  }
  handleChangeInput = (e) => {
    this.setState({ inputPtName: e.target.value });
  };

  componentDidMount() {
    fetch('http://localhost:3000/data/data.json')
      .then((res) => res.json())
      //.then((res) => console.log(res));
      .then((res) => this.setState({ partnerData: res.information }));
    //http://localhost:3000/data/data.json
    //http://10.58.7.28:8000/partner
  }

  render() {
    console.log('inputPtName>>>', this.state.inputPtName);

    const { partnerData, inputPtName } = this.state;

    let ptNameFliter = partnerData.filter((nameData) => {
      return nameData.name.includes(inputPtName);
    });

    return (
      <div className='Partner'>
        <nav className='partner-nav'>
          <ul>
            <PartnerNav pageLink={'/'} pageName={'홈'} />
            <PartnerNav pageLink={'/partner'} pageName={'상담사 찾기'} />
          </ul>
        </nav>
        <main className='partner-main'>
          {/* 상담사 찾기 aside */}
          <PartnerAside handleChangeInput={this.handleChangeInput} />

          {/* 파트너 list */}
          <PartnerList partnerData={ptNameFliter} />
          {/* <PartnerList partnerData={this.state.partnerData} /> */}
        </main>
      </div>
    );
  }
}
