import React from 'react'
import Main_Bottom_Img from '../image/main_banner_swiper01.jpg'

const Main_Bottom = () => {
  return (
    <div>
      <div className='Main_Bottom_Img'>
        <img src={Main_Bottom_Img}/>
        <div className='Main_Bottom'>
          <div className='Left_Arrow'>
            {`<`}
          </div>
          <div className='Main_Bottom_Txt'>
            <div>ABOUT BRANCH</div>
            <div>매장에서 RIMAN KOREA의 제품을 체험해 보세요.<br/>전문 뷰티 플래너가 사업도 안내해 드립니다.</div>
            <div className='Main_Bottom_Txt_Btn'>브렌치 검색하기</div>
          </div>
          <div className='Right_Arrow'>
            {`>`}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Main_Bottom