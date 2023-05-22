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
          <Route path="/Show_Menu" element={<Show_Menu />} />
        </Routes>
        <NavBar />
        <Main_Visual />
      </BrowserRouter>
    </div>
  );
}

export default App;
