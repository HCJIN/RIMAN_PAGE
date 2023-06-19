import React, { useEffect, useState, useRef } from 'react';

const Footer = () => {
    const [selectListOn, setSelectListOn] = useState(false);
    const selectListRef = useRef(null);
    const MoveToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const handleFamilySiteClick = () => {
        setSelectListOn((prevOn) => !prevOn);
    };

    const handleClickOutside = (event) => {
        if (selectListRef.current && !selectListRef.current.parentNode.contains(event.target)) {
            setSelectListOn(false);
        }
    };

    useEffect(() => {
        document.addEventListener('click', handleClickOutside);

        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, []);

    return (
        <div>
            <div className="Footer_Main">
                <div className="Footer_Top_Box">
                    <div className="Footer_Top_Box_Left">
                        <ul className="Footer_Menu_List">
                            <li className="Footer_Menu">
                                <a href="#">BRAND</a>
                                <ul className="Footer_Sub_Menu_List">
                                    <li className="Footer_Sub_Menu">
                                        <a href="#">인셀덤</a>
                                    </li>
                                    <li className="Footer_Sub_Menu">
                                        <a href="#">보타랩</a>
                                    </li>
                                    <li className="Footer_Sub_Menu">
                                        <a href="#">라이프닝</a>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                        <ul className="Footer_Menu_List">
                            <li className="Footer_Menu">
                                <a href="#">PRODUCTS</a>
                                <ul className="Footer_Sub_Menu_List">
                                    <li className="Footer_Sub_Menu">
                                        <a href="#">제품 보기</a>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                        <ul className="Footer_Menu_List">
                            <li className="Footer_Menu">
                                <a href="#">NEWS & MEDIA</a>
                                <ul className="Footer_Sub_Menu_List">
                                    <li className="Footer_Sub_Menu">
                                        <a href="#">리만 뉴스</a>
                                    </li>
                                    <li className="Footer_Sub_Menu">
                                        <a href="#">소셜미디어</a>
                                    </li>
                                    <li className="Footer_Sub_Menu">
                                        <a href="#">브랜드 필름</a>
                                    </li>
                                    <li className="Footer_Sub_Menu">
                                        <a href="#">뷰티 & 라이프 LAB</a>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                        <ul className="Footer_Menu_List">
                            <li className="Footer_Menu">
                                <a href="#">ABOUT US</a>
                                <ul className="Footer_Sub_Menu_List">
                                    <li className="Footer_Sub_Menu">
                                        <a href="#">기업 소개</a>
                                    </li>
                                    <li className="Footer_Sub_Menu">
                                        <a href="#">CI/BI 소개</a>
                                    </li>
                                    <li className="Footer_Sub_Menu">
                                        <a href="#">R&D</a>
                                    </li>
                                    <li className="Footer_Sub_Menu">
                                        <a href="#">ESG 경영</a>
                                    </li>
                                    <li className="Footer_Sub_Menu">
                                        <a href="#">연혁 & 수상</a>
                                    </li>
                                    <li className="Footer_Sub_Menu">
                                        <a href="#">VISIT OUR BRANCH</a>
                                    </li>
                                    <li className="Footer_Sub_Menu">
                                        <a href="#">CONTACT US</a>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                        <ul className="Footer_Menu_List">
                            <li className="Footer_Menu">
                                <a href="#">CAREERS</a>
                                <ul className="Footer_Sub_Menu_List">
                                    <li className="Footer_Sub_Menu">
                                        <a href="#">직무 소개</a>
                                    </li>
                                    <li className="Footer_Sub_Menu">
                                        <a href="#">인사 제도</a>
                                    </li>
                                    <li className="Footer_Sub_Menu">
                                        <a href="#">복지 제도</a>
                                    </li>
                                    <li className="Footer_Sub_Menu">
                                        <a href="#">채용 공고</a>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                    <div className="Footer_Top_Box_Right">
                        <div className="Footer_Family">
                            <div className="Select">
                                <div className="Select_Wrap">
                                    <button type="button" className={`Select_Button${selectListOn ? ' on' : ''}`} onClick={handleFamilySiteClick}>
                                        FAMILY SITE
                                    </button>
                                    <ul className={`Select_List ${selectListOn ? 'on' : ''}`} ref={selectListRef}>
                                        <li>
                                            <a href="#">ASK COMPANY</a>
                                        </li>
                                        <li>
                                            <a href="#">INCELLDERM</a>
                                        </li>
                                        <li>
                                            <a href="#">BOTALAB</a>
                                        </li>
                                        <li>
                                            <a href="#">LIFENING</a>
                                        </li>
                                        <li>
                                            <a href="#">MY OFFICE</a>
                                        </li>
                                        <li>
                                            <a href="#">RIMAN MALL</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <button type="button" className="Footer_Top Button-Top" onClick={MoveToTop}>
                    <a href="#">TOP</a>
                </button>
                <div className="Footer_Bottom_Box">
                    <div className="Footer_Bottom_Box_Top">
                        <div className="Footer_Content_Wrap">
                            <ul className="Footer_Contents">
                                <li>
                                    <div className="Footer_Item">
                                        <strong>상호명</strong>
                                        (주)리만코리아
                                    </div>
                                    <div className="Footer_Item">
                                        <strong>대표자</strong>
                                        김경중
                                    </div>
                                </li>
                                <li>
                                    <div className="Footer_Item">
                                        <strong>사업자등록번호</strong>
                                        272-81-02126
                                    </div>
                                    <div className="Footer_Item">
                                        <strong>통신판매업신고번호</strong>
                                        2021-대구수성구-0130
                                    </div>
                                </li>
                                <li>
                                    <div className="Footer_Item">
                                        <strong>주소</strong>
                                        대구광역시 수성구 동대구로 86 리만타워 5,6층
                                    </div>
                                    <div className="Footer_Item">
                                        <strong>팩스</strong>
                                        053-767-0225, 053-719-0225
                                    </div>
                                </li>
                                <li>
                                    <div className="Footer_Item">
                                        <strong>판매점 운영지원센터</strong>
                                        1899-5940
                                    </div>
                                    <div className="Footer_Item">
                                        <strong>뷰티플래너 통합지원센터</strong>
                                        1522-8144
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="Footer_Bottom_Box_Bottom">
                        <div className="Footer_Copyright">COPYRIGHT © 2023 RIMANKOREA. ALL RIGHTS RESERVED.</div>
                        <ul className="Footer_Etc">
                            <li>
                                <a href="#">
                                    <strong>개인정보처리방침</strong>
                                </a>
                            </li>
                            <li>
                                <a href="#">이용약관</a>
                            </li>
                            <li>
                                <a href="#">라이브러리</a>
                            </li>
                            <li>
                                <a href="#">평균 후원수당 공지</a>
                            </li>
                            <li>
                                <a href="#">고객지원</a>
                            </li>
                            <li>
                                <a href="#">
                                    <span>뷰티플래너 조회</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
