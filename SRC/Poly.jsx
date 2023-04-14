
import React from 'react'
import ProgressBar from './ProgressBar'
import {useSelector} from 'react-redux'
export function randi(max,min=0){
  return Math.floor(Math.random()*(max-min))+min
}
const CARD = React.memo(PolyCard)
export default  CARD;
export function PolyCard({sides,time,elapsed, edit, level=0, boost,  remove,state, addPoints, canPay}){
  const [menu,setMenu]=React.useState(false)
  let name = sides<30?'Polygon':'Circle'
    name=polyName(sides)
    
  const progress = elapsed/1000
  const max = (sides, level)=>sides*.5*(10-1.5*level)
  const points = (sides,level)=>Math.round((sides*sides*1.5 + level*(sides/2))*.75) 
  const reset=(extra={})=>edit({time:Date.now(),state:0,...extra})
  
  const upgCost=level*sides*3 + sides*sides*3
  const canUpgrade=canPay(upgCost)
  const canUpgradeShape=level===5
  
  const boostDur=30*1000
  const boostCard=()=>addPoints(-upgCost)&&edit({boost:Date.now()+boostDur})
  const boostElapsed=boost-Date.now()
  const boosted=(boostElapsed)>0
  
  const Ref=React.useRef()
  
  const upgrade=()=>{
    if(addPoints(-upgCost)){
      reset(canUpgradeShape?({sides:sides+1,level:0}):({level:level+1}))
      setMenu(false)
    }
  }
  
  const collect=()=>{ addPoints(points(sides,level)); reset() }
  const finished=()=>  edit({state:1})

 function onclk(){
   if (!menu)
     if(state===1)
       collect()
     else
        setMenu(m=>!m)
  else
    setMenu(false)
 }
 
 function polyName(sides){
   let name ='Polygon'

  switch(sides){
    case 3:
      name='Triangle'
      break
    case 4:
      name='Quad'
      break
    case 5:
      name='Pentagon'
      break
    case 6:
      name='Hexagon'
      break
    case 7: 
      name='Heptagon'
      break
    case 8:
      name='Octagon'
      break
    case 9:
      name="Nonagon"
      break
    case 10:
      name='Decagon'
      break
    case 11:
      name='Un-decagon'
      break
    case 12:
      name='Do-decagon'
      break
    default:
      name=`${sides} sided polygon`
  }
  return name
 }
  return(
    <div  className='flex relative items-center'>
      <div ref={Ref} style={{transition:"filter .2s"}} className={`card grow flex-col items-center wgray rounded relative lbshadow  ${!menu?(state===1?'glowcyan':canUpgrade&&'glow-green'):'blur'}`} onClick={onclk}>
      
      <span style={{display:'flex',fontSize:'2em'}} className='center-text mg-auto'><strong>{name}</strong></span>
      <div style={{width:'80px'}}className='flex-wrap'>
      {new Array(level).fill(<PolyShape style={{background:'gray none'}} className='grow' size={20} sides={6}/>)}
      </div>
      <span style={{fontWeight:'bold',}}><i>LEVEL: {level}</i></span>
      <PolyShape style={{animationDuration:`${sides*2*(2/(level+1))*(boosted? .5:1)}s`}} sides={sides} size={150} className={` relative flex items-center ${state!==1&&'spin'} trans-form`}>
      {state===1&&<h1  style={{color:'white'}} className='color-white flex center-text mg-auto'>+{points(sides,level)}</h1>}
      </PolyShape>
      <ProgressBar value={progress*(boosted?2:1)} maxValue={max(sides,level)} finished={finished}  />
      {boosted&&<ProgressBar value={boostElapsed} maxValue={boostDur} over='cyan' customText='BOOSTED - ' />}
      </div>
      {menu&&<Menu upg={upgrade} del={remove} canUpgrade={canUpgrade} boost={boostCard} canBoost={canPay(upgCost)} close={()=>setMenu(false)}>
        <h3 style={{color:'green',marginBottom:0,}} >UPGRADE {canUpgradeShape?name:level} to {canUpgradeShape?polyName(sides+1):(level+1)}</h3>
        <div style={{color: canUpgrade?'':'red'}}>COST: {upgCost}</div>
      </Menu>}
    </div>
    )
}
function Menu({upg,del,canUpgrade,children,boost,canBoost=false,close}){
  const side='60px'
  const menubt={width:side,height:side,margin:'5px', paddingInline:'5px'}
  const notlastone=useSelector(state=>state.polys.length!==1)

  return (
    
     <div style={{width:'150px'}}onClick={close} className='upgmenu abs mg-auto items-center flex-col'>
        <div className="items-center center-text">
        {children}
        </div>
      <div className='flex-wrap' onClick={close}>
        <div style={{...menubt, color:'', background:canUpgrade?'':'gray'}} className='white  rounded center-text flex items-center fadeup' onClick={upg}>upgrade</div>
        {canBoost&&<div style={{...menubt, color:'', background:'cyan'}} className='white  rounded center-text flex items-center fadeup' onClick={boost}>boost</div>}
        {notlastone&&<div style={{...menubt,background:'#ce5b5b'}} className='white  rounded center-text flex items-center fadeup' onClick={del}>delete</div>}
       </div>
        <div style={{padding:'15px 20px',marginTop:'5px'}}className='white  rounded center-text flex items-center lgray fadeup mg-auto' onClick={close}>close</div>
      </div>
    
    )
}
export function PolyShape({sides,size=100,className,style={}, children}){
  
  const rad=deg=>deg*Math.PI/180
  //const sides=10
  function genenrateRegular(n){
    let poin=[50,0]
    const a=(n-2.0)*180.0/parseFloat(n)
    const side = Math.floor(2*50.0*Math.cos(rad(a/2.0)))
  
    const coords=new Array(n).fill("0% 0%").map((p,i)=>{
      if(i!==0){
        const adjustedAngleDeg=((90-a/2)*(2*(i-1)+1))
        const adjustedAngle=rad(adjustedAngleDeg)
      
        poin=[poin[0]+side*Math.cos(adjustedAngle),poin[1]+side*Math.sin(adjustedAngle)]
      }
      return `${poin[0]}% ${poin[1]}%`
    })
    return {coords: coords.join(","),interiorAngle:a, sideLength:side}
  }
  const sizeStr=`${size}px`
  const polygon=genenrateRegular(sides)
  const polygonStyle={
    background:' linear-gradient(to right bottom,#00ccff,#48daff0b)',
    width:sizeStr,
    height:sizeStr,
    margin:'auto auto',
    clipPath:`polygon(${polygon.coords})`,
  }
  return(
      <div style={{...polygonStyle,...style}} className={className}>{children}</div>
  )
}