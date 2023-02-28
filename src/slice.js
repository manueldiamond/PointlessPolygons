import {createSlice} from '@reduxjs/toolkit'

export const slice=createSlice({
  name: 'count',
  initialState:{
    value: 0,
  },
  reducers:{
    increment:(state)=>{state.value+=1},
    decrement:(state)=>{state.value-=1},
    incAmt:(state,action)=>{state.value+=action.payload},
  },
})

export const {increment,decrement,incAmt}=slice.actions
export default slice.reducer