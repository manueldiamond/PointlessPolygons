import Counter from "./ScrollCounter"
import {useRef} from 'react'

export default function AppPolyForm({add}){
  function onAdd(e){
    e.preventDefault()
    add(name.current.value)
    name.current.value=''
  }
  const name = useRef();

  return(
    
      <button>50 POINTS</button>
  )
}
