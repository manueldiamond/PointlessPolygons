import {useSelector,useDispatch} from 'react-redux'
import {increment,decrement,incAmt} from './slice'

export default function Counter(){
  const count=useSelector(state=>state.count.value)
  const dispatch=useDispatch()
  function inc(){
    dispatch(increment())
    console.log("inc count: ",count)
  }
  function dec(){
    dispatch(decrement())
    console.log("dec count: ",count)
  }
  return(
    <div>
      <div className='flex counter'>
        <button onClick={()=>dispatch(incAmt(10))}>+10</button>
        <button onClick={inc}> + </button>
          <h1 className='glow'>{count}</h1>
        <button onClick={dec}> - </button>
        <button onClick={()=>dispatch(incAmt(-10))}>-10</button>
      </div>
      
      <div className='flex'>
      </div>
    </div>
  )
}