import React from 'react'
import Top_Box_Img from '../image/main_incel_img01.jpg';
import Mid_Box_Img from '../image/main_botalab_img01.jpg'
import Bottom_Box_Img from '../image/main_lifening_img01.jpg'

const Main_Product_Box = () => {
  return (
    <div className='Main_Product_Box'>
      <div className='Main_Product_Top_Box'>
        <div className='Main_Product_Top_Box_Left'>
          <div className='Main_Product_Top_Box_Left_Txt'>
            <h1 className='Top_Left_Box_Top_Txt'>
              인셀덤 더마톨로지 <br/> 퍼스트 패키지 EX & 엑티브 크림 EX
            </h1>
            <div className='Top_Left_Box_Mid_Txt'>
              어린 세포에 빛을 전하는 <br/> ByungPool Energy Fluid의 힘
            </div>
            <button className="Top_Left_Box_Btn">자세히 보기</button>
          </div>
        </div>
        <div className='Main_Product_Top_Box_Right'>
          <div className='Top_Right_Box_Img'>
            <img src={Top_Box_Img}/>
          </div>
        </div>
      </div>
      <div className='Main_Product_Mid_Box'>
        <div className='Main_Product_Mid_Box_Left'>
          <div className='Mid_Left_Box_Img'>
            <img src={Mid_Box_Img} />
          </div>
        </div>
        <div className='Main_Product_Mid_Box_Right'>
          <div className='Main_Product_Mid_Box_Right_Txt'>
            <h1 className='Mid_Right_Box_Top_Txt'>
              사막의 기적, 데저티콜라 <br/> 샴푸 & 워터 트리트먼트 & <br/> 헤어오일세럼 
            </h1>
            <div className='Mid_Right_Box_Mid_Txt'>
              지친 모발과 두피에 영양을 전달하는 <br/> Vegan Hair Care Program
            </div>
            <button className="Mid_Right_Box_Btn">자세히 보기</button>
          </div>
        </div>
      </div>
      <div className='Main_Product_Bottom_Box'>
        <div className='Main_Product_Bottom_Box_Left'>
          <div className='Main_Product_Bottom_Box_Left_Txt'>
              <h1 className='Bottom_Left_Box_Top_Txt'>
                현재를 가꾸는 당신에게, 라이프닝 <br/> Lifening, to tou
              </h1>
              <div className='Bottom_Left_Box_Mid_Txt'>
                매일 챙기는 <br/> 당신의 하루
              </div>
              <button className="Bottom_Left_Box_Btn">자세히 보기</button>      
          </div>    
        </div>
        <div className='Main_Product_Bottom_Box_Right'>
          <div className='Bottom_Right_Box_Img'>
            <img src={Bottom_Box_Img}/>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Main_Product_Box