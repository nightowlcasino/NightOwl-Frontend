import './App.css';
import {Routes, Route} from "react-router-dom";
import Header from './components/Header/Header.js';
import LeftSideBar from './components/LeftSideBar/LeftSideBar';

import Swap from './components/Swap/Swap';
import HomePage from './components/HomePage/HomePage';
import Coinflip from './components/Coinflip/Coinflip';
import Stake from './components/Stake/Stake';
import ComingSoon from './components/ComingSoon/Coming-Soon';

function App() {
  return (
    <div className="App">
      <Header />
      <div className='mainBody'>
        <LeftSideBar />
        <div className="main">
          <Routes>
            <Route path='/swap' element={<Swap />} />
            <Route path='/coinflip' element={<Coinflip />} />
            <Route path='/stake' element={<Stake />} />
            <Route path='/soon' element={<ComingSoon />} />
            <Route path='/' element={<HomePage />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
