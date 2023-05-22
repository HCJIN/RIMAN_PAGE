import React from 'react'
import { Route } from 'react-router-dom'
import { Link } from 'react-router-dom'

const Show_Menu = () => {
  return (
    <div className='Show_menu'>
      <div className="Show_Menu_Close_Button">
        <Link to="/" className='Show_Menu_Close_Button_Link'>
          X
        </Link>
      </div>
      <div className="Show_Menu_List">
        <ul className="Show_Menu_List_item">
          <li>Brands</li>
          <ul className="Show_Menu_List_Sub_Menu">
            <li>인셀덤</li>
            <li>보타랩</li>
            <li>라이프닝</li>
          </ul>
        </ul>
        <ul className="Show_Menu_List_item">
          <li>Products</li>
          <ul className="Show_Menu_List_Sub_Menu">
            <li>인셀덤</li>
            <li>보타랩</li>
            <li>라이프닝</li>
          </ul>
        </ul>
        <ul className="Show_Menu_List_item">
          <li>News & Media</li>
          <ul className="Show_Menu_List_Sub_Menu">
            <li>인셀덤</li>
            <li>보타랩</li>
            <li>라이프닝</li>
          </ul>
        </ul>
        <ul className="Show_Menu_List_item">
          <li>About us</li>
          <ul className="Show_Menu_List_Sub_Menu">
            <li>인셀덤</li>
            <li>보타랩</li>
            <li>라이프닝</li>
          </ul>
        </ul>
        <ul className="Show_Menu_List_item">
          <li>Careers</li>
          <ul className="Show_Menu_List_Sub_Menu">
            <li>인셀덤</li>
            <li>보타랩</li>
            <li>라이프닝</li>
          </ul>
        </ul>
        <ul className="Show_Menu_List_item">
          <li>RIMAN MALL</li>
        </ul>
      </div>
    </div>
  )
}

export default Show_Menu