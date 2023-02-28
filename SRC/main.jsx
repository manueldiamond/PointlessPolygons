//Redux..
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import {Provider} from 'react-redux'
import store from './redux/Store'

const Store=store()
Store.subscribe(()=>localStorage['redux-state']=JSON.stringify(Store.getState()))
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={Store}>
      <App/>
    </Provider>
  </React.StrictMode>
 )