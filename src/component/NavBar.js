import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { useState } from 'react';

const NavBar = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [showMenu, setShowMenu] = useState(false);



  const handleClick = () => {
    setShowMenu(true);
  }

  const handleCloseClick = () => {
    setShowMenu(false);
  }

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
                <li>
                  <a href='#'>
                    인셀덤
                  </a>
                </li>
                <li>
                  <a href='#'>
                    보타랩
                  </a>
                </li>
                <li>
                  <a href='#'>
                    라이프닝
                  </a>
                </li>
              </ul>
            )}
          </li>
          <li onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className='main_menu'>
            <a href='#'>PRODUCTS</a>
            {showDropdown && (
              <ul className='sub_menu'>
                <li>
                  <a href='#'>
                    제품보기  
                  </a>
                </li>
              </ul>
            )}
          </li>
          <li onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className='main_menu'>
            <a href='#'>NEWS & MEDIA</a>
            {showDropdown && (
              <ul className='sub_menu'>
                <li>
                  <a href='#'>
                    리만뉴스
                  </a>
                </li>
                <li>
                  <a href='#'>
                    소셜미디어
                  </a>
                </li>
                <li>
                  <a href='#'>
                    브랜드 필름
                  </a>
                </li>
                <li>
                  <a href='#'>
                    뷰티 & 라이프 LAB
                  </a>
                </li>
              </ul>
            )}
          </li>
          <li onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className='main_menu'>
            <a href='#'>ABOUT US</a>
            {showDropdown && (
              <ul className='sub_menu'>
                <li>
                  <a href='#'>
                    기업소개  
                  </a>
                </li>
                <li>
                  <a href='#'>
                    CI/BI 소개
                  </a>
                </li>
                <li>
                  <a href='#'>
                    R & D  
                  </a>
                </li>
                <li>
                  <a href='#'>
                    ESG 경영  
                  </a>
                </li>
                <li>
                  <a href='#'>
                    연혁 & 수상  
                  </a>
                </li>
                <li>
                  <a href='#'>
                    VISIT OUR BRANCH  
                  </a>
                </li>
                <li>
                  <a href='#'>
                    CONTACT US  
                  </a>
                </li>
              </ul>
            )}
          </li>
          <li onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className='main_menu'>
            <a href='#'>CAREERS</a>
            {showDropdown && (
              <ul className='sub_menu'>
                <li>
                  <a href='#'>
                    직무소개
                  </a>
                </li>
                <li>
                  <a href='#'>
                    인사제도
                  </a>
                </li>
                <li>
                  <a href='#'>
                    복지제도
                  </a>
                </li>
                <li>
                  <a href='#'>
                    채용공고
                  </a>
                </li>
              </ul>
            )}
          </li>
          <li onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className='main_menu'>
            <a href='#'>RIMAN MALL</a>
          </li>
        </ul>
      <div className='Login'>
          <FontAwesomeIcon icon={faUser} className='My_page_Icon'/>
          <div className='My_Page'>
            <a href='#'>
              My Office
            </a>
          </div>
          <div className='Menu_Bar'>
            <a href='#' onClick={handleClick}>
              =
              {showMenu && (
                <div className='Show_Menu'>
                  <div>
                    <a href='#' onClick={handleCloseClick} >
                      X
                    </a>
                  </div>
                  <div className='Click_Menu_Bar'>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                  </div>
                </div>
              )}
            </a>
          </div>
        </div>
      </div>
      
    </div>
  );
};
export default NavBar