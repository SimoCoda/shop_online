import { selectCartIsEmty, selectCartList, selectTotalCartCost, useCart } from '@/services/cart'
import React from 'react'
import { NavLink } from 'react-router-dom'

export const CartPage = () => {
  const list = useCart(selectCartList)
  const totalCost = useCart(selectTotalCartCost)
  const emtyCart = useCart(selectCartIsEmty)
  const incQty = useCart(state => state.increaseQty)
  const decQty = useCart(state => state.decrementQty)
  const removeItem = useCart(state => state.removeFromCart)
  const removeAll = useCart(state => state.clearCart)

  return (
    <div className='component'>
      <h1 className="title mt-40">Cart</h1>
      {/* <div  className="flex flex-col gap-10 2xl:grid 2xl:grid-cols-3 2xl:gap-10 xl:grid xl:grid-cols-2 xl:gap-10 lg:grid lg:grid-cols-2 lg:gap-10"> */}
      <div  className="flex flex-col gap-10">
        {emtyCart && <div>
            <h1 className='text-center text-2xl font-bold'>The cart is emty!</h1>
          </div>
        }
        {
          list.map(item => {
            return (
              <div className='relative flex gap-10 flex-col items-center bg-slate-500 shadow-2xl shadow-black rounded-xl p-5 lg:flex-row'>
                <div>
                  <button className='btn danger absolute right-4 top-4' onClick={() => removeItem(item.product.id)}>X</button>
                </div>
                <div className="w-80">
                  <img className='w-full h-64 object-cover' src={item.product.img} alt={item.product.name} />
                </div>
                <div className='flex gap-5 w-full flex-col items-center lg:flex-row lg:justify-between xl:justify-between 2xl:justify-between'>
                  <div className='flex flex-col gap-2'>
                    <h1 className='font-bold text-xl'>{item.product.name}</h1>
                    <p className='italic text-sm'>{item.product.description}</p>
                  </div>
                  <div className='flex flex-col gap-4 text-right font-bold items-center lg:flex-row xl:flex-row 2xl:flex-row'>
                    <div className='flex gap-4 items-center'>
                      <button className='btn primary' onClick={() => decQty(item.product.id)}>-</button>
                      <span>Qty: {item.qty}</span>
                      <button className='btn primary' onClick={() => incQty(item.product.id)}>+</button>
                    </div>
                    <div className='text-2xl'>€ {item.product.cost * item.qty}</div>
                  </div>
                </div>
              </div>
            )
          })
        }
      </div>
      <div className='flex flex-col items-end w-full justify-center my-16'>
        {!emtyCart && (<><span className='text-2xl font-bold'>Total: € {totalCost}</span><button className='btn danger' onClick={() => removeAll()}>Delete All</button></>)}
      </div>
      {!emtyCart && <div className='flex justify-center w-full'>
        <NavLink className='py-3 text-xl btn success w-full' to='/checkout'>Confirm order</NavLink>
      </div>}
    </div>
  )
}

