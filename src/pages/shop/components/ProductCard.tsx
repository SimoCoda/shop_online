import { Product } from '@/model/product';
// import React from 'react'

interface ProductCardProps {
    product: Partial<Product>;
    onAddToCart: (product: Partial<Product>) => void;
}

export const ProductCard = (props: ProductCardProps) => {
  return (
    <div className='flex gap-5 items-center bg-slate-500 shadow-2xl shadow-black rounded-xl p-5'>
        <div className="w-full">
          <img className='w-full h-64 object-cover' src={props.product.img} alt={props.product.name} />
        </div>
        <div className='flex flex-col gap-10'>
          <h1 className='font-bold text-xl'>{props.product.name}</h1>
          <p className='italic text-sm'>{props.product.description}</p>
          <div className='text-right font-bold'>
            {props.product.cost} €
          </div>
        <button className='bg-sky-600 text-white hover:bg-sky-800 transition w-full text-center font-bold p-2 rounded-2xl'
            onClick={() => props.onAddToCart(props.product)}
        >Add to cart</button>
        </div>
    </div>
  )
}
