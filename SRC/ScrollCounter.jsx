import {useReducer} from'react'
export default function ScrollCounter({min
  =0,max=10,onChange=v=>v} ){
  const [value,incVal] = useReducer((inc,val)=>{
    let newVal=val+inc
    if (newVal>max) newVal=max
    else if(newVal<min) newVal=min
    onChange(newVal)
    return newVal
  },min)
  const buttonStyle={
    height:'20px',
    margin:'0px',
  }
  const valStyle={
    fontWeight:'bold',
    fontSize:'2rem',
    margin:'0',
    padding:'0',
    
  }
  return (
    <span className='flex-col center-text'>
      <button style={buttonStyle} onClick={()=>incVal(1)}>+</button>
      <div style={valStyle}>{value}</div>
      <button style={buttonStyle} onClick={()=>incVal(-1)}>-</button>
    </span>
  )
}