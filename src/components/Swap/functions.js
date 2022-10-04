import {Explorer, Transaction} from '@coinbarn/ergo-ts';

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