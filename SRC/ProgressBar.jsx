import React from 'react'
export default function ProgressBar({value=0,maxValue=100,width=150,finished,allowOver=false,customText='',under='',over=''}){
 
  const progressf=(value/maxValue)
  const progress=Math.ceil(100*progressf) 
  const progWidth=Math.ceil(width*progressf)
  const height= '15px'
  //console.log(progressf)
  React.useEffect(
    ()=>{value>=maxValue&&finished()}
   ,[value>=maxValue])
   
  const bar={
    width:`${width}px`,
    height,
    borderRadius: '7.5px',
    margin:'auto auto',
    backgroundColor:under,
    
  }
  const prog={
    top:0,
    left:0,
    width:`${progWidth}px`,
    height,
    backgroundColor:over,
  }
  return(
    <div style={bar} className='progress-bar  relative flex clip lgray items-center'>
      <span className='progress-over abs  gray' style={prog}></span>
      <h6 className='progress-value abs'>{customText&&customText}{(!allowOver && progress>100)?'100':progress}%</h6>

    </div>
  )
}