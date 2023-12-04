import React from 'react'
import { useSelector } from 'react-redux';

const ThankYou = () => {

const name = useSelector(state => state.cart.name || '');

  return (
<div className='font-semibold text-4xl w-full h-screen flex items-center justify-center'>
        <p>Thank You for Confirming  the order {name}</p>
    </div>
  )
}

export default ThankYou;