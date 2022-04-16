import { useContext, useEffect, useState } from "react"
import axios from 'axios';
import WalletContext from "./WalletContext";
import WalletHover from "../Header/WalletHover/WalletHover";
import wallet from "../../assets/Elements/Design-2_0026_Layer-17.png";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const backend = process.env.BACKEND_FQDN || "localhost"

const NANOERG_TO_ERG = 1000000000;
const TOKENID_NO_TEST = "afd0d6cb61e86d15f2a0adc1e7e23df532ba3ff35f8ba88bed16729cae933032";
const TOKENID_FAKE_SIGUSD = "96c402c0e658909aa03f534006124f0e43725c467dbc8dea39680d0861892de5";

function AddWallet(props) {
    const { t } = useTranslation();
    const [ergBalance, setErgBalance] = useState(0)
    const [sigUSDBalance, setSigUSDBalance] = useState(0)
    const [owlBalance, setOwlBalance] = useState(0)
    const [ergoWallet, setErgoWallet] = useState()
    const [walletConnected, setWalletConnected] = useState(false)
    const [defaultAddress, setDefaultAddress] = useState("")
    const [showSelector, setShowSelector] = useState(false)
    const [walletHover, setWalletHover] = useState(false);
	const [readOnlyNautilus, setReadOnlyNautilus] = useState(false);

    const balanceValue = () => {
        return 0
    }

	useEffect(()=>{
		const checkWallet = localStorage.getItem('walletConnected');
		if(checkWallet==='true'){
			window.ergoConnector.nautilus.connect();
			window.addEventListener('ergo_wallet_disconnected', ()=>{
				localStorage.setItem('walletAddress', '');
				localStorage.setItem('walletConnected', 'false');
				setDefaultAddress(false)
				setWalletConnected(false)
				console.log('Wallet Disconnected!!!')
			})
			setDefaultAddress(truncate(localStorage.getItem('walletAddress'), 14, "..."));
			setWalletConnected(true);
		}
	},[])

	useEffect(() => {
		if (typeof ergoWallet !== "undefined") {
			window.addEventListener('ergo_wallet_disconnected', ()=>{
				localStorage.setItem('walletAddress', '');
				localStorage.setItem('walletConnected', 'false');
				setDefaultAddress(false)
				setWalletConnected(false)
				console.log('Wallet Disconnected!!!')
			})
			// get ERG balance
			ergoWallet.get_balance(NANOERG_TO_ERG).then(function (balance) {
				setErgBalance(balance);
				console.log(`ERG: ${balance}`);
			});
			// get SigUSD balance
			ergoWallet.get_balance(TOKENID_FAKE_SIGUSD).then(function (balance) {
				setSigUSDBalance(balance);
				console.log(`SigUSD: ${balance}`);
			});
			// get OWL balance
			ergoWallet.get_balance(TOKENID_NO_TEST).then(function (balance) {
				setOwlBalance(balance);
				console.log(`OWL: ${balance}`);
			});
			ergoWallet.get_change_address().then(function (address) {
				localStorage.setItem('walletAddress', address);
				setDefaultAddress(truncate(address, 14, "..."));
			});
			localStorage.setItem('walletConnected', 'true');
		}
        
	}, [ergoWallet]);

	const truncate = (str, len, sep) => {
		if (str.length < len) {
			return str;
		} else {
			return (
				str.substring(0, parseInt(len / 2)) +
				sep +
				str.substring(str.length - (parseInt(len / 2) + 1), str.length - 1)
			);
		}
	};

	const swapTokens = () => {
		console.log("swap button pressed");

		// get input boxes for each token ID
		const sigUSDAmount = 10;
		const owl = 10;

		ergoWallet
			.get_utxos(sigUSDAmount, TOKENID_FAKE_SIGUSD)
			.then((utxosResponse) => {
				//ergoWallet.get_utxos(owl, TOKENID_NO_TEST).then(utxosResponse => {
				if (utxosResponse.length === 0) {
					console.log("NO UTXOS");
				} else {
					// send token input boxes and token amounts in a POST message to the backend
					axios
						.post(`http://${backend}:8088/api/v1/swap/sigusd`, {
							//axios.post(`http://${backend}:8088/api/v1/swap/owl`, {
							amnt: sigUSDAmount,
							senderAddr: defaultAddress,
							utxos: utxosResponse,
						})
						.then(async function (response) {
							const signedTx = await signTx(response.data);
							console.log("signedTx", signedTx);
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
			});
	};

    const disconnectWallet = () => {
		if (typeof window.ergo_request_read_access === "undefined") {
			console.log("Ergo not found");
		} else {
			if (walletConnected) {
				setWalletConnected(false);
				setErgoWallet();
				setDefaultAddress("");
				setOwlBalance(0);
			}
		}
	};
    
    const toggleSelector = () => {
        if(!walletConnected)setShowSelector(!showSelector);
      }
    
      const handleWalletTrue = () => {
        if(walletConnected)setWalletHover(prev=>!prev);
		else{
			setShowSelector(true)
		}
      }
    
      const handleWalletFalse = () => {
		setWalletHover(false);
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
		window.ergoConnector.nautilus.isConnected().then((connected) => {
			if(!walletConnected){
				console.log('WALLET CREDENTIALS: ', connected)
				console.log('BEFORE CONNECTION')
				window.ergoConnector.nautilus.connect().then((access_granted) => {
					console.log('AFTER CONNECTION')
					if (access_granted) {
						setWalletConnected(true);
						window.ergoConnector.nautilus.getContext().then((context) => {
							console.log('nautilus is connected', context);
							setErgoWallet(context);
						});
					} else {
						setWalletConnected(false);
						console.log("Wallet access denied");
					}
				});
				toggleSelector();
			}
			else {
				// Already connected
				console.log(`nautilus is connected`);
				toggleSelector();
				return;
			}
		});
	};

	const connectSafew = () => {
		if (!window.ergoConnector.safew.isConnected()) {
			// we aren't connected
			window.ergoConnector.safew.connect().then((access_granted) => {
				if (access_granted) {
					setWalletConnected(true);
					window.ergoConnector.safew.getContext().then((context) => {
						setErgoWallet(context);
						console.log(`safew is connected`);
					});
				} else {
					setWalletConnected(false);
					console.log("Wallet access denied");
				}
			});
		}
		toggleSelector();
	};

	const handleReadOnlyNautilus = (input) => {
		setReadOnlyNautilus(input);
	}

	const connectReadOnlyNautilus = () => {
		window.ergo_request_read_access();
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

	return (
        <>
        {showSelector && <div className="popup-box">
			<div className="box">
				<span className="close-icon" onClick={toggleSelector}>
					x
				</span>
				<>
					<button onClick={connectNautilus} className="nautilus-button">
						Nautilus
					</button>
					{/* <input type="text" value={readOnlyNautilus!==false && readOnlyNautilus} onChange={(e)=>handleReadOnlyNautilus(e.target.value)} placeholder="Enter wallet address for read only access" className='w-full rounded-xl px-4 h-full' />
					<button onClick={connectReadOnlyNautilus} className="border border-black rounded-full bg-white w-[20%] mt-2">Connect</button> */}
					<br />
					<button onClick={connectSafew} className="safew-button">
						SAFEW
					</button>
				</>
			</div>
		</div>}
            <button onClick={toggleSelector} className="connect-wallet-button">
              <Link to="#" onClick={handleWalletTrue} >
                {!walletConnected && <img className="connect-wallet-icon" src={wallet} />}
                {/* {walletConnected && <span className="wallet-balance" style={{}}>{`${owlBalance}OWL`}</span>} */}
                <span className="connect-text">{walletConnected ? <>{defaultAddress}</> : t("connect wallet")}</span>
                {walletHover && <WalletHover disconnect={disconnectWallet} owlBalance={owlBalance} sigUSDBalance={sigUSDBalance} ergBalance={ergBalance} /> }
              </Link>
            </button>
            </>
		
	);
}

export default AddWallet;
