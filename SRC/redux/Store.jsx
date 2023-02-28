import {createStore} from 'redux'
import {actions,addPoly} from './Actions'
import reducer,{poly} from './Reducers'


const initialState={
  points:0,
  polys:[poly({},addPoly(3))],
  alerts:[],
  level:0
}

export default function (){

  return createStore(reducer,localStorage['redux-state']?JSON.parse(localStorage['redux-state']):initialState)
}