import React, { useEffect, useState } from 'react'

function UseEffect() {
     const[count,setCount]=useState(0)
     useEffect( () => {
        console.warn("useEffect")
    })

    return (
        <div className="App">
            <h1>useEffect in React{count}</h1>
            <button onClick={()=>setCount(count+1)}>Update counter</button>
        </div>
    )
}

export default UseEffect;
