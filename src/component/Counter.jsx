import React, { useState } from 'react'
import style from "./Counter.module.css"

const Counter = () => {

    const [count, setCount] = useState(0);
 let c = count%2;

  return (
    <div>Counter
        <div  ></div>
        <h3 className={count%2===0 ? style.even_counter  : style.odd_counter  }>{count}</h3>
        <div>
            <button onClick={()=>setCount(count+1)}>+</button>
            <button onClick={()=>setCount(count-1)}>-</button>
        </div>
        <div>
            <button onClick={()=>setCount(count*2)}>Double</button>
        </div>
    </div>
  )
}

export default Counter