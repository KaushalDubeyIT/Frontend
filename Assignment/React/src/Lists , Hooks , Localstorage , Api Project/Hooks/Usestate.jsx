import React, { useState } from 'react'

function Usestate() {
        const [count,setcount] = useState(0)

  return (
    <div>
      <h1>hello count :- {count}</h1>
      <button onClick={()=>setcount(count+1)}>increment</button>
      <button onClick={()=>setcount(count-1)}>Decrement</button>
    </div>
  )
}

export default Usestate
