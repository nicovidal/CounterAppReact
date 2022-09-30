import { useState } from 'react';
import PropTypes from 'prop-types';


export const CounterApp =({value})=>{

    const [counter,setCounter]=useState(value=0);

    const Add=()=>setCounter((c)=>c+1)
    
    const Substract=()=>setCounter((c)=>c-1)
    
    const Reset=()=>setCounter(value)
    
    return(
        <div>
            <h1>CounterApp</h1>
            <h2>{counter}</h2>
            <button onClick={Add}>PLUS</button>
            <button onClick={Substract}>Substract</button>
            <button onClick={Reset}>Reset</button>
        </div>

    );

} 

CounterApp.propType={

    value:PropTypes.number
}
