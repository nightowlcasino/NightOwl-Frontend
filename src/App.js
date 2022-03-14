import './App.css';
import {Routes, Route} from "react-router-dom";
import Header from './components/Header/Header.js';
import LeftSideBar from './components/LeftSideBar/LeftSideBar';
import logo from "./assets/Elements/logo.png";
import Swap from './components/Swap/Swap';
import HomePage from './components/HomePage/HomePage';
import Coinflip from './components/Coinflip/Coinflip';
import Stake from './components/Stake/Stake';
import ComingSoon from './components/ComingSoon/Coming-Soon';
import Leaderboard from './components/HomePage/Leaderboard';

function App() {
  return (
    <div className="App">
      <Header />
      <div className='w-[100%] h-[100%] flex justify-center mt-[15px] gap-[5rem] lg:gap-8 ml-2 2xl:ml-[18rem] '>
        <div className='flex flex-col items-center'>
          <img src={logo} className="ml-16 sm:ml-10 lg:ml-0 fixed min-w-[10vw] w-[18vw] sm:w-[15vw] md:min-w-[6%] md:w-[10%] 2xl:h-[50px] 2xl:w-[6%] min-h-[62px] top-0" />
          <LeftSideBar />
        </div>
        <div className=' h-[100%] w-full mt-[5rem]'>
          <div className="w-[100%] flex justify-center lg:justify-start">
              <Routes>
                <Route path='/swap' element={<Swap />} />
                <Route path='/coinflip' element={<Coinflip />} />
                <Route path='/stake' element={<Stake />} />
                <Route path='/soon' element={<ComingSoon />} />
                <Route path='/leaderboard' element={<Leaderboard />} />
                <Route path='/' element={<HomePage />} />
              </Routes>
            </div>
        </div>
      </div>
    </div>
  );
}

export default App;
