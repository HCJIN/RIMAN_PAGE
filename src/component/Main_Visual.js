import React, { useState, useEffect } from 'react';
import BG_1 from '../image/BG_1.jpg';
import BG_2 from '../image/BG_2.jpg';
import BG_3 from '../image/BG_3.jpg';


const Main_Visual = () => {
  const [bgIndex, setBgIndex] = useState(0);
  const bgList = [BG_1, BG_2, BG_3];

  useEffect(() => {
    const bgTimer = setInterval(() => {
      setBgIndex(bgIndex => (bgIndex + 1) % bgList.length);
    }, 5000);
    return () => clearInterval(bgTimer);
  }, []);

  return (
    <div className="Main_BG BG_Image">
      {bgList.map((bg, index) => (
        <div key={index} className={`bg-image-wrapper ${
          index === bgIndex ? 'active' : ''
        }`}>
          <img
            src={bg}
            className={`bg-image BG_Image__${index} ${
              index === bgIndex ? 'active' : ''
            }`}
            alt={`BG_${index}`}
          />
          {index === 0 && (
            <div className={`BG_Text ${
              index === bgIndex ? 'fade-in' : 'fade-out'
            }`}>
              <h1>botalab</h1>
              <h3>강인한 식물의 생명력을 담은 비건 뷰티</h3>
              <h4>보타랩 식물 연구소는 강인한 식물 에너지로 <br/>건강하고 아름다운 피부 활력과 가치있는 일상 제공</h4>
            </div>
          )}
          {index === 1 && (
            <div className={`BG_Text ${
              index === bgIndex ? 'fade-in' : 'fade-out'
            }`}>
              <h1>INCELLDERM</h1>
              <h3>어린 세포 발견의 비밀</h3>
              <h4>우수한 피부 과학과 자연 유래 성분의 만남으로<br/>스킨케어 제품의 새로운 시대를 열다</h4>
            </div>
          )}
          {index === 2 && (
            <div className={`BG_Text ${
              index === bgIndex ? 'fade-in' : 'fade-out'
            }`}>
              <h1>Lifening</h1>
              <h3>현재를 가꾸는 당신에게, 라이프닝</h3>
              <h4>매일 챙기는 당신의 하루<br/>라이프닝과 함꼐 일상을 시작하세요</h4>
            </div>
          )}
          <button className="BG_Text_Btn">자세히 보기</button>
        </div>
      ))}
    </div>
  );
};

export default Main_Visual;
