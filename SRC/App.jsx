import React from 'react'
import Polys from './Polys'
import Header from './Header'
import {connect} from 'react-redux'
import {addPoly,clrAlert,newAlert,editPoly} from   './redux/Actions'
import Notification from './Notification'
import "./App.css"
function notifier(dispatch){
  return (msg)=>dispatch(newAlert(msg))
}
export default function App(){
  /*const Poly = connect(
        (state)=>({polys:state.polys}),
        (disp)=>({
          add(sides){disp(addPoly(sides))},
          notify:notifier(disp),
          edit(id,stuff){
            disp(editPoly(id,stuff))
          }
        }))
        (Polys)
  const Notifyer=connect(
    (state)=>({alerts:state.alerts}),
    (disp)=>({clr(alrt){disp(clrAlert(alrt))}}))
    (Notification)*/
  return(
    <div>
        <Header notify={notifier}/>
        <Polys/>
    
   </div>
    
  )
}