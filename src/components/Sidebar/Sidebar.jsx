import React from 'react'
import { useDispatch } from 'react-redux'
import { filterProductByCategory } from '../../redux/actions'

const SideBar = () => {
  const dispatch = useDispatch()
  return (
    <div className='w-[150px] h-full p-4'>
      <button className='block text-[16px] font-medium' onClick={() => dispatch(filterProductByCategory('mobile'))}>Mobile</button>
      <button className='block text-[16px] font-medium my-7' onClick={() => dispatch(filterProductByCategory('tablet'))}>Tablet</button>
      <button className='block text-[16px] font-medium' onClick={() => dispatch(filterProductByCategory('tv'))}>TV</button>
    </div>
  )
}

export default SideBar