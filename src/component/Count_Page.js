import React from 'react'

const Count_Page = () => {
  return (
    <div className='Count_Page_Main'>
        <div className='Count_Page'>
            <h1 className='Count_Page_Title'>
                RIMAN KOREA
            </h1>
            <h3 className='Count_Page_Sub_Title'>
                ※2022년 기준
            </h3>
            <ul className='Count_Menu'>
                <li className='Count'>
                    <ul className="Count_List">
                        41
                        <li className="sub">
                            만명
                        </li>
                    </ul>
                    <li>
                        회원수
                    </li>
                </li>
                <li className='Count'>
                    <ul className="Count_List">
                        3,770
                        <li className="sub">
                            개점
                        </li>
                    </ul>
                    <li>
                        전국 대리점
                    </li>
                </li>
                <li className='Count'>
                    <ul className="Count_List">
                        7,845
                        <li className="sub">
                            억원
                        </li>
                    </ul>
                    <li>
                        연 매출
                    </li>
                </li>
                <li className='Count'>
                    <ul className="Count_List">
                        3,539
                        <li className="sub">
                            만개
                        </li>
                    </ul>
                    <li>
                        누적판매량
                    </li>
                </li>
            </ul>

        </div> 
    </div>
  )
}

export default Count_Page