import React, { Component } from 'react';
import './PartnerProfile.scss';

export default class PartnerProfileInfo extends Component {
  render() {
    return (
      <section className='profile-content-info'>
        <article className='info-youtube'></article>
        <article className='info-excellent-act'>
          <h3 className='excellent-act-headline'>트로스트 우수 활동 내역</h3>
          <div className='excellent-act-list'>
            <div className='trost-partner'>
              <div className='trost-img'>트로스트 150회기 이미지</div>
              <div className='trost-text'>
                트로스트 상담
                <br />
                150회기 이상
              </div>
            </div>
            <div className='excellent-partenr'>
              <div className='excellent-img'>우수 후기 이미지</div>
              <div className='excellent-text'>
                우수 후기 상담사
                <br />
                0회
              </div>
            </div>
            <div className='month-partner'>
              <div className='month-img'>이달의 이미지</div>
              <div className='month-text'>
                이달의 상담사
                <br />
                0회
              </div>
            </div>
          </div>
        </article>
        <article className='info-counsel-header'>
          <h3>당신에게 건네는 손을 잡아주세요</h3>
          <p>
            바쁘게 하루하루를 살다 보면 문득 나라는 사람이 누구지, 지금 뭐하고 있는 거지라는 생각이 들 때가 있습니다. 잠깐이라도 상담을 통해 나의
            허전한 마음을 어루만져주시는 건 어떨까요? 그리고 저도 당신의 시간에 함께 하고 싶습니다.
          </p>
        </article>
        <article className='info-counsel-history'>
          <h3>주요 자격 및 경력</h3>
          <div className='info-counsel-list'>
            <ul className='partner-qualification'>
              <li className='list-el medal'>상담심리사 1급(상담심리전문가) (한국상담심리학회)</li>
              <li className='list-el medal'>상담심리사 2급 (한국상담심리학회)</li>
              <li className='list-el'>상담심리사 2급 (한국상담심리학회/한국심리학회)</li>
              <li className='list-el'>임상심리사 2급 (한국산업인력공단)</li>
              <li className='list-el'>상담심리사 1급 (한국상담심리학회/한국심리학회)</li>
            </ul>
            <ul className='partner-education'>
              <li className='list-el'>심리학과 상담심리학전공 석사 졸업</li>
            </ul>
            <ul className='partner-career'>
              <li className='list-el'>이전) 광진인터넷중독예방상담센터 심리상담원</li>
              <li className='list-el'>이전) 가톨릭대학교 학생생활상담소 수련상담사</li>
              <li className='list-el'>이전) 서초구립여성회관 임상심리상담원</li>
              <li className='list-el'>현재) 살레시오청소년센터 임상심리상담원</li>
              <li className='list-el'>이전) 인하대학교 병원 임상심리상담원</li>
            </ul>
          </div>
        </article>
        <article className='info-counsel-story'>
          <h3>상담사 이야기</h3>
          <div className='q-and-a'>
            <h4>상담사님의 상담 스타일은?</h4>
            <p>
              저는 우리 모두가 현재의 내 모습에서 한층 더 성장하기를 바라는 욕구, 행복해지고 싶은 욕구를 갖고 있다고 생각합니다. 그리고 이러한
              욕구만큼 현실의 어려움을 이겨내고 해결할 수 있는 능력도 지니고 있다고 믿고 있습니다. 다만 그 능력을 내가 의식하지 못하고 있기 때문에,
              흔히들 말하는 '문제상황'에 압도당하고 무기력해진다고 생각합니다. 이러한 두 가지 생각을 바탕으로, 저는 상담에서 탐색적 질문을 통해 다양한
              각도로 '나'라는 사람을 알아가는 시간을 가집니다. 그리고 내가 하는 행동의 이유를 찾아갑니다. 이러한 과정은 때때로 지지부진하기도 하고
              머리가 복잡해지기도 합니다. 하지만 미로 같은 내 마음을 따라가다 보면 어느 순간 '나'라는 존재를 새롭게 바라보게 되고 희망을 가지게
              됩니다.
            </p>
          </div>
          <div className='q-and-a'>
            <h4>심리상담을 망설이는 분들께 하고 싶은 이야기</h4>
            <p>
              하늘이 제일 어두울 때는 바로 해뜨기 전이라고 해요. 희망을 잃지 않고 당신의 어두운 순간을 함께 인내하고 마음을 나눌 수 있는 시간을
              가져보세요. 혼자만의 짐을 상담자와 함께 나누다 보면 어느새 당신의 해가 밝게 뜰 거예요.
            </p>
          </div>
        </article>
      </section>
    );
  }
}
