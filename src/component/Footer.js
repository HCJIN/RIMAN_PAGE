import React, { useEffect, useState, useRef } from 'react'

const Footer = () => {

  const [selectListOn, setSelectListOn] = useState(false);
  const selectListRef = useRef(null);

  const handleFamilySiteClick = () => {
    setSelectListOn((prevOn) => !prevOn);
  };

  const handleClickOutside = (event) => {
    if (selectListRef.current && !selectListRef.current.parentNode.contains(event.target)) {
      setSelectListOn(false);
    }
  };
  

  useEffect(() => {
    document.addEventListener('click',handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside)
    };
  }, []);


  return (
    <div>
      <div className='Footer_Main'>
        <div className='Footer_Top_Box'>
        <div className="Footer_Top_Box_Left">
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


        </div>
        <div className='Footer_Top_Box_Right'>
            <div className='Footer_Family'>
              <div className='Select'>
                <div className='Select_Wrap'>
                  <button type='button' className={`Select_Button${selectListOn ? ' on' : ''}`} onClick={handleFamilySiteClick}>
                    FAMILY SITE
                  </button>
                  <ul className={`Select_List ${selectListOn ? 'on' : ''}`} ref={selectListRef}>
                    <li>
                      <a href='#'>
                        ASK COMPANY
                      </a>
                    </li>
                    <li>
                      <a href='#'>
                        INCELLDERM
                      </a>
                    </li>
                    <li>
                      <a href='#'>
                        BOTALAB
                      </a>
                    </li>
                    <li>
                      <a href='#'>
                        LIFENING
                      </a>
                    </li>
                    <li>
                      <a href='#'>
                        MY OFFICE
                      </a>
                    </li>
                    <li>
                      <a href='#'>
                        RIMAN MALL
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="Footer_Bottom_Box">
          <div className='Footer_Bottom_Box_Top'>
            <div className='Footer_Bottom_Box_Top_Left'></div>
            <div className='Footer_Bottom_Box_Top_Right'></div>
          </div>
          <div className='Footer_Bottom_Box_Bottom'></div>
        </div>
      </div>
    </div>
  )
}

export default Footer