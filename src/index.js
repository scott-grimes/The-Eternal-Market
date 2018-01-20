import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import { Provider } from 'react-redux'
import { syncHistoryWithStore } from 'react-router-redux'
import getWeb3 from './util/getWeb3'

// Layouts
import App from './App'
import About from './layouts/About'
import Account from './layouts/Account'
import Buy from './layouts/Buy'
import CreateListing from './layouts/CreateListing'
import Listing from './layouts/Listing'
import Sell from './layouts/Sell'
import User from './layouts/User'
import Market from './js/Market' 

// Redux Store
import store from './store'

// Initialize react-router-redux.
const history = syncHistoryWithStore(browserHistory, store)

// Initialize web3 and set in Redux.
getWeb3
.then(results => {
  console.log('Web3 initialized!')
})
.catch(() => {
  console.log('Error in web3 initialization.')
})

ReactDOM.render((
    <Provider store={store}>
      <Router history={history}>
        <Route path="/" component={App}>
          <IndexRoute component={Buy} />
          <Route path="about" component={About} />
          <Route path="account" component={Account} />
          <Route path="buy" component={Buy} />
          <Route path="createListing" component={CreateListing} />
          <Route path="listing" component={Listing} />
          <Route path="sell" component={Sell} />
          <Route path="user" component={User} />
        </Route>
      </Router>
    </Provider>
  ),
  document.getElementById('root')
)
