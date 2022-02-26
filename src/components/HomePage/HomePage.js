import React from "react";
import "./HomePage.css";
import image1 from "../../assets/Elements/Design-2_0000_Layer-21.png";

const HomePage = ()=>{
    return(
        <div className="home-page">
            <header className="top-div">
                <div className="left-section">
                    <div className="top-para">
                        <p>Hot right</p>
                        <p>now!</p>
                    </div>

                    <h1>Win 100$ and</h1>
                    <h1>5 free spins!</h1>
                    <p>Have fun in a decentralized way and enjoy <br />the freedom of the blockchain!</p>

                    <button>CLAIM HERE</button>
                </div>
            </header>
                <div className="bottom-div">
                    <div className="bottom-left-div">
                        <div className="bottom-top-section">
                            <h2>Leaderboard</h2>
                        </div>

                        <div className="table-div">
                            <table>
                                <th>
                                    <span>Address</span>
                                    <span>Amount</span>
                                    <span>TX ID</span>
                                </th>
                                
                                {/* {map the table rows here} */}

                                <tr>
                                    <td>
                                        <span>2hRSbf...FKbhnz</span>
                                        <span>1534 ERG</span>
                                        <span>kjj3nDS...d342sz</span>
                                    </td>
                                </tr>

                                <tr>
                                    <td>
                                        <span>2hRSbf...FKbhnz</span>
                                        <span>1534 ERG</span>
                                        <span>kjj3nDS...d342sz</span>
                                    </td>
                                </tr>

                            </table>

                        </div>
                    </div>

                    <div className="bottom-right-div">
                        <div style={{display:"flex", flexDirection:"column", justifyContent:"space-between", height:"100%"}}>
                            <div style={{margin:"2rem"}}>
                                <h2 style={{textAlign:"start", margin:"0", padding:"0",top:0}}>Popular games</h2>
                                <p style={{textAlign:"start", margin:"0", padding:"0",top:0}}>Slots</p>
                            </div>
                            
                            <button style={{margin:"2rem", width:"50%", height:"3rem"}}>Play it now</button>
                        </div>

                        <img src={image1} style={{maxWidth: "40%",height:"auto"}} />
                    </div>
                </div>
        </div>
    )
}

export default HomePage