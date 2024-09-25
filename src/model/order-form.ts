import { CartItem } from "./cart-item";

export interface OrderUser{
    user: {
        name:string;
        email:string;
    }
}
export type OrderStatus = 'pending' | 'done'

export interface OrderForm {
    user: OrderUser;
    order: CartItem[];
    status: OrderStatus;
    total: number;
}