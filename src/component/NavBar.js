import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { useState } from 'react';

const NavBar = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  
  const handleMouseEnter = () => {
    setShowDropdown(true);
  };
  
  const handleMouseLeave = () => {
    setShowDropdown(false);
  };
  
  return (
    <div className='main'>
      <div className='header'>
        <a>
          <img src='https://www.rimankorea.com/logo_rimankorea.svg?30b253deffbf5c06549e270cc61b2f69' alt='로고'/>
        </a>
        <ul className='menu_list'>
        <li onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className='main_menu'>
          <a href='#'>BRAND</a>
          {showDropdown && (
            <ul className='sub_menu'>
              <li>인셀덤</li>
              <li>보타랩</li>
              <li>라이프닝</li>
            </ul>
          )}
        </li>
        <li onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className='main_menu'>
          <a href='#'>PRODUCTS</a>
          {showDropdown && (
            <ul className='sub_menu'>
              <li>제품보기</li>
            </ul>
          )}
        </li>
        <li onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className='main_menu'>
          <a href='#'>NEWS & MEDIA</a>
          {showDropdown && (
            <ul className='sub_menu'>
              <li>리만뉴스</li>
              <li>소셜미디어</li>
              <li>브랜드 필름</li>
              <li>뷰티 & 라이프 LAB</li>
            </ul>
          )}
        </li>
        <li onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className='main_menu'>
          <a href='#'>ABOUT US</a>
          {showDropdown && (
            <ul className='sub_menu'>
              <li>기업소개</li>
              <li>CI/BI 소개</li>
              <li>R & D</li>
              <li>ESG 경영</li>
              <li>연혁 & 수상</li>
              <li>VISIT OUR BRANCH</li>
              <li>CONTACT US</li>
            </ul>
          )}
        </li>
        <li onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className='main_menu'>
          <a href='#'>CAREERS</a>
          {showDropdown && (
            <ul className='sub_menu'>
              <li>직무소개</li>
              <li>인사제도</li>
              <li>복지제도</li>
              <li>채용공고</li>
            </ul>
          )}
        </li>
        <li onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className='main_menu'>
          <a href='#'>RIMAN MALL</a>
        </li>
      </ul>
      <div className='Login'>
          <FontAwesomeIcon icon={faUser} className='My_page_Icon'/>
          <div className='My_Page'>My Office</div>
          <div className='Menu_Bar'>=</div>
        </div>
      </div>
      
    </div>
  );
};
export default NavBar