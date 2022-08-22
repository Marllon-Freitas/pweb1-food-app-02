import React from 'react'
import {useLocation} from 'react-router-dom'

function Cart() {
  const {
    state: { recordTypeId }
  } = useLocation();
  console.log(recordTypeId);
  return (
    <div>Cart</div>
  )
}

export default Cart