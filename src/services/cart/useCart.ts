import { CartItem } from "@/model/cart-item";
import { Product } from "@/model/product";
import { create } from "zustand";

export interface CartState {
    list: CartItem[];
    addToCart: (product:Product) => void;
    removeFromCart: (productId: string) => void;
    increaseQty: (productId:string) => void;
    decrementQty: (productId:string) => void;
    clearCart: () => void;
}

export const useCart = create<CartState>((set,get) => ({
    list: [],
    addToCart: (product) => {
        const found = get().list.find(item => item.product.id === product.id)
        if(found){
            get().increaseQty(product.id)
        }else{
            const item: CartItem = {product,qty: 1}
            set(state => ({list: [...state.list, item]}))
        }
    },
    removeFromCart: (productId) => {
        console.log("prodotto eliminato")
        const found = get().list.find(item => item.product.id === productId)
        if(found){
            set(state => ({
                list: state.list.filter(item => item.product.id !== productId)
            }))
        }
    },
    increaseQty: (productId) => {
        console.log("qty aumentata", productId)     
        const found = get().list.find(item => item.product.id === productId)
        if(found){
            found.qty++;
            set(state => ({
                list: state.list.map(item => {
                    return item.product.id === found.product.id ? found : item;
                })})
            )
        }  
    },
    decrementQty: (productId) => {
        console.log("qty diminuita")
        const found = get().list.find(item => item.product.id === productId)
        if(found){
            found.qty--;
            set(state => ({
                list: state.list.map(item => {
                    return item.product.id === found.product.id ? found : item;
                })
            }))
        }
        if(found?.qty == 0){
            get().removeFromCart(productId)
        }

    },
    clearCart: () => {
        console.log("cancellazione carrello")
        set(() => ({list: []}))
    },
}))