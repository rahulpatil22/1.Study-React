import React from 'react'

export default function Profile(props)
{
    const red=()=>{
        alert("red function called")
    }
    return <div>
       <h1 onClick={red}>{props.text.name}</h1>
       <h2>{props.data} </h2>
    </div>
}