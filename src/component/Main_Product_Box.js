import React from 'react'
import RB_Img from '../image/main_incel_img01.jpg';

const Main_Product_Box = () => {
  return (
    <div className='Main_Product_Box'>
      <div className='Main_Product_Top_Box'>
        <div className='Main_Product_Top_Box_Left'>
          <div className='Main_Product_Top_Box_Left_Txt'>
            <h1 className='Left_Box_Top_Txt'>
              인셀덤 더마톨로지 <br/> 퍼스트 패키지 EX & 엑티브 크림 EX
            </h1>
            <div className='Left_Box_Mid_Txt'>
              어린 세포에 빛을 전하는 <br/> ByungPool Energy Fluid의 힘
            </div>
            <button className="Left_Box_Btn">자세히 보기</button>
          </div>
        </div>
        <div className='Main_Product_Box_Right'>
          <div className='Right_Box_Img'>
            <img src={RB_Img}/>
          </div>
        </div>
      </div>
      <div className='Main_Product_Mai_Box'>

      </div>
      <div></div>

    </div>
  )
}

export default Main_Product_Box