import React from "react";
import "../styles/Main.css";
import LeftSideBar from '../components/LeftSideBar';

const Main = ()=>{
    return(
<div class="table">
<div classname="maincontent-wrapper">
<div classname="table-row">
   <LeftSideBar />
   
   <div className="Hero">
           
            <div class="hero-heading">
                <h1-hero>Win $100 and <br />5 free spins!</h1-hero>
                </div>
               <div className="hero-content">
                    <p>Have fun in a decentralized way and enjoy <br />the freedom of the blockchain!</p>
            </div>
            <button class="hero-button">CLAIM HERE</button>
        </div>
</div>
<div class="row">
    <div class="precolumn"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=" /></div>
         <div class="leadercolumn">
             <div classname="leaderboard">
                 <h1-leader>Leaderboard</h1-leader>
                 <br />
             <table class="leaderboard-table">
                 <tr>
                     <th>Address</th>
                     <th>Amount</th>
                     <th>Tx Explorer</th>
                 </tr>
    <tr>
    <td>9h5GHKeAKJ...</td>
    <td>10 OWL</td> 
    <td><a href="#">9c5ed99794d38...</a></td>
     </tr>

     <tr>
    <td>9h5GHKeAKJ...</td>
    <td>10 OWL</td> 
    <td><a href="#">9c5ed99794d38...</a></td>
     </tr>

     <tr>
    <td>9h5GHKeAKJ...</td>
    <td>10 OWL</td> 
    <td><a href="#">9c5ed99794d38...</a></td>
     </tr>

     <tr>
    <td>9h5GHKeAKJ...</td>
    <td>10 OWL</td> 
    <td><a href="#">9c5ed99794d38...</a></td>
     </tr>

       <tr>
    <td>9h5GHKeAKJ...</td>
    <td>10 OWL</td> 
    <td><a href="#">9c5ed99794d38...</a></td>
     </tr>
              
                 </table>
         </div>
    </div>
         <div class="imagecolumn">
         <h1-leader>Popular Games</h1-leader>
         <p class="leaderboard-header">ERGOHACK FEB 2022</p>
         <p class="leaderboard-header">NIGHT OWL CASINO</p>
         <p class="leaderboard-header"></p>
         <button class="hero-button">COMING SOON!</button>
         </div>
</div>
</div>
</div>
    )
}
export default Main