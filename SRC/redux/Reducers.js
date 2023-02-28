import {combineReducers} from 'redux'
import {actions} from './Actions'

function points(state=0,action){
  switch(action.type){
    case actions.ADD_POINTS :
      return state+action.payload
    default:
      return state;
  }
}
function level(state=0,action){
   switch(action.type){
    case actions.SET_LEVEL:
      return action.level
    default:
      return state
    }
}
function Alert(state={},action){
  switch(action.type){
    case actions.NEW_ALERT:
      return {...action,type:null,time:Date.now(),}
    default:
      return state 
  }
}
function alerts(state=[],action){
  switch(action.type){
    case actions.NEW_ALERT:
      return [...state,Alert(state,action)]
    case actions.CLR_ALERT:
      return state.filter(a=>a.id!==action.id)
    default:
      return state
  }
}
/*function createReducer(cases={}){
  return (state,action)={
    cases.keys().forEach((c)=>{
      if(action.type===c)return cases[c](state,action)
    }
    return state
  }
}*/

export function poly(state={},action){
  switch(action.type){
    case actions.ADD_POLY:
      return {...action,type:null,time: Date.now(),elapsed:0}
    case actions.EDIT_POLY:
      return {...state,...action.edits}
    
    default:
      return state;
  }
}
function polys(state=[], action){
  
  switch(action.type){
    case actions.ADD_POLY:
      return [...state,poly({},action)]
    case actions.REMOVE_POLY:
      return state.filter((poly)=>poly.id!==action.id)
      
    case actions.EDIT_POLY:
      return state.map(ply=>ply.id===action.id?poly(ply,action):ply)
    default:
      return state
  }
}
const reducer = combineReducers({points,polys,alerts,level})
export default reducer