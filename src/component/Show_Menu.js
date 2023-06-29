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
            <li>제품 보기</li>
          </ul>
        </ul>
        <ul className="Show_Menu_List_item">
          <li>News & Media</li>
          <ul className="Show_Menu_List_Sub_Menu">
            <li>리만 뉴스</li>
            <li>소셜미디어</li>
            <li>브랜드 필름</li>
            <li>뷰티 & 라이프 LAB</li>
          </ul>
        </ul>
        <ul className="Show_Menu_List_item">
          <li>About us</li>
          <ul className="Show_Menu_List_Sub_Menu">
            <li>기업 소개</li>
            <li>CI/BI 소개</li>
            <li>R&D</li>
            <li>ESG 경영</li>
            <li>연혁 & 수상</li>
            <li>VISIT OUR BRANCH</li>
            <li>CONTACT US</li>
          </ul>
        </ul>
        <ul className="Show_Menu_List_item">
          <li>Careers</li>
          <ul className="Show_Menu_List_Sub_Menu">
            <li>직무 소개</li>
            <li>인사 제도</li>
            <li>복지 제도</li>
            <li>채용 공고</li>
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