import React from "react";
import { useReducer } from "react";

function reducer(state,action){
    switch(action.type){
        case "INCREMENT":
           return {count: state.count+1,showText: state.showText};
        case "ToggleShow":
            return {count: state.count,showText: !state.showText};   
        default:
            return state;   
    }
}

export default function UseReducer(){
    const [state,dispatch] = useReducer(reducer,{count:0,showText: true});
    return (
        <div>
           <h1>Hello World!</h1>
           <h1>{state.count}</h1>
           <button onClick={()=>{
            dispatch({type:"INCREMENT"});
            dispatch({type:"ToggleShow"});
           }}>Increment</button>
           {state.showText && <p>How are you all?</p>}
        </div>
    );
}