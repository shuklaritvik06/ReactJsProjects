import { ActionTypes,SortTypes } from "../constants/action-type";

export const cartReducer = (state,action)=>{
    switch (action.type) {
        case ActionTypes.ADD_TO_CART:
            return {cart: [...state.cart,{...action.payload,qty:1}]}
        case ActionTypes.REMOVE_FROM_CART:
            return {cart: state.cart.filter(item=>item.id!==action.payload.id)} 
        case ActionTypes.INCREMENT_QTY:
            return {cart:state.cart.filter(item=>item.id===action.payload.id ? item.qty=action.payload.qty : item.qty)}
        default:
            return state;
    }
}

export const productReducer = (state,action)=>{
    switch (action.type) {
        case SortTypes.ASC:
            return { sort: "ASC",...action.payload }
        case SortTypes.DESC:
            return { sort: "DESC",...action.payload }
        case SortTypes.CLEAR:
            return { sort: "", ...action.payload} 
        case SortTypes.SEARCH:
            return { sort: "", ...action.payload  }           
        default:
            return state;
    }
}