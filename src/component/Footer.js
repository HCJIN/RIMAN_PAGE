import React from 'react'
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

const Footer = () => {
  return (
    <div>
      <div className='Footer_Main'>
        <div className="Footer_Top_Box">
          <ul className="Footer_Menu_List">
            <li className="Footer_Menu">
              <a href="#">
                BRAND
              </a>
              <ul className="Footer_Sub_Menu_List">
                <li className="Footer_Sub_Menu">
                  <a href="#">
                    인셀덤
                  </a>
                </li>
                <li className="Footer_Sub_Menu">
                  <a href="#">
                    보타랩
                  </a>
                </li>
                <li className="Footer_Sub_Menu">
                  <a href="#">
                    라이프닝
                  </a>
                </li>
              </ul>
            </li>
          </ul>
          <ul className="Footer_Menu_List">
            <li className="Footer_Menu">
              <a href="#">
                PRODUCTS
              </a>
              <ul className="Footer_Sub_Menu_List">
                <li className="Footer_Sub_Menu">
                  <a href="#">
                    제품 보기
                  </a>
                </li>
              </ul>
            </li>
          </ul>
          <ul className="Footer_Menu_List">
            <li className="Footer_Menu">
              <a href="#">
                NEWS & MEDIA
              </a>
              <ul className="Footer_Sub_Menu_List">
                <li className="Footer_Sub_Menu">
                  <a href="#">
                    리만 뉴스
                  </a>
                </li>
                <li className="Footer_Sub_Menu">
                  <a href="#">
                    소셜미디어
                  </a>
                </li>
                <li className="Footer_Sub_Menu">
                  <a href="#">
                    브랜드 필름
                  </a>
                </li>
                <li className="Footer_Sub_Menu">
                  <a href="#">
                    뷰티 & 라이프 LAB
                  </a>
                </li>
              </ul>
            </li>
          </ul>
          <ul className="Footer_Menu_List">
            <li className="Footer_Menu">
              <a href="#">
                ABOUT US
              </a>
              <ul className="Footer_Sub_Menu_List">
                <li className="Footer_Sub_Menu">
                  <a href="#">
                    기업 소개
                  </a>
                </li>
                <li className="Footer_Sub_Menu">
                  <a href="#">
                    CI/BI 소개
                  </a>
                </li>
                <li className="Footer_Sub_Menu">
                  <a href="#">
                    R&D
                  </a>
                </li>
                <li className="Footer_Sub_Menu">
                  <a href="#">
                    ESG 경영
                  </a>
                </li>
                <li className="Footer_Sub_Menu">
                  <a href="#">
                    연혁 & 수상
                  </a>
                </li>
                <li className="Footer_Sub_Menu">
                  <a href="#">
                    VISIT OUR BRANCH
                  </a>
                </li>
                <li className="Footer_Sub_Menu">
                  <a href="#">
                    CONTACT US
                  </a>
                </li>
              </ul>
            </li>
          </ul>
          <ul className="Footer_Menu_List">
            <li className="Footer_Menu">
              <a href="#">
                CAREERS
              </a>
              <ul className="Footer_Sub_Menu_List">
                <li className="Footer_Sub_Menu">
                  <a href="#">
                    직무 소개
                  </a>
                </li>
                <li className="Footer_Sub_Menu">
                  <a href="#">
                    인사 제도
                  </a>
                </li>
                <li className="Footer_Sub_Menu">
                  <a href="#">
                    복지 제도
                  </a>
                </li>
                <li className="Footer_Sub_Menu">
                  <a href="#">
                    채용 공고
                  </a>
                </li>
              </ul>
            </li>
          </ul>
          <DropdownButton id="dropdown-basic-button" title="Dropdown button">
            <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
            <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
          </DropdownButton>
        </div>
        <div className="Footer_Bottom_Box"></div>
      </div>
    </div>
  )
}

export default Footer