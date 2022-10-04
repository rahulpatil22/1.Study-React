import React, { useRef,useState } from 'react'

export default function HOCDemo() {
  return (
    <div>
      <h1>HOComp</h1>
      <HOC cmp={Counter}/>
    </div>
  )
}
function HOC(props)
{
    return <h2><props.cmp /></h2>
}
function Counter()
{
    const[count,setCount]=useState(0)
    return<div>
    <h3>{count}</h3>
    <button onClick={()=>setCount(count+1)}>update</button>
    </div>
}