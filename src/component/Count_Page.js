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
                    <li className='Sub'>
                        만명 
                    </li>
                </li>
                <li className='Count'>
                    3,770
                    <li className='Sub'>
                        개점 
                    </li>
                </li>
                <li className='Count'>
                    7,845
                    <li className='Sub'>
                        억원 
                    </li>
                </li>
                <li className='Count'>
                    3,539
                    <li className='Sub'>
                        만개 
                    </li>
                </li>
            </ul>

        </div> 
    </div>
  )
}

export default Count_Page