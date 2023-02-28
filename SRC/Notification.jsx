
export default function Notification ({alerts,clr=id=>id}){
  return(
    <div className='flex'>
     <div className='fixed alert gray' style={{
      bottom:'0',
      width:'100%',}}>
       {alerts.map(a=><Alert {...a}/>)}
     </div>
    </div>
    )
}
function Alert({message}){
  return(
    <p key={id} className='center-text' style={{
      padding:'8px',
    }}>{message}</p>
    )
}