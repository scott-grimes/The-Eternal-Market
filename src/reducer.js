import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import web3Reducer from './reducers/web3Reducer'
import ethPriceReducer from './reducers/ethPriceReducer'

const reducer = combineReducers({
  routing: routerReducer,
  web3: web3Reducer,
  ethPrice: ethPriceReducer
})

export default reducer
