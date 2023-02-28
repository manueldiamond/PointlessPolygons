import {configureStore} from '@reduxjs/toolkit'
import countReducer from './slice'
export default configureStore({
  reducer:{
    count:countReducer,
  },
})