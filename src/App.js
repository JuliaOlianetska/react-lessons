
import {useReducer, useState} from "react";


const reducer= (state, action) => {
  if (action.obj === '1' && action.action === '+10') {
    return {...state, a: state.a+10}
  } else if
  (action.obj === '1' && action.action === '-2') {
    return {...state, a: state.a-2}
  }

  return {...state};
}

export default function App() {

  let [{a}, dispatch] = useReducer(reducer,{a:0});

  return (
    <div>
<h1>state 1 - {a}</h1>
      <button onClick={()=>dispatch({obj:'1', action: '+10'})}>increment</button>
      <button onClick={()=>dispatch({obj:'1', action:'-2'})}>decrement</button>


    </div>
  );
}