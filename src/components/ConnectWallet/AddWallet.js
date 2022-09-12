import { useContext, useEffect, useState, Fragment } from "react";
import axios from "axios";
import WalletContext from "./WalletContext";
import ergoWalletIcon from "../../assets/Elements/ergo-wallet-black.png";
import nautilusIcon from "../../assets/Elements/nautilus.jpg";
import safewIcon from "../../assets/Elements/safew_icon_32.png";
import WalletHover from "../Header/WalletHover/WalletHover";
import wallet from "../../assets/Elements/Design-2_0026_Layer-17.png";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Menu, Transition } from "@headlessui/react";
import { ArchiveIcon } from "@heroicons/react/solid";
import "../Header/WalletHover/WalletHover.css";
import {
  ThreeDots,
} from "react-loader-spinner";
import StateContext from "../Context";

const backend = process.env.BACKEND_FQDN || "localhost";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const NANOERG_TO_ERG = 1000000000;
const TOKENID_NO_TEST =
  "473041c7e13b5f5947640f79f00d3c5df22fad4841191260350bb8c526f9851f";
const TOKENID_FAKE_SIGUSD =
  "96c402c0e658909aa03f534006124f0e43725c467dbc8dea39680d0861892de5";

const TOKENID_SIGRSV =
  "003bd19d0187117f130b62e1bcab0939929ff5c7709f843c5c4dd158949285d0";
const TOKENID_SIGUSD =
  "03faf2cb329f2e90d6d23b58d91bbb6c046aa143261cc21f52fbe2824bfcbf04";
const TOKENID_NETA =
  "472c3d4ecaa08fb7392ff041ee2e6af75f4a558810a74b28600549d5392810e8";
const TOKENID_ERGOPAD =
  "d71693c49a84fbbecd4908c94813b46514b18b67a99952dc1e6e4791556de413";
const TOKENID_PAIDEIA =
  "1fd6e032e8476c4aa54c18c1a308dce83940e8f4a28f576440513ed7326ad489";

function AddWallet(props) {
  const { ergoWallet, setErgoWallet, defaultAddress, setDefaultAddress } =
    useContext(StateContext);
  const [ergBalance, setErgBalance] = useState(0);
  const [sigUSDBalance, setSigUSDBalance] = useState(0);
  const [sigRSVBalance, setSigRSVBalance] = useState(0);
  const [ergopadBalance, setErgopadBalance] = useState(0);
  const [netaBalance, setNetaBalance] = useState(0);
  const [paideiaBalance, setPaideiaBalance] = useState(0);
  const [owlBalance, setOwlBalance] = useState(0);

  const [walletConnected, setWalletConnected] = useState(false);
  const [loadingWalletConnection, setLoadingWalletConnection] = useState(false);
  const [showSelector, setShowSelector] = useState(false);
  const [walletHover, setWalletHover] = useState(false);

  window.addEventListener("ergo_wallet_disconnected", () => {
    disconnectWallet();
  });

  useEffect(() => {
    const checkWallet = localStorage.getItem("walletConnected");
    if (checkWallet === "true") {
      const whichWallet = localStorage.getItem("walletUsed");
      if (whichWallet === "nautilus") {
        setDefaultAddress();
        window.ergoConnector.nautilus.connect().then((access_granted) => {
          if (access_granted) {
            setWalletConnected(true);
            window.ergoConnector.nautilus.getContext().then((context) => {
              setErgoWallet(context);
            });
          } else {
            setWalletConnected(false);
          }
        });
        setDefaultAddress(localStorage.getItem("walletAddress"));
        setWalletConnected(true);
      }
      if (whichWallet === "safew") {
        setDefaultAddress();
        window.ergoConnector.safew.connect().then((access_granted) => {
          if (access_granted) {
            setWalletConnected(true);
            window.ergoConnector.safew.getContext().then((context) => {
              setErgoWallet(context);
            });
          } else {
            setWalletConnected(false);
          }
        });
        setDefaultAddress(localStorage.getItem("walletAddress"));
        setWalletConnected(true);
      }
    }
  }, []);

  useEffect(() => {
    if (typeof ergoWallet !== "undefined") {
      // get ERG balance
      ergoWallet.get_balance().then(function (balance) {
        setErgBalance(balance / NANOERG_TO_ERG);
      });
      // get OWL balance
      ergoWallet.get_balance(TOKENID_NO_TEST).then(function (balance) {
        setOwlBalance(balance);
      });
      // get SigUSD balance
      ergoWallet.get_balance(TOKENID_SIGUSD).then(function (balance) {
        setSigUSDBalance(balance / 100);
      });

      // get SigRSV balance
      ergoWallet.get_balance(TOKENID_SIGRSV).then(function (balance) {
        setSigRSVBalance(balance);
      });

      // get Ergopad balance
      ergoWallet.get_balance(TOKENID_ERGOPAD).then(function (balance) {
        setErgopadBalance(balance / 100);
      });

      // get Neta balance
      ergoWallet.get_balance(TOKENID_NETA).then(function (balance) {
        setNetaBalance(balance / 1000000);
      });

      // get Paideia balance
      ergoWallet.get_balance(TOKENID_PAIDEIA).then(function (balance) {
        setPaideiaBalance(balance / 10000);
      });

      //get Address
      ergoWallet.get_change_address().then(function (address) {
        localStorage.setItem("walletAddress", address);
        setDefaultAddress(truncate(address, 12, "..."));
        localStorage.setItem("walletConnected", "true");
      });
      setLoadingWalletConnection(false);
    }
  }, [ergoWallet]);

  const truncate = (str, len, sep) => {
    if (str.length < len) {
      return str;
    } else {
      return (
        str.substring(0, parseInt(len / 2)) +
        sep +
        str.substring(str.length - parseInt(len / 2), str.length)
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
              if (!txId) 
              {
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

  function disconnectWallet() {
    if (typeof window.ergo_request_read_access === "undefined") {
    } else {
      if (walletConnected) {
        let walletUsed = localStorage.getItem("walletUsed");
        console.log("im disconnecting from " + walletUsed);
        setWalletConnected(false);
        setErgoWallet();
        setDefaultAddress("");
        localStorage.removeItem("walletAddress");
        localStorage.removeItem("walletConnected");
        localStorage.removeItem("walletUsed");
        window.ergoConnector[walletUsed].disconnect();
      }
    }
  }

  const toggleSelector = () => {
    if (!walletConnected) setShowSelector(!showSelector);
  };

  const handleWalletTrue = () => {
    if (walletConnected) setWalletHover((prev) => !prev);
    else {
      setShowSelector((prev) => !prev);
    }
  };

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
    setLoadingWalletConnection(true);
    if (!window.ergoConnector) {
      return;
    }

    window.ergoConnector.nautilus.isConnected().then((connected) => {
      if (!walletConnected) {
        window.ergoConnector.nautilus
          .connect({ createErgoObject: false })
          .then((access_granted) => {
            if (access_granted) {
              setWalletConnected(true);
              window.ergoConnector.nautilus.getContext().then((context) => {
                localStorage.setItem("walletUsed", "nautilus");
                setErgoWallet(context);
              });
            } else {
              setWalletConnected(false);
            }
          });
        toggleSelector();
      } else {
        // Already connected
        toggleSelector();
        return;
      }
    });
  };

  const connectSafew = () => {
    setLoadingWalletConnection(true);
    if (!window.ergoConnector) {
      return;
    }

    if (!window.ergoConnector.safew.isConnected()) {
      // we aren't connected
      window.ergoConnector.safew.connect().then((access_granted) => {
        if (access_granted) {
          setWalletConnected(true);
          window.ergoConnector.safew.getContext().then((context) => {
            localStorage.setItem("walletUsed", "safew");
            setErgoWallet(context);
          });
        } else {
          setWalletConnected(false);
        }
      });
    } else {
      window.ergoConnector.safew.isConnected().then((res) => {
        if (!res) {
          window.ergoConnector.safew.connect().then((access_granted) => {
            if (access_granted) {
              setWalletConnected(true);
              window.ergoConnector.safew.getContext().then((context) => {
                localStorage.setItem("walletUsed", "safew");
                setErgoWallet(context);
              });
            } else {
              setWalletConnected(false);
            }
          });
        }
      });
    }
    toggleSelector();
  };


  return (
    <>
      {showSelector && (
        <Menu as="div" className="mainDiv">
          <Transition
            show={true}
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <Menu.Items
              className="mainMenuItem"
              style={{ left: "10px", marginTop: "3.5rem" }}
            >
              <div style={{ fontWeight: "bold" }}>
                <Menu.Item onClick={connectNautilus}>
                  {({ active }) => (
                    <a
                      href="#"
                      className={classNames(
                        active ? "item1" : "item2",
                        "item3"
                      )}
                    >
                      <img
                        src={nautilusIcon}
                        style={{ height: "30px", marginRight: "3rem" }}
                      />
                      <span style={{ marginLeft: "5px" }}>Nautilus</span>
                    </a>
                  )}
                </Menu.Item>
                <Menu.Item onClick={connectSafew}>
                  {({ active }) => (
                    <a
                      href="#"
                      className={classNames(
                        active ? "item1" : "item2",
                        "item3"
                      )}
                    >
                      <img
                        src={safewIcon}
                        style={{
                          height: "25px",
                          marginRight: "3.5rem",
                          marginLeft: "0.2rem",
                        }}
                      />
                      SAFEW
                    </a>
                  )}
                </Menu.Item>
              </div>
            </Menu.Items>
          </Transition>
        </Menu>
      )}

      <div id="header-wallet-wrapper" onClick={handleWalletTrue}>
        <div id="header-wallet">
          {!walletConnected && !loadingWalletConnection && (
            <img src={ergoWalletIcon} id="header-wallet-image" />
          )}
          <div id="wallet-connect">
            <span>
              {walletConnected ? (
                <span
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <p
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      alignItems: "center",
                      fontWeight: "bold",
                      marginRight: "20px",
                    }}
                  >
                    {owlBalance}
                    <span>OWL</span>
                  </p>
                  <span
                    style={{
                      display: "flex",
                      justifyContent: "end",
                      alignItems: "center",
                      gap: "3px",
                    }}
                  >
                    <img
                      src={
                        localStorage.getItem("walletUsed") == "nautilus"
                          ? nautilusIcon
                          : localStorage.getItem("walletUsed") == "safew"
                          ? safewIcon
                          : null
                      }
                      style={{ height: "20px" }}
                    />
                    <p>{defaultAddress}</p>
                  </span>
                </span>
              ) : loadingWalletConnection ? (
                <ThreeDots
                  height={80}
                  width={35}
                  radius="9"
                  color="#8e0081"
                  ariaLabel="three-dots-loading"
                />
              ) : (
                <span style={{ color: "black", fontWeight: 550 }}>
                  Connect Wallet
                </span>
              )}
            </span>
          </div>
          {walletHover && walletConnected && (
            <WalletHover
              disconnect={disconnectWallet}
              owlBalance={owlBalance}
              ergBalance={ergBalance}
              sigRSVBalance={sigRSVBalance}
              netaBalance={netaBalance}
              ergopadBalance={ergopadBalance}
              paideiaBalance={paideiaBalance}
            />
          )}
        </div>
      </div>
    </>
  );
}

export default AddWallet;
