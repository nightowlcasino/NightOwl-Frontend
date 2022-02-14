import './App.css';
import {Routes, Route} from "react-router-dom";
import Header from './components/Header/Header.js';
import LeftSideBar from './components/LeftSideBar/LeftSideBar';


function App() {
  return (
    <div className="App">
      <Header />
      <LeftSideBar />
    </div>
  );
}

export default App;
