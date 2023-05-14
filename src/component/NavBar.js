import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { useState } from 'react';

const NavBar = () => {
  return (
    <div className='main'>
      <div className='header'>
        <img src='https://www.rimankorea.com/logo_rimankorea.svg?30b253deffbf5c06549e270cc61b2f69' alt='로고' className='logo'/>
        <ul className='menu-list'>
          <li className='menu_1' >
            <a href='#' >BRANDS</a>
            <div className='item_contents'>
              <div className='contents_menu'>
                <ul className='contents_menu_list'>
                    <li>인셀덤</li>
                    <li>보타랩</li>
                    <li>라이프닝</li>
                </ul>
                <ul className='contents_menu_list'>
                    <li>제품보기</li>
                </ul>
                <ul className='contents_menu_list'>
                    <li>리만뉴스</li>
                    <li>소셜미디어</li>
                    <li>브랜드필름</li>
                    <li>뷰티 & 라이프 LAB</li>
                </ul>
                <ul className='contents_menu_list'>
                    <li>기업소개</li>
                    <li>CI/BI 소개</li>
                    <li>R&D</li>
                    <li>ESG경영</li>
                    <li>연혁 & 수상</li>
                    <li>VISIT OUR BRANCH</li>
                    <li>CONTACT US</li>
                </ul>
                <ul className='contents_menu_list'>
                    <li>직무소개</li>
                    <li>인사제도</li>
                    <li>복지제도</li>
                    <li>채용공고</li>
                </ul>
              </div>
            </div>
          </li>
          <li className='menu_1'>
            <a href=''>PRODUCTS</a>
          </li>
          <li className='menu_1'>
            <a href=''>NEWS & MEDIA</a>
          </li>
          <li className='menu_1'>
            <a href=''>ABOUT US</a>
          </li>
          <li className='menu_1'>
            <a href=''>CAREERS</a>
          </li>
          <li className='menu_1'>
            <a href=''>RIMAN MALL</a>
          </li>
        </ul>
        <div className='Login'>
          <FontAwesomeIcon icon={faUser} className='My_page_Icon'/>
          <div className='My_Page'>My Office</div>
          <div className='Menu_Bar'>=</div>
        </div>
      </div>
    </div>
  )
}

export default NavBar