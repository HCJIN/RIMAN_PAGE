import React from 'react'
import Top_Banner_Img from '../image/13504f27-1e1f-4fd6-8309-21e81af29683.jpg'
import Bottom_Banner_Img from '../image/cd86b46a-bd1c-43ac-92c7-d4f733e73935.jpg'

const Banner = () => {
  return (
  <div>
    <div className='Top_Banner_Img_Box'>
      <img src={Top_Banner_Img}/>
      <div className='Top_Banner_Txt'>
        <h1 className='Top_Banner_Box_Top_Txt'>
          청정 제주 화산 암반층이 40만년 품어온 미네랄
        </h1>
        <div className='Top_Banner_Box_Mid_Txt'>
          용암해수는 태고의 제주바다가 만들어 낸 맑고 깨끗한 물입니다.
          <br/> 병원균이 거의 없는 제주만이 보유한 독특한 지하수자원입니다.
        </div>
        <button className="Top_Banner_Box_Btn">자세히 보기</button>     
      </div>
    </div>
    <div className='Bottom_Banner_Img_Box'>
      <img src={Bottom_Banner_Img}/>
      <div className='Bottom_Banner_Txt'>
        <h1 className='Bottom_Banner_Box_Top_Txt'>
          정화 능력이 응집된 식물
        </h1>
        <div className='Bottom_Banner_Box_Mid_Txt'>
          병풀은 호랑이가 상처를 입었을 때 치료하는 모습을 보고 호랑이풀이라 불렀고
          <br/> 코끼리가 병풀을 먹는 것을 보고 장수식품으로 여겼다고 합니다.
        </div>
        <button className="Bottom_Banner_Box_Btn">자세히 보기</button>     
      </div>
    </div>
  </div>

  )
}

export default Banner