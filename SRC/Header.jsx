
import M from './Logo'
import {useSelector,useDispatch} from 'react-redux'
import React from 'react'
export default function Header({notify}){
   
   const points=useSelector(state=>state.points);
   const d=useDispatch()
   const clk=()=>notify(d)(`points is ${points}`)
   const pointsr=React.useRef()
   const [tmpPoints,setTempPoints]=React.useState( points)
   const diff=React.useRef();
   const prevPoints=React.useRef();
   React.useEffect(
     ()=>{
       diff.current=points - tmpPoints
       pointsr.current.classList.remove('biggn')
       pointsr.current.classList.remove('redd')
       void pointsr.current.offsetWidth
       pointsr.current.classList.add(tmpPoints>points?'redd':'biggn')
       setTempPoints(points)
       
      
     }
     ,[points])
   
  return(
    <header>
      <div onClick={clk} className='header flex jc-space items-center'>
       <M/>
       <h1>POLYGONS</h1>
       <div className='flex-col items-center jc-center'>
        <h3 style={{margin:'5px'}}  className=''>POINTS:{points}</h3>
        <h3 style={{margin:'0'}} ref={pointsr}  className='mg-auto biggn'>{diff.current}</h3>
        
       </div>
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </header>
  )
}