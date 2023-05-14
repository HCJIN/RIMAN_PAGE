import './App.css';
import Main_Visual from './component/Main_Visual';
import NavBar from './component/NavBar';
import { useState } from 'react';


function App() {
  return (
    <div>
      <NavBar />
      <Main_Visual />
    </div>
  );
}

export default App;
