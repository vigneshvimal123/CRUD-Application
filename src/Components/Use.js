// import React, { useReducer, useState } from "react";

// const reducer = (state, action) => {
//   console.log("current state", state, action);
//   switch (action.type) {
//     case "increment":
//       return { ...state, count: state.count + 1 };
//     case "decrement":
//       return { ...state, count: state.count - 1 };
//     case "reset":
//       return { ...state, count: action.payload };
//     case "updatecolor":
//       return { ...state , color: action.payload };
//     default:
//       return { state };
//   }
// };

// const INITIAL = { count: 1, color: "yellow" };

// export function Use() {
//   const [state, dispatch] = useReducer(reducer, INITIAL);
//   console.log(state);
//   return (
//     <div className="Use">
//       <input
//         value={state.color} style={{ background: state.color }}
//         placeholder="enter your color"
//         onChange={(event) =>
//           dispatch({ type: "updatecolor", payload: event.target.value })
//         }
//       />
//       <div>
//         <p>count:{state.count}</p>
//         <button onClick={() => dispatch({ type: "decrement" })}>-</button>
//         <button onClick={() => dispatch({ type: "increment" })}>+</button>
//         <button onClick={() => dispatch({ type: "reset", payload: 100 })}>
//           reset
//         </button>
//       </div>
//     </div>
//   );
// }   

// refer above code 

// const initialstate={count:1};

// const reducer=(state,action)=>{
//   switch(action.type){
//     case "increment":
//       return {count: state.count+1};
//     case "decrement":
//       return {count: state.count-1}
//     // case "reset" :
//     //   return {count: 0 };
//     case "reset" :
//       return {count:action.payload};

//     default :
//       return state;
//   }

// }

// export function Use(){
//    const [state,dispatch]=useReducer(reducer,initialstate);
//    console.log(state);
//     return(

//         <div>
//           <button onClick={()=>dispatch({type:"increment"})} >+</button>
//            <p>count:{state.count}</p>
//           <button onClick={()=>dispatch({type: "decrement"})}>-</button>
//           <button onClick={()=>dispatch({type: "reset" ,payload:100})}>reset</button>

//         </div>
//     )
// }

// const initilizer={count:1};

// const reducer=(state,action)=>{
//   switch(action.type){
//   case "iplus":
//     return { count:state.count +1};
//   }
// }

// export function Use(){
//    const [state,dispatch]=useReducer(reducer,initilizer);

//   return(

//     <div>
//      <button onClick={()=>dispatch({type:"iplus"})}>+</button>
//        <p>count:{state.count}</p>
//      <button>-</button>

//     </div>
//   )
// };

// const init={
//  count:1,
// };

// const reducer=(state,action)=>{
//     switch(action.type){
//       case "a": return {count: state.count+1};

//     }

// }
// export function Use(){
//  const [state,dispatch] =useReducer(reducer,init);
//   return(
//     <div>
//     <button onClick={()=>dispatch({type:"a"})}>+</button>
//    <p>{ state.count}</p>
//     </div>
//   )
// }
