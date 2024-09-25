import { create } from "zustand";

export interface CartStateOverlay {
    list: [];
    open: boolean;
    toggle: () => void;
    openOverlay: () => void;
    closeOverlay: () => void;
}

export const useCartPanel = create<CartStateOverlay>((set,get)=>({
    list: [],
    open: false,
    toggle: () => set({open: !get().open}),
    openOverlay: () => set({open: true}),
    closeOverlay: () => set({open: false}),
}))