import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Main_Visual from './component/Main_Visual';
import NavBar from './component/NavBar';
import Show_Menu from './component/Show_Menu';

function ShowMenu() {
  return <div>Show Menu Component</div>;
}

function App() {
  return (
    <div>
      <BrowserRouter basename="/my-app">
        <Routes>
          <Route path="/show_menu" element={<ShowMenu />} />
        </Routes>
      </BrowserRouter>
      <NavBar />
      <Main_Visual />
    </div>
  );
}

export default App;
