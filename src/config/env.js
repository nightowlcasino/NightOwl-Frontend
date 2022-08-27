/* Environment variables and default values

NOTE:
  Only env variables that start with REACT_APP... or NODE_ENV and PUBLIC_URL will make it into
  the app process.env

*/

const node_env = process.env.REACT_APP_ENV || process.env.NODE_ENV || "default"

const environments = {
  local: {
    natsEndpoint: process.env.REACT_APP_NATS_ENDPOINT || "ws://127.0.0.1:9222",
    rngEndpoint: process.env.REACT_APP_RNG_ENDPOINT || "http://127.0.0.1:8089/api/v1/test/random-number",
  },
  development: {
    natsEndpoint: process.env.REACT_APP_NATS_ENDPOINT || "wss://nats.nightowlcasino.io",
    rngEndpoint: process.env.REACT_APP_RNG_ENDPOINT || "https://dev.nightowlcasino.io/api/v1/random-number",
  },
  staging: {
    natsEndpoint: process.env.REACT_APP_NATS_ENDPOINT || "wss://nats.nightowlcasino.io",
    rngEndpoint: process.env.REACT_APP_RNG_ENDPOINT || "https://staging.nightowlcasino.io/api/v1/random-number",
  },
  default: {
    natsEndpoint: process.env.REACT_APP_NATS_ENDPOINT || "wss://nats.nightowlcasino.io",
    rngEndpoint: process.env.REACT_APP_RNG_ENDPOINT || "https://dev.nightowlcasino.io/api/v1/random-number",
  }
}

export const env = environments[node_env]