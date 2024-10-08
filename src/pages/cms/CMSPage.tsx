// import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

const isActive = (obj: {isActive: boolean}) => {
  return obj.isActive? 'btn primary' : 'btn'
}

export const CMSPage = () => {
  return (
    <div className='component'>
      <div className='mb-12'>
        <NavLink to='/cms/products' className={isActive}>Products</NavLink>
        <NavLink to='/cms/orders' className={isActive}>Orders</NavLink>
      </div>
      <Outlet />
    </div>
  )
}
