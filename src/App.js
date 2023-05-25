import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Main_Visual from './component/Main_Visual';
import NavBar from './component/NavBar';
import Show_Menu from './component/Show_Menu';
import Main_Product_Box from './component/Main_Product_Box';
import Banner from './component/Banner';


function App() {
  return (
    <div>
        <NavBar></NavBar>
        <Routes>
          <Route path="/" element={<Main_Visual/>} />
          <Route path="/Show_menu" element={<Show_Menu/>} />
        </Routes>
        <Main_Product_Box />
        <Banner />
    </div>
  );
}

export default App;
