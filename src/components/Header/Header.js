import React, {useState, useEffect, createContext} from "react";
import JSONBigInt from 'json-bigint';
import logo from "../../assets/Elements/logo.png";
import axios from 'axios';
import wallet from "../../assets/Elements/Design-2_0026_Layer-17.png";
import "./Header.css";
import "./WalletSelector";
//import "../../wallets/wallet"
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import i18next from "i18next";
import cookies from "js-cookie"
import WalletSelector from "./WalletSelector";
import WalletHover from "./WalletHover/WalletHover";


const languages = [
  {
    code: 'en',
    name: 'English',
    country_code: 'us'
  },
  {
    code: 'es',
    name: 'Spanish',
    country_code: 'es'
  }
]

const backend = process.env.BACKEND_FQDN || "localhost"

const currentLanguageCode = cookies.get("i18next") || "en"

const NANOERG_TO_ERG = 1000000000;
const TOKENID_NO_TEST = "afd0d6cb61e86d15f2a0adc1e7e23df532ba3ff35f8ba88bed16729cae933032";
const TOKENID_FAKE_SIGUSD = "96c402c0e658909aa03f534006124f0e43725c467dbc8dea39680d0861892de5";

const Header = () => {

  const [walletConnected, setWalletConnected] = useState(false)
  const [defaultAddress, setDefaultAddress] = useState("")
  const [ergBalance, setErgBalance] = useState(0)
  const [sigUSDBalance, setSigUSDBalance] = useState(0)
  const [owlBalance, setOwlBalance] = useState(0)
  const [ergoWallet, setErgoWallet] = useState()
  const [showSelector, setShowSelector] = useState(false)
  const [walletHover, setWalletHover] = useState(false);

  const { t } = useTranslation();

  const balanceValue = () => {
    return 0
  }

  const toggleSelector = () => {
    if(!walletConnected)setShowSelector(!showSelector);
  }

  useEffect(() => {
    if (typeof ergoWallet !== "undefined") {
      // get ERG balance
      ergoWallet.get_balance().then(function(balance) {
        setErgBalance(balance)
        console.log(`ERG: ${balance}`)
      });
      // get SigUSD balance
      ergoWallet.get_balance(TOKENID_FAKE_SIGUSD).then(function(balance) {
        setSigUSDBalance(balance)
        console.log(`SigUSD: ${balance}`)
      });
      // get OWL balance
      ergoWallet.get_balance(TOKENID_NO_TEST).then(function(balance) {
        setOwlBalance(balance)
        console.log(`OWL: ${balance}`)
      });
      ergoWallet.get_change_address().then(function(address) {
        setDefaultAddress(address)
      });
    }
  }, [ergoWallet]);

  useEffect(() => {
    const walletIcon = document.getElementsByClassName('connect-wallet-icon')[0]
    const walletText = document.getElementsByClassName('connect-text')[0]

    if (walletConnected) {
      walletIcon.style.display = "none"
      walletText.textContent = truncate(defaultAddress, 14, "...")
    } else {
      walletIcon.style.display = ""
      walletText.textContent = t("connect wallet")
    }
  }, [defaultAddress]);

  useEffect(() => {
    const walletBalance = document.getElementsByClassName('wallet-balance')[0]

    if (walletConnected) {
      walletBalance.textContent = owlBalance + " OWL"
      walletBalance.style.display = ""
    } else {
      walletBalance.textContent = balanceValue() + " OWL"
      walletBalance.style.display = "none"
    }
  }, [owlBalance]);

  const truncate = (str, len, sep) => {
    if (str.length < len) {
      return str
    } else {
      return str.substring(0,parseInt(len/2)) + sep + str.substring(str.length-(parseInt(len/2)+1),str.length-1)
    }
  }

  const handleWalletTrue = () => {
    if(walletConnected)setWalletHover(prev=>!prev);
  }

  const handleWalletFalse = () => {
    setWalletHover(false);
  }

  const swapTokens = () => {
    console.log('swap button pressed')

    // get input boxes for each token ID
    const sigUSDAmount = 10
    const owl = 10

    ergoWallet.get_utxos(sigUSDAmount, TOKENID_FAKE_SIGUSD).then(utxosResponse => {
    //ergoWallet.get_utxos(owl, TOKENID_NO_TEST).then(utxosResponse => {
      if(utxosResponse.length === 0){
          console.log('NO UTXOS')
      } else {
        // send token input boxes and token amounts in a POST message to the backend
        axios.post(`http://${backend}:8088/api/v1/swap/sigusd`, {
        //axios.post(`http://${backend}:8088/api/v1/swap/owl`, {
          amnt: sigUSDAmount,
          senderAddr: defaultAddress,
          utxos: utxosResponse
        })
        .then(async function (response) {
          const signedTx = await signTx(response.data);
          console.log("signedTx", signedTx)
          const txId = await submitTx(signedTx);
          if (!txId) {
            console.log(`No submitted tx ID`);
            return null;
          }
          console.log(`Transaction submitted - ${txId}`);
        })
        .catch(function (error) {
          console.log(error);
        });
      }
    })
  }

  async function signTx(txToBeSigned) {
    try {
      return await ergoWallet.sign_tx(txToBeSigned);
    } catch (err) {
      const msg = `[signTx] Error: ${JSON.stringify(err)}`;
      console.error(msg, err);
      return null;
    }
  }

  async function submitTx(txToBeSubmitted) {
    try {
      return await ergoWallet.submit_tx(txToBeSubmitted);
    } catch (err) {
      const msg = `[submitTx] Error: ${JSON.stringify(err)}`;
      console.error(msg, err);
      return null;
    }
  }

  const connectNautilus = () => {
    window.ergoConnector.nautilus.isConnected().then(connected => {
      if (connected) {
        // Already connected
        console.log(`nautilus is connected`)
        toggleSelector()
        return
      } else {
        // try to connect
        window.ergoConnector.nautilus.connect().then(access_granted => {
          if (access_granted) {
            setWalletConnected(true)
            window.ergoConnector.nautilus.getContext().then(context => {
              console.log(`nautilus is connected`)
              setErgoWallet(context)
            })
          } else {
            setWalletConnected(false)
            console.log('Wallet access denied')
          }
        })
        toggleSelector()
      }
    })
  }

  const connectSafew = () => {
    if (!window.ergoConnector.safew.isConnected()) {
      // we aren't connected
      window.ergoConnector.safew.connect().then(access_granted => {
        if (access_granted) {
          setWalletConnected(true)
          window.ergoConnector.safew.getContext().then(context => {
            setErgoWallet(context)
            console.log(`safew is connected`)
          })
        } else {
          setWalletConnected(false)
          console.log('Wallet access denied')
        }
      })
    }
    toggleSelector()
  }

  /*const disconnectWallet = () => {
    //console.log(window)
    window.ergoConnector.nautilus.isConnected().then(connected => {
      if (connected) {
        // disconnect wallet
        window.dispatchEvent(new Event("ergo_wallet_disconnected"));
      } else {
        return
      }
    })
  }*/

  if (typeof window.ergo_request_read_access === "undefined") {
    console.log("Ergo not found");
  } else {
    window.addEventListener("ergo_wallet_disconnected", function(event) {
      setWalletConnected(false)
      setErgoWallet()
      setDefaultAddress("")
      setOwlBalance(0)
    });
  }

  return (
    <div className="flex h-auto justify-between sm:justify-between lg:items-center top-0 fixed w-full md:max-w-[700px] lg:max-w-[1460px] mt-[10px]">      
      <img src={logo} className="sm:hidden mt-2 max-w-[120px] sm:ml-0 fixed min-w-[100px] w-[100px] sm:w-[15vw] md:min-w-[60px] 2xl:h-[50px] 2xl:w-[6%] min-h-[62px] top-0" />
      <div className="w-full flex  sm:ml-12 lg:ml-0 justify-end sm:justify-center md:justify-end lg:justify-start  ">
        <div style={{backgroundImage: "linear-gradient(to right, #51127f,#e20c8d)"}} className="flex justify-between items-center w-[70%] lg:ml-0 rounded-[25px] h-[2.8rem]">
          <div className="search-bar">
            <input id="search-game" type="text" placeholder={t("search_games")} />
          </div>
          <div className="lang-menu hidden lg:block ">
            <div className="selected-lang">English</div>
            <ul>
              <li>
                <button className="en" onClick={() => i18next.changeLanguage("en")} disabled={"en" === currentLanguageCode}>
                  English
                </button>
              </li>
              <li>
                <button className="es" onClick={() => i18next.changeLanguage("es")} disabled={"es" === currentLanguageCode}>
                  Spanish
                </button>
              </li>
            </ul>
          </div>
          <div className="connect-wallet">
            <span className="volume hidden lg:inline">{t("volume")} $123,456</span>
            {showSelector && <WalletSelector
              content={<>
                <button onClick={connectNautilus} className="nautilus-button">Nautilus</button>
                <br/>
                <button onClick={connectSafew} className="safew-button">SAFEW</button>
              </>}
              handleClose={toggleSelector}/>}
            <button onClick={toggleSelector} className="connect-wallet-button">
              <Link to="#" onClick={handleWalletTrue} >
                <img className="connect-wallet-icon" src={wallet} />
                <span className="wallet-balance" style={{}}>{balanceValue()}</span>
                <span className="connect-text">{t("connect wallet")}</span>
                {walletHover && <WalletHover /> }
              </Link>
            </button>
            <button onClick={swapTokens} className="connect-wallet-button">
              <Link to="#">
                <span className="connect-text">{t("swap")}</span>
              </Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

/*
<div className="connect-wallet">
  <button onClick={disconnectWallet} className="connect-wallet-button">
    <p className="connect-text">disconnect</p>
  </button>
</div>
*/

export default Header;
//export const WalletContext = createContext(Header.ergoWallet);