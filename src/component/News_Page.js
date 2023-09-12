import React from 'react'
import News_Img_1 from '../image/892e46a2-1e39-4f16-8094-8b70be1def68.jpg'
import News_Img_2 from '../image/c5e718c0-31e2-4237-8c98-03a2e1ac05a9.jpg'
import News_Img_3 from '../image/4c758f54-b0cd-4f2c-b3d3-ee5fdcbd3fc1.jpg'

const News_Page = () => {
  return (
    <div className='News_Page'>
      <div className="Inner">
        <div className="News_Title">
          <h1>NEWS</h1>
          <div className="News_Btn">
            +
          </div>
        </div>
        <div className='Main_News_Content'>
          <div className="Content">
            <img src={News_Img_1}/>
            <div className='Main_News_Title'>
              리만코리아, '서울 사랑의열매'에 3억 원 상당 보타랩 제품 기부
            </div>
            <div className='Main_News_Date'>
              2023.05.24
            </div>
          </div>
          <div className="Content">
            <img src={News_Img_2}/>
            <div className='Main_News_Title'>
              제주산 최고 품질 원료 고집하는
              <br/>
              {`<리만코리아>`}
            </div>
            <div className='Main_News_Date'>
              2023.05.17
            </div>
          </div>
          <div className="Content">
            <img src={News_Img_3}/>
            <div className='Main_News_Title'>
              건강기능식품 제안 라이프닝 액티브 에너지 샷
            </div>
            <div className='Main_News_Date'>
              2023.05.24
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default News_Page