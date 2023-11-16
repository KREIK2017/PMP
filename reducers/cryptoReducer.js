import { ADD_CRYPTO, REMOVE_CRYPTO } from '../src/actions'

const initialState = {
  cryptos: [
    { name: 'Bitcoin',price: 1500 },
    { name: 'Ethereum',price: 1000 },
    { name: 'Litecoin',price: 500 },
    { name: 'Toncoin',price: 750 },
    { name: 'Tron',price: 444 },
    { name: 'XRP',price: 1200 },
    { name: 'BNB',price: 700 },
    { name: 'Dogecoin',price: 1 },
    ],
  cryptos_cart: []
}

const cryptoReducer = (state = initialState, action) => {
  switch(action.type) {
      case ADD_CRYPTO:
        const index1 = state.cryptos.findIndex(
          crypto => crypto.name === action.crypto.name)
          return {
              ...state,
              cryptos_cart: [...state.cryptos_cart, action.crypto],
              cryptos: [
                ...state.cryptos.slice(0, index1),
                ...state.cryptos.slice(index1 + 1)
              ]
          }
      case REMOVE_CRYPTO:
          const index = state.cryptos_cart.findIndex(
            crypto => crypto.name === action.crypto.name)
            return {
              ...state,
              cryptos: [...state.cryptos, action.crypto],
              cryptos_cart: [
                ...state.cryptos_cart.slice(0, index),
                ...state.cryptos_cart.slice(index + 1)
              ]

          }
      default:
          return state
  }
}

export default cryptoReducer