import { useEffect, useState } from 'react'
import { Product } from '@/model/product';
import { pb } from '@/pocketbase';
import { ProductCard } from './components/ProductCard';
import { ServerError, Spinner } from '@/shared/';
import { useCart, useCartPanel } from '@/services/cart';

export const ShopPage = () => {
  
  const [products,setProducts] = useState<Product[]>([])
  const [pending,setPending] = useState<boolean>(false)
  const [error,setError] = useState<boolean>(false)
  const openCartPanel = useCartPanel(state => state.openOverlay)
  const addToCartProduct = useCart(state => state.addToCart)

  useEffect(() => {
    loadData();
  }, [])

  function loadData(){
    setError(false);
    setPending(true);
    pb.collection('products').getList<Product>()
     .then(data => {
       setProducts(data.items);
     }).catch(() => {
       setError(true);
     }).finally(() => {
       setPending(false);
     })
    }
  
  function addToCart(product: Partial<Product>){
    console.log(product)
    openCartPanel();
    addToCartProduct(product as Product);
  }

  return (
    <div className='component'>
        <h1 className='title'>Shop</h1>
        {error && <ServerError />}
        {pending && <Spinner />}
          <div className='flex flex-col gap-12 2xl:grid 2xl:grid-cols-3 2xl:gap-10 xl:grid xl:grid-cols-2 xl:gap-10 lg:grid lg:grid-cols-2 lg:gap-10'>
            {products.map(p => {
              return (
                <div className='mx-10 2xl:w-full 2xl:h-full'>
                  <ProductCard product={p} onAddToCart={() => addToCart(p)} />
                </div>
              )
            })}
          </div>
    </div>
  )
}

