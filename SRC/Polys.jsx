import Poly from './Poly'
import {useEffect,useRef} from 'react'
import Add from './AddPolygon'

import {useSelector,useDispatch} from 'react-redux'
import {addPoly,clrAlert,newAlert,editPoly,addPoints,removePoly} from   './redux/Actions'
import Notification from './Notification'

const useInterval=(func,delay)=>{
    const funcRef=useRef();
    useEffect(()=>{
      funcRef.current=func
    },[func]);
    useEffect(()=>{
      const interval = setInterval(()=>funcRef.current(),delay)
      return ()=>clearInterval(interval)
    },[delay])
  }
export default function Polygons(){
  
  const polys=useSelector(state=>state.polys)
  const totalPoints=useSelector(state=>state.points)
  const disp=useDispatch()
  
  const edit=(id,stuff)=>disp(editPoly(id,stuff))
  
  const addPolyCost=polys.length*100+150
  
  const canPay=p=> (totalPoints>=Math.abs(p))
  const points=p=>{
    if (p<0)   
    if (canPay(p)){
      disp(addPoints(p))
      return true
    }
    else return false
    else
      disp(addPoints(p))
  }
  const add=()=>(points(-addPolyCost))&&disp(addPoly())
  const remove=id=>{
    if (polys.length>1)
     disp(removePoly(id))
  }
  const elapsedTime=time=> (Date.now()-time)
 
 
  const update=()=>polys.forEach(poly=>updatePoly(poly))

  
  const updatePoly=poly=>{
    edit(poly.id,{elapsed:elapsedTime(poly.time)})
  }
    useInterval(update,200)
  
  //useEffect(()=>{
    //clearInterva(upd);
    //setInterval(upd,1000);
 //  return () clearInterval(interval)
 // }, [])
  
  
  return (
    <div>
      <div className='flex-wrap'>
       {polys.map( (poly)=>
         (<Poly key={poly.id} edit={(stuff)=>edit(poly.id,stuff)} addPoints={points} canPay={canPay} remove={()=>remove(poly.id)} {...poly} />)
       ) }
       </div>
       {polys.length<8&&
        <div style={{width:'300px'}}className='card flex-col jc-center llgray rounded mg-auto' onClick={add}>
          <h1 className='mg-auto'>+</h1> 
          <strong className='mg-auto' style ={{color:totalPoints>=addPolyCost?'':'red'}}>COST: {addPolyCost}</strong>
         </div>}
     </div>
    )
}