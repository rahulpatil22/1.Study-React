import React from 'react'

export default function EventHandl() {
    const demoTest=()=>{
        alert("demoTest")
    }
  return (
    <div>
      <h1>EventHandl</h1>
      <button onClick={demoTest}>Click Me</button>
    </div>
  )
}
