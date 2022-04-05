import React, {useState, useEffect} from "react";

const [walletConnected, setWalletConnected] = useState(false)
const [unusedAddress, setUnusedAddress] = useState("")
const [ergBalance, setErgBalance] = useState(0)
const [sigUSDBalance, setSigUSDBalance] = useState(0)
const [owlBalance, setOwlBalance] = useState(0)
const [ergoWallet, setErgoWallet] = useState()

const connectNautilus = () => {
  window.ergoConnector.nautilus.isConnected().then(connected => {
    if (connected) {
      // Already connected
      console.log(`nautilus is connected`)
      //toggleSelector()
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
      //toggleSelector()
    }
  })
}

export default ergoWallet;
export default connectNautilus;