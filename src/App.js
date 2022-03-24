import './App.css';
import {Routes, Route, useLocation} from "react-router-dom";
import Header from './components/Header/Header.js';
import LeftSideBar from './components/LeftSideBar/LeftSideBar';
import logo from "./assets/Elements/logo.png";
import Swap from './components/Swap/Swap';
import HomePage from './components/HomePage/HomePage';
import Coinflip from './components/Coinflip/Coinflip';
import Stake from './components/Stake/Stake';
import ComingSoon from './components/ComingSoon/Coming-Soon';
import Leaderboard from './components/HomePage/Leaderboard';
import MobileSlideOverBar from './components/LeftSideBar/MobileSlideOverBar';

function App() {
  const location = useLocation();
  const path = location.pathname;

  return (
    <div className="App">
     
      <div className=' xl:min-w-[1200px] max-w-[1600px] h-[100%] flex flex-col justify-center mt-[15px] lg:gap-2 2xl:gap-28  '>
        
        <div className='min-w-[100%] flex justify-between'>
          <div className='max-w-[25vw] flex justify-center lg:w-[25vw] xl:w-[18vw] 2xl:max-w-[300px]'>
            <img src={logo} className="hidden sm:block mt-2 max-w-[120px] fixed min-w-[100px] w-[18vw] sm:w-[15vw] md:min-w-[60px] 2xl:h-[50px] 2xl:w-[6%] min-h-[62px] top-0" />
          </div>
          <Header />
        </div>

        <div className='h-[100%] flex justify-between min-w-[100%] mt-[5rem]'>
          {path.includes('/games') ? <MobileSlideOverBar /> : <LeftSideBar />}
          <div className="mt-4">
              <Routes>
                <Route path='/swap' element={<Swap />} />
                <Route path='/games/coinflip' element={<Coinflip />} />
                <Route path='/stake' element={<Stake />} />
                <Route path='/soon' element={<ComingSoon />} />
                <Route path='/games/roulette' element={<Leaderboard />} />
                <Route path='/' element={<HomePage />} />
              </Routes>
            </div>
        </div>
      </div>
    </div>
  );
}

export default App;
