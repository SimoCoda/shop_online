import { CartState } from "./useCart";

export const selectCartList = (state: CartState) => state.list;

export const selectCartIsEmty = (state: CartState) => state.list.length === 0;

export const selectTotalCartCost = (state: CartState) => 
    state.list.reduce((acc,item) => {return acc + (item.qty * item.product.cost)},0)

export const selectTotalCartItem = (state: CartState) => 
    state.list.reduce ((acc,item) => {return acc + item.qty},0)