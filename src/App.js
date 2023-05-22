import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Main_Visual from './component/Main_Visual';
import NavBar from './component/NavBar';
import Show_Menu from './component/Show_Menu';


function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/Show_menu" element={<Show_Menu/>} />
        </Routes>
      </BrowserRouter>
      <NavBar />
      <Main_Visual />
    </div>
  );
}

export default App;
