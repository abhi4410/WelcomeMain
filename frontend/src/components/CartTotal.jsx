import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from './Title';

const CartTotal = () => {

    const {currency, getCartAmount} = useContext(ShopContext);

  return (
    <div className='flex flex-col gap-2'>
      <Title text1={'CART'} text2={'TOTALS'} />
      <div className='flex justify-between'>
        <p>Subtotal</p>
        <p>{currency} {getCartAmount()}.00</p>
      </div>
      <div className='flex justify-between'>
        <b>Total</b>
        <b>{currency} {getCartAmount()}.00</b>
      </div>
    </div>
  )
}

export default CartTotal
