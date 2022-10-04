import {useState} from 'react'

export default function RenderMethod() {
    const[loggedIn,setLogged]=useState(2)
  return (
    <div>
      {loggedIn==1?<h1>Welcome user1</h1>:loggedIn==2?<h1>welcome user 2</h1>:<h1>welcome guest</h1>}
    </div>
  )
}
