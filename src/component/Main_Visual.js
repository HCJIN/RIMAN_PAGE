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
    <div className="BG_Image">
      {bgList.map((bg, index) => (
        <img
          key={index}
          src={bg}
          className={`BG_Image__${index} ${
            index === bgIndex ? 'active' : ''
          }`}
          alt={`BG_${index}`}
        />
      ))}
    </div>
  );
};

export default Main_Visual;
