import React from 'react'
import { Route } from 'react-router-dom'
import { Link } from 'react-router-dom'

const Show_Menu = () => {
  return (
    <div className='Show_menu'>
      <div className="Show_Menu_Close_Button">
        <Link to="/">
          X
        </Link>
      </div>
      <div className="Show_menu_List">
        <ul>
          <li>Brands</li>
          <ul>
            <li>인셀덤</li>
            <li>보타랩</li>
            <li>라이프닝</li>
          </ul>
        </ul>
        <div>Products</div>
        <div>News & Media</div>
        <div>About us</div>
        <div>Careers</div>
        <div>RIMAN MALL</div>
      </div>
    </div>
  )
}

export default Show_Menu