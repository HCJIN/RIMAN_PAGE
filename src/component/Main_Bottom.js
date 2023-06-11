import React, { useState } from 'react';
import Main_Bottom_Img1 from '../image/main_banner_swiper01.jpg';
import Main_Bottom_Img2 from '../image/main_banner_swiper02.jpg';

const Main_Bottom = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const images = [Main_Bottom_Img1, Main_Bottom_Img2];
  const texts = [
    {
      title: 'ABOUT BRANCH',
      description: '매장에서 RIMAN KOREA의 제품을 체험해 보세요. 전문 뷰티 플래너가 사업도 안내해 드립니다.',
      btnText: '브렌치 검색하기'
    },
    {
      title: 'NOW HIRING',
      description: '여러분의 창의적 생각과 질문이 변화를 만듭니다.',
      btnText: '자세히 보기'
    }
  ];

  const prevImage = () => {
    setCurrentImage((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const nextImage = () => {
    setCurrentImage((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  const currentText = texts[currentImage];

  return (
    <div>
      <div className="Main_Bottom_Img">
        <img src={images[currentImage]} alt={`Image ${currentImage}`}/> 
        <div className="Main_Bottom">
          <div className="Left_Arrow" onClick={prevImage}>
            {`<`}
          </div>
          <div className="Main_Bottom_Txt">
            <div>{currentText.title}</div>
            <div>{currentText.description}</div>
            <div className="Main_Bottom_Txt_Btn">{currentText.btnText}</div>
          </div>
          <div className="Right_Arrow" onClick={nextImage}>
            {`>`}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main_Bottom;
