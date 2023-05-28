import React from 'react'

const Count_Page = () => {
  return (
    <div className='Count_Page_Main'>
        <div className='Count_Page'>
            <h1 className='Count_Page_Title'>
                숫자로 알아보는 RIMAN KOREA
            </h1>
            <h3 className='Count_Page_Sub_Title'>
                ※2022년 기준
            </h3>
            <ul className='Count_Menu'>
                <li className='Count'>
                    41
                    <li>
                        만명 
                    </li>
                    <li>
                        회원수
                    </li>
                </li>
                <li className='Count'>
                    3,770
                    <li>
                        개점 
                    </li>
                    <li>
                        전국 대리점
                    </li>
                </li>
                <li className='Count'>
                    7,845
                    <li>
                        억원 
                    </li>
                    <li>
                        연 매출
                    </li>
                </li>
                <li className='Count'>
                    3,539
                    <li>
                        만개 
                    </li>
                    <li>
                        누적 판매량
                    </li>
                </li>
            </ul>
        </div> 
    </div>
  )
}

export default Count_Page