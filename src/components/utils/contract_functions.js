import {Explorer, Transaction} from '@coinbarn/ergo-ts';
import axios from 'axios';
// import dotenv from "dotenv";

// dotenv.config()
const nodeUser = process.env.REACT_APP_NODE_USER || ""
const nodePass = process.env.REACT_APP_NODE_PASS || ""


export const CONTRACT_BUY_OWL_ADDRESS = "N5YCek6dZq8hQvMMb1istLmKkW5ovBjJLKSk7EdTwQuPpfJJXXGCW486TvjYe7h23Ej1eneG61d37upWJUVoaixPJq6CoP43GjSdEhr5THK2pn8x2ZFf3eVErhb4Qk5xFdCykPZ4MvmMH5GE6FMXwgtn4b2v2oSQGaeQ4i1Fv5Bf4vMEq4aqAFiL7Z5YHMX1zZawet2JCfYQFEyD1Nt9tXCwVTWWvptFpLGByUJ5sQLKvLRU7a23qaTYaDTKMhrzy97h"
export const CONTRACT_SELL_OWL_ADDRESS = "N5YCek6dZq8hQvMMazRcfLnmd1pMVzHq8GkDUg8Jn3KFa3k7M53PjQSd2yBc1KTNRJVko891THPvg9wZ3ryBcWNV7PGbRuUJ2S4ojvQ7E4FegZ8jBh6tsWMQoSxTfkN7ynLpFCUEnx5bdRFgxdA3vzbsHiPg3sgvpN2MCWvsoRWQcxdF4FvNo4NtiTbCsZcu9SLx9gS3bvdmX6d7jo8SAgAQQ2CEBKamCbbHmWAB6cwSXm72RPaFsC1uCWNBWHzmit5b"
export const SIGUSD_TOKEN_ID = "03faf2cb329f2e90d6d23b58d91bbb6c046aa143261cc21f52fbe2824bfcbf04"
export const CHANGE_BOX_ASSET_LIMIT = 100


const explorer = Explorer.mainnet;
const explorerApi = 'https://api.ergoplatform.com/api/v0'
const explorerApiV1 = 'https://api.ergoplatform.com/api/v1'
export const nodeUrl = "https://node.ergo.watch";

function getRequest(url, api = explorerApi) {
    return get(api + url).then(res => res.json())
}

export async function currentBlock() {
    return getRequest('/blocks?limit=1')
        .then(res => {
            return res.items[0]
        })
}

export async function get(url, apiKey = '') {
    return await fetch(url, {
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            api_key: apiKey,
        },
    }).catch((error)=> {
        console.log(error)
    });;
}

const headers = {
    'mode': 'cors',
    'Accept': 'application/json',
    'Content-Type': 'application/json',

    // 'Access-Control-Allow-Origin': '*',
    'Authorization': nodeUser !== "" && nodePass !== "" ? 'Basic ' + nodeUser + ':' + nodePass : '',
}

export async function encodeNum(num) {
    // const res = await axios.post(`/api/v1/ergo/encode-num`, 
    //     {
    //         number: num,
    //     },
    //     {
    //         headers: {
    //             Accept: 'application/json',
    //             'Content-Type': 'application/json',
    //             'Access-Control-Allow-Origin': '*',
    //             'Access-Control-Allow-Headers': '*',
    //             'Access-Control-Allow-Credentials': 'true',

    //             'Authorization': nodeUser !== "" && nodePass !== "" ? 'Basic ' + btoa(nodeUser + ':' + nodePass) : '',
    //         }
    //     }
    // );

    const res = await fetch("/api/v1/ergo/encode-num", {
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
        mode: 'cors', // no-cors, *cors, same-origin
        // cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        // credentials: 'same-origin', // include, *same-origin, omit
        headers: headers,
        // redirect: 'follow', // manual, *follow, error
        // referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
        body: JSON.stringify({number: num}) // body data type must match "Content-Type" header
      });

    return res;
}

export async function encodeHex(hex) {
    // const res = await axios.post(`https://dev.nightowlcasino.io/api/v1/ergo/encode-hex`, 
    //     {
    //         reg: hex,
    //     },
    //     {
    //         headers: {
    //             // Accept: 'application/json',
    //             // 'Content-Type': 'application/json',
    //             'Access-Control-Allow-Origin': '*',
    //             'Access-Control-Allow-Headers': '*',
    //             'Access-Control-Allow-Credentials': 'true',
    
    //             'Authorization': nodeUser !== "" && nodePass !== "" ? 'Basic ' + btoa(nodeUser + ':' + nodePass) : '',

    //         }
    //     }
    // );

    const res = await fetch("/api/v1/ergo/encode-hex", {
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
        mode: 'cors', // no-cors, *cors, same-origin
        // cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        // credentials: 'same-origin', // include, *same-origin, omit
        headers: headers,
        // redirect: 'follow', // manual, *follow, error
        // referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
        body: JSON.stringify({reg: hex}) // body data type must match "Content-Type" header
      });
    

    return res;
}

export async function encodeBase16(address) {
    // const res = await axios.post(`/api/v1/ergo/ergo-tree-base16`, {
    //     addr: address,
    // },
    // {
    //     headers: {
    //         'Access-Control-Allow-Origin': '*',

    //         'Authorization': nodeUser !== "" && nodePass !== "" ? 'Basic ' + nodeUser + ':' + nodePass : '',

    //     }
    // }
    // )

    const res = await fetch("/api/v1/ergo/ergo-tree-base16", {
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
        mode: 'cors', // no-cors, *cors, same-origin
        // cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        // credentials: 'same-origin', // include, *same-origin, omit
        headers: headers,
        // redirect: 'follow', // manual, *follow, error
        // referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
        body: JSON.stringify({addr: address}) // body data type must match "Content-Type" header
      });
    

    return res;
}







// export async function buy_owl(amount){
//     // Eject if wallet isnt connected
//     if(!isWalletSaved()) {
//         showMsg('Connect your wallet first.', true);
//         return
//     }

//     // Consts
//     const wasm = await ergolib
//     const p2s = swapBuyProxyAddr
//     const user = await getConnectorAddress();
//     const currencyId = sigUSDId

//     const requiredErg = txFee + min_value + txFee
//     let need = {ERG: requiredErg}
//     need[currencyId] = parseInt(amount)
//     let have = JSON.parse(JSON.stringify(need))
//     let ins = []
//     const keys = Object.keys(have)


//     for (let i = 0; i < keys.length; i++) {
//         if (have[keys[i]] <= 0) continue
//         const curIns = await ergo.get_utxos(have[keys[i]].toString(), keys[i]);
//         if (curIns !== undefined) {
//             curIns.forEach(bx => {
//                 have['ERG'] -= parseInt(bx.value)
//                 bx.assets.forEach(ass => {
//                     if (!Object.keys(have).includes(ass.tokenId)) have[ass.tokenId] = 0
//                     have[ass.tokenId] -= parseInt(ass.amount)
//                 })
//             })
//             ins = ins.concat(curIns)
//         }
//     }
//     if (keys.filter(key => have[key] > 0).length > 0) {
//         showMsg('Not enough balance in the wallet! See FAQ for more info.', true)
//         return
//     }
//     // -----------Output boxes--------------
//     const blockHeight = await currentBlock();

//     let registers = {
//         R4: await encodeHex(new Address(user).ergoTree),
//         R5: await encodeNum((amount).toString()),
//         R6: await encodeNum((blockHeight.height + 20).toString()),
//         R7: await encodeNum((txFee).toString())
//     };

//     const proxyBox = {
//         value: (min_value + txFee).toString(),
//         ergoTree: wasm.Address.from_mainnet_str(p2s).to_ergo_tree().to_base16_bytes(), // p2s to ergotree (can do through node or wasm)
//         assets: [
//             {'tokenId': sigUSDId, 'amount': amount}
//         ],
//         additionalRegisters: registers,
//         creationHeight: blockHeight.height
//     }

//     const changeBox = {
//         value: (-have['ERG']).toString(),
//         ergoTree: wasm.Address.from_mainnet_str(minter).to_ergo_tree().to_base16_bytes(),
//         assets: Object.keys(have).filter(key => key !== 'ERG')
//             .filter(key => have[key] < 0)
//             .map(key => {
//                 return {
//                     tokenId: key,
//                     amount: (-have[key]).toString()
//                 }
//             }),
//         additionalRegisters: {},
//         creationHeight: blockHeight.height
//     }

//     if (changeBox.assets.length > CHANGE_BOX_ASSET_LIMIT) {

//         showMsg('Too many NFTs in input boxes to form single change box. Please de-consolidate some UTXOs. Contact the team on discord for more information.', true)
//         return

//     } else {
//         const feeBox = {
//             value: txFee.toString(),
//             creationHeight: blockHeight.height,
//             ergoTree: "1005040004000e36100204a00b08cd0279be667ef9dcbbac55a06295ce870b07029bfcdb2dce28d959f2815b16f81798ea02d192a39a8cc7a701730073011001020402d19683030193a38cc7b2a57300000193c2b2a57301007473027303830108cdeeac93b1a57304",
//             assets: [],
//             additionalRegisters: {},
//         }

//         let outputs = [proxyBox, changeBox, feeBox]

//         const transaction_to_sign = {
//             inputs: ins.map(curIn => {
//                 return {
//                     ...curIn,
//                     extension: {}
//                 }
//             }),
//             outputs: outputs,
//             dataInputs: [],
//             fee: txFee
//         }
//         console.log("transaction_to_sign", transaction_to_sign)
//         return await signTx(transaction_to_sign)
//     }

// }
