import React from 'react'

export default function LiftingstateupDemo(props) {
    const data="Patil R"
  return (
    <div>
      <h2>LiftingStateup:{props.name}</h2>
      <button onClick={()=>props.alert(data)}>Click Me</button>
    </div>
  )
}
