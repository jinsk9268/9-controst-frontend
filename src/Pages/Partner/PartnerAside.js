import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Partner.scss';

class PartnerSearch extends Component {
  constructor() {
    super();

    this.state = {
      inputPtName: '',
    };
  }

  handleChangeInput = (e) => {
    this.setState({ inputPtName: e.target.value });
  };

  render() {
    return (
      <div className='partner-filter-search'>
        <button className='btn-partner-filter-search' type='button'>
          찾기
        </button>
        <input type='search' placeholder='상담사 이름 검색' className='input-partner-filter-search' onChange={this.handleChangeInput} />
      </div>
    );
  }
}

class MyCounselingType extends Component {
  render() {
    return (
      <div className='MyCounselingType'>
        <h3 className='partner-filter-keyword'>나의 고민 키워드</h3>
        <button className='btn-partner-filter-keyword' type='button'>
          다시 선택하기
        </button>
        <div className='partner-filter-keyword-wrap'>
          <ul className='partner-filter-keyword-ul'>
            <li className='partner-filter-keyword-li'>#우울</li>
            <li className='partner-filter-keyword-li'>#우울우울</li>
            <li className='partner-filter-keyword-li'>#우울</li>
            <li className='partner-filter-keyword-li'>#우울</li>
            <li className='partner-filter-keyword-li'>#우울</li>
          </ul>
        </div>
        <div className='partner-filter-box-type'>
          <h3>상담 유형</h3>
          <div className='partner-filter-box-type-row'>
            <input type='checkbox' name='check-counseling-type' value='typeText' id='checkbox-text' defaultChecked={true} />
            <label className='type-checkbox-1' htmlFor='checkbox-text'>
              텍스트테라피
            </label>
          </div>
          <div className='partner-filter-box-type-row'>
            <input type='checkbox' name='check-counseling-type' value='typeText' id='checkbox-call' defaultChecked={true} />
            <label className='type-checkbox-1' htmlFor='checkbox-call'>
              전화상담
            </label>
          </div>
          <div className='partner-filter-box-type-row'>
            <input type='checkbox' name='check-counseling-type' value='typeText' id='checkbox-meet' defaultChecked={true} />
            <label className='type-checkbox-1' htmlFor='checkbox-meet'>
              대면상담
            </label>
          </div>
        </div>
        <div className='partner-filter-box-zone'>
          <h3>지역</h3>
          <select className='partner-filter-box-zone-select'>
            <option value='전체'>전체</option>
            <option value='서울'>서울</option>
            <option value='경기'>경기</option>
            <option value='인천'>인천</option>
            <option value='세종'>세종</option>
            <option value='광주'>광주</option>
            <option value='대전'>대전</option>
            <option value='대구'>대구</option>
            <option value='울산'>울산</option>
            <option value='부산'>부산</option>
            <option value='강원'>강원</option>
            <option value='충북'>충북</option>
            <option value='충남'>충남</option>
            <option value='전북'>전북</option>
            <option value='전남'>전남</option>
            <option value='경북'>경북</option>
            <option value='경남'>경남</option>
            <option value='제주'>제주</option>
          </select>
        </div>
      </div>
    );
  }
}

class MyCounselingCondition extends Component {
  constructor() {
    super();

    this.state = {
      changeCheckbox: true,
      changeRadio: true,
      test: '',
    };
  }

  changeTest = (e) => {
    this.setState({ test: e.target.value });
  };

  render() {
    console.log(this.state.test);
    return (
      <div className='MyCounselingCondition'>
        <h3 className='partner-filter-keyword add-condition'>상세조건</h3>
        <button className='btn-partner-filter-keyword' type='button'>
          선택 초기화
        </button>
        <div className='partner-filter-box-type level'>
          <h4>
            상담사 트로스트 레벨
            <button className='btn-partner-level-guide' type='button'>
              상담사 트로스트 레벨 안내
            </button>
          </h4>
          <div className='partner-filter-box-type-row check-level'>
            <input
              type='checkbox'
              name='check-counseling-type'
              value='typeText'
              id='checkbox-master'
              defaultChecked={true}
              onChange={this.changeTest}
            />
            <label className='type-checkbox-2' htmlFor='checkbox-master'>
              마스터 상담사
            </label>
          </div>
          <div className='partner-filter-box-type-row check-level'>
            <input type='checkbox' name='check-counseling-type' value='typeText' id='checkbox-sub' defaultChecked={true} />
            <label className='type-checkbox-2' htmlFor='checkbox-sub'>
              전문 상담사
            </label>
          </div>
          <div className='partner-filter-box-type-row check-level'>
            <input type='checkbox' name='check-counseling-type' value='typeText' id='checkbox-nomal' defaultChecked={true} />
            <label className='type-checkbox-2' htmlFor='checkbox-nomal'>
              일반 상담사
            </label>
          </div>
        </div>
        <div className='partner-filter-checkbox'>
          <h4>상담사 성별</h4>
          <div className='filter-radio-wrap'>
            <div className='partner-filter-radio'>
              <input type='radio' name='check-counseling-gender-type' value='type-radio' id='radio-gender-all' defaultChecked={true} />
              <label className='type-checkbox-3' htmlFor='radio-gender-all'>
                무관
              </label>
            </div>
            <div className='partner-filter-radio'>
              <input type='radio' name='check-counseling-gender-type' value='type-radio' id='radio-gender-m' defaultChecked={false} />
              <label className='type-checkbox-3' htmlFor='radio-gender-m'>
                남자
              </label>
            </div>
            <div className='partner-filter-radio'>
              <input type='radio' name='check-counseling-gender-type' value='type-radio' id='radio-gender-f' defaultChecked={false} />
              <label className='type-checkbox-3' htmlFor='radio-gender-f'>
                여자
              </label>
            </div>
          </div>
        </div>
        <div className='partner-filter-checkbox'>
          <h4>상담 가능 요일</h4>
          <div className='filter-radio-wrap'>
            <div className='partner-filter-radio'>
              <input type='radio' name='check-counseling-day-type' value='type-radio' id='radio-day-all' defaultChecked={true} />
              <label className='type-checkbox-3' htmlFor='radio-day-all'>
                무관
              </label>
            </div>
            <div className='partner-filter-radio'>
              <input type='radio' name='check-counseling-day-type' value='type-radio' id='radio-weekdays' defaultChecked={false} />
              <label className='type-checkbox-3' htmlFor='radio-weekdays'>
                평일
              </label>
            </div>
            <div className='partner-filter-radio'>
              <input type='radio' name='check-counseling-day-type' value='type-radio' id='radio-weekends' defaultChecked={false} />
              <label className='type-checkbox-3' htmlFor='radio-weekends'>
                주말
              </label>
            </div>
          </div>
        </div>
        <div className='partner-filter-checkbox'>
          <h4>상담사 자격증</h4>
          <div className='filter-radio-wrap'>
            <div className='partner-filter-radio'>
              <input type='radio' name='check-counseling-certi-type' value='type-radio' id='radio-certi-all' defaultChecked={true} />
              <label className='type-checkbox-3' htmlFor='radio-certi-all'>
                무관
              </label>
            </div>
            <div className='partner-filter-radio'>
              <input type='radio' name='check-counseling-certi-type' value='type-radio' id='radio-certi-two' defaultChecked={false} />
              <label className='type-checkbox-3' htmlFor='radio-certi-two'>
                2급
              </label>
            </div>
            <div className='partner-filter-radio'>
              <input type='radio' name='check-counseling-certi-type' value='type-radio' id='radio-certi-one' defaultChecked={false} />
              <label className='type-checkbox-3' htmlFor='radio-certi-one'>
                1급
              </label>
            </div>
          </div>
        </div>
        <div className='partner-filter-checkbox'>
          <h4>우수 후기 선정</h4>
          <div className='filter-radio-wrap'>
            <div className='partner-filter-radio'>
              <input type='radio' name='check-counseling-review-type' value='type-radio' id='radio-review-all' defaultChecked={true} />
              <label className='type-checkbox-3 review' htmlFor='radio-review-all'>
                무관
              </label>
            </div>
            <div className='partner-filter-radio'>
              <input type='radio' name='check-counseling-review-type' value='type-radio' id='radio-review-mid' defaultChecked={false} />
              <label className='type-checkbox-3 review' htmlFor='radio-review-mid'>
                1회 이상
              </label>
            </div>
            <div className='partner-filter-radio'>
              <input type='radio' name='check-counseling-review-type' value='type-radio' id='radio-review-top' defaultChecked={false} />
              <label className='type-checkbox-3 review' htmlFor='radio-review-top'>
                5회 이상
              </label>
            </div>
          </div>
        </div>
        <div className='partner-filter-checkbox'>
          <h4>특수 경험</h4>
          <div className='filter-radio-wrap'>
            <div className='partner-filter-radio final'>
              <input type='radio' name='check-counseling-specific-type' value='type-radio' id='radio-specific-all' defaultChecked={true} />
              <label className='type-checkbox-3 specific-first' htmlFor='radio-specific-all'>
                무관
              </label>
            </div>
            <div className='partner-filter-radio final'>
              <input type='radio' name='check-counseling-specific-type' value='type-radio' id='radio-specific-queer' defaultChecked={false} />
              <label className='type-checkbox-3 specific' htmlFor='radio-specific-queer'>
                퀴어 프렌들리
              </label>
            </div>
            <div className='partner-filter-radio final'>
              <input type='radio' name='check-counseling-specific-type' value='type-radio' id='radio-specific-abroad' defaultChecked={false} />
              <label className='type-checkbox-3 specific' htmlFor='radio-specific-abroad'>
                해외 거주
              </label>
            </div>
            <div className='partner-filter-radio final'>
              <input type='radio' name='check-counseling-specific-type' value='type-radio' id='radio-specific-eng' defaultChecked={false} />
              <label className='type-checkbox-3 specific' htmlFor='radio-specific-eng'>
                영어 상담
              </label>
            </div>
            <div className='partner-filter-radio final'>
              <input type='radio' name='check-counseling-specific-type' value='type-radio' id='radio-specific-divorce' defaultChecked={false} />
              <label className='type-checkbox-3 specific' htmlFor='radio-specific-divorce'>
                이혼 상담
              </label>
            </div>
            <div className='partner-filter-radio final'>
              <input type='radio' name='check-counseling-specific-type' value='type-radio' id='radio-specific-violence' defaultChecked={false} />
              <label className='type-checkbox-3 specific' htmlFor='radio-specific-violence'>
                성폭력 상담
              </label>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default class PartnerAside extends Component {
  render() {
    return (
      <aside className='partner-filter-aside'>
        <article className='partner-filter-box'>
          <PartnerSearch />
        </article>

        <article className='partner-filter-box'>
          <MyCounselingType />
        </article>

        <article className='partner-filter-box'>
          <MyCounselingCondition />
        </article>
      </aside>
    );
  }
}
