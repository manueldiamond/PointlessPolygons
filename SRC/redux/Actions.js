import {nanoid} from 'nanoid'
export const actions = {
  ADD_POINTS:'ADD_POINTS',
  ADD_POLY:'ADD_POLY',
  REMOVE_POLY: 'REMOVE_POLY',
  CLR_ALERT:'CLR_ALERT',
  NEW_ALERT:'NEW_ALERT',
  EDIT_POLY:'EDIT_POLY',
  SET_LEVEL:'SET_LEVEL',
}
export function setLevel(level){
  return {type:actions.SET_LEVEL,level}
}
export function addPoints (ADD_POINTS){
  return {type:actions.ADD_POINTS , payload:ADD_POINTS }
}

export function addPoly(sides=3){
  return {type:actions.ADD_POLY,sides,id:nanoid()}
}

export function editPoly(id,edits){
  return {type:actions.EDIT_POLY,id,edits}
}

export function removePoly(id){
  return {type:actions.REMOVE_POLY,id}
}

export function clrAlert(id){
  return {type:actions.CLR_ALERT,id}
}

export function newAlert(message){
  return {type:actions.NEW_ALERT,message}
}
