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
     
      <div className='w-[100%] h-[100%] flex justify-center mt-[15px] lg:gap-2 xl:gap-8 2xl:gap-28 lg:ml-[9rem] 2xl:ml-[18rem] '>
        <div className='flex flex-col items-end sm:items-center'>
          <img src={logo} className="hidden sm:block mt-2 max-w-[120px] sm:ml-16 lg:ml-0 fixed min-w-[100px] w-[18vw] sm:w-[15vw] md:min-w-[60px] 2xl:h-[50px] 2xl:w-[6%] min-h-[62px] top-0" />
          <LeftSideBar />
        </div>
        <div className=' h-[100%] flex flex-col items-center sm:items-start w-full mt-[5rem]'>
          <Header />
          <div className="w-[100%] flex justify-center lg:justify-start mt-4">
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
