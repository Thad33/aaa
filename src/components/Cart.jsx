import React, { useContext } from 'react'
import { CartContext } from '../context'

function Cart() {
  const data = useContext(CartContext);
  console.log(data);
  return (
    <div>Cart</div>
  )
}

export default Cart