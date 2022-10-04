import React , {useEffect,useState} from 'react';


const StateEffect = () => {
    const[data ,setData]=useState(0)
    useEffect(()=>{
        console.warn("useEffect is working")
    })
  return (
    <div>
      <h2>useEffect Hook{data}</h2>
      <button onClick={()=>setData(data+1)}>Update data</button>
    </div>
  )
}

export default StateEffect;

