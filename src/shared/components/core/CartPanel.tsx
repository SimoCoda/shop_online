import { selectTotalCartCost, useCart, useCartPanel } from '@/services/cart';
import React from 'react'
import { useNavigate } from 'react-router-dom';

export const CartPanel = () => {
    const navigate = useNavigate();
    const closeCartPanel = useCartPanel(state => state.closeOverlay)
    const stateCartPanel = useCartPanel(state => state.open)
    let hideCartPanel: string | number | NodeJS.Timeout | undefined;
    const list = useCart(state => state.list)
    const totalCartCost = useCart(selectTotalCartCost)

    function goToCart(){
        navigate('cart');
        closeCartPanel();
    }

    return (
      <div className='fixed bg-slate-800 right-4 top-24 rounded-xl shadow-2xl w-96 p-3 transition'>
        {list.length == 0 && <cite className='flex justify-center pb-3 my-3 border-b border-slate-600'>The cart is emty...</cite>}
        <ul className="flex flex-col gap-4">
          {
            list.map(p => {
                return (
                    <li key={p.product.id} className="border-b border-slate-600 flex justify-between items-center pb-3">
                        <div>{p.product.name}</div>
                        <div className='flex gap-3'>
                            <div>{p.qty} x €{p.product.cost}</div>
                            <div>€ {p.qty != 0 ? (p.qty*p.product.cost) : p.product.cost}</div>
                        </div>
                    </li>
                )
            })
          }

        </ul>
        {list.length !== 0 && <div className='flex justify-end mt-4 text-xl font-bold'>Total: € {totalCartCost}</div>}
        <div className='flex justify-center'>
          <button className="btn primary" onClick={goToCart}>Go To Cart</button>
        </div>
      </div>
    )
}
