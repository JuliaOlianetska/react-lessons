import {useReducer, useState} from "react";

const reducer= (state, action) => {
  if (action.obj === '1' && action.diya === '+') {
    return {...state, a: state.a++}
  } else if
  (action.obj === '1' && action.diya === '-') {
    return {...state, a: state.a--}
  } else if
  (action.obj === '2' && action.diya === '+') {
    return {...state, b: state.b++}
  } else if
  (action.obj === '2' && action.diya === '-') {
    return {...state, b: state.b--}
  }

  return {...state};
}

export default function App() {

  let [state, dispatch] = useReducer(reducer,{a:0, b:0});
let {a,b} = state;
  console.log(state);

  return (
    <div>
<h1>state 1 - {a}</h1>
      <button onClick={()=>dispatch({obj:'1', diya: '+'})}>increment</button>
      <button onClick={()=>dispatch({obj:'1', diya:'-'})}>decrement</button>
      <h1>state 2 - {b}</h1>
      <button onClick={()=>dispatch({obj:'2', diya:'+'})}>increment</button>
      <button onClick={()=>dispatch({obj:'2', diya:'-'})}>decrement</button>
    </div>
  );
}