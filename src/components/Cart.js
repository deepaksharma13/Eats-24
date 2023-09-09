import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import ItemList from "./ItemList"
import { clearCart } from '../utils/cartSlice'

const Cart = () => {
    const cartItems = useSelector((store) => store.cart.items)

    const dispatch = useDispatch()

   const handleClearCart = ()=> {
    dispatch(clearCart())
   }


  return (
    <div className='text-center m-4 p-4'>
        <h1>Cart</h1>
        <div className='6/12 m-auto'>
          <button onClick={handleClearCart} className='p-2 m-2 bg-black text-white rounded-lg font-bold'>
            Clear Cart
          </button>
          {cartItems.length === 0 && (<h1>Your Cart is empty</h1>)}
           <ItemList items={cartItems}/>
        </div>
        </div>
  )
}

export default Cart