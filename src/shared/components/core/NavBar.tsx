// import React from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../../../assets/logo.png'
import { CartPanel } from './CartPanel'
import { selectCartIsEmty, selectTotalCartItem, useCart, useCartPanel } from '@/services/cart'

const isActive = (obj: {isActive : boolean}) => {
  return obj.isActive ? 'text-sky-400 font-bold text-xl' : ''
}

export const NavBar = () => {
  const isCartPanelOpened = useCartPanel(state => state.open)
  const toggleCartPanel = useCartPanel(state => state.toggle)
  const cartIsEmty = useCart(selectCartIsEmty)
  const totalCartCount = useCart(selectTotalCartItem)

  return (
    <div className="fixed top-0 left-0 right-0 shadow-2xl z-10">
      <div className='bg-slate-900 flex justify-between items-center h-20 text-white px-5'>
        
        {/* logo */}
        <div className="flex items-center gap-3">
            <img src={logo} alt="my logo" className="w-16" />
            <NavLink to="shop" className={isActive}>Shop</NavLink>
        </div>
        
        {/* Cart button badge */}
        <div>
            <button className='btn accent lg' disabled={cartIsEmty} onClick={toggleCartPanel}>
                Cart: {totalCartCount}
            </button>
        </div>

        {/* Cart panel */}
        {isCartPanelOpened && <CartPanel />}

        {/* Action Button */}
        <div className="fixed bottom-2 right-2 p-5">
            <NavLink to="login" className="btn accent lg border-[1px] border-white shadow-md shadow-black active:shadow-none transition transition-100">Login</NavLink>
            <NavLink to="cms" className="btn accent lg border-[1px] border-white shadow-md shadow-black  active:shadow-none transition transition-100">Cms</NavLink>
            <button className="btn primary lg border-[1px] border-black shadow-md shadow-black  active:shadow-none transition transition-100">logout</button>
        </div>

      </div>
    </div>
  )
}

