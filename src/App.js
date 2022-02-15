import './App.css';
import {Routes, Route} from "react-router-dom";
import Header from './components/Header/Header.js';
import LeftSideBar from './components/LeftSideBar/LeftSideBar';

import Swap from './components/Swap/Swap';
import HomePage from './components/HomePage/HomePage';


function App() {
  return (
    <div className="App">
      <Header />
      <LeftSideBar />
      <div className="main">
        <Routes>
          <Route path='/swap' element={<Swap />} />
          <Route path='/' element={<HomePage />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
