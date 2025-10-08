import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {  decrement, incrment, zero } from './counterSlice'

function CounterData() {

    // state global store inner slice
    const count = useSelector((state)=>state.count.value)

    console.log(count)

    const dispatch = useDispatch()

  return (
    <div>
      <h1>Hello count : {count}</h1>
      <button onClick={()=>dispatch(incrment())}>Increment</button>
      <button onClick={()=>dispatch(decrement())} className='mx-5'>Decrement</button>
      <button onClick={()=>dispatch(zero())}>Zero</button>
    </div>
  )
}

export default CounterData;