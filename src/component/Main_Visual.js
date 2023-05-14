import React from 'react'
import BG_1 from '../image/BG_1.jpg'
import BG_2 from '../image/BG_2.jpg'
import BG_3 from '../image/BG_3.jpg'

const Main_Visual = () => {
  return (
    <div>
        <div className='BG_Image'>
            <img src={BG_1} className='BG_1' alt='BG_1'></img>
            <img src={BG_2} className='BG_2' alt='BG_2'></img>
            <img src={BG_3} className='BG_3' alt='BG_3'></img>
        </div>

    </div>
  )
}

export default Main_Visual