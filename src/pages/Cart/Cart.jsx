// Cart.js
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  Table,
  TableContainer,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Paper,
  IconButton,
  Typography,
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { decreaseFromCart, enterNameForThankYou, increaseFromCart, removeFromCart } from '../../redux/actions';
import { Link } from 'react-router-dom';

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.items || []);
  const [total, setTotal] = useState(0);
  const [name, setName] = useState('');
  useEffect(() => {
    const newTotal = cartItems.reduce((current, item) => {
      return current + item.quantity * item.price;
    }, 0)
    setTotal(newTotal);
  }, [cartItems])
  
const dispatch = useDispatch();

  return (
    <div className='w-full'>
      {cartItems.length !=0
      ?
      <div className='flex'>
        <div className='w-full pr-20'>
          <TableContainer component={Paper}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Product</TableCell>
                  <TableCell align="right">Price</TableCell>
                  <TableCell align="right">Quantity</TableCell>
                  <TableCell align="right">Total</TableCell>
                  <TableCell align="right">Actions</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {cartItems.map((item) => (
                  <TableRow key={item.id}>
                    <TableCell>
                      <img
                        src={item.image01}
                        alt={item.title}
                        style={{ width: '100px', height: '100px', borderRadius: '5px' }}
                      />
                      <Typography>{item.title}</Typography>
                    </TableCell>
                    <TableCell align="right">{item.price}</TableCell>
                    <TableCell align="right">
                      {/* Tăng giảm số lượng */}
                      <IconButton>
                        <RemoveIcon  onClick={ () => dispatch(decreaseFromCart(item.id))}/>
                      </IconButton>
                          <input className='text-center' type="number" value={item.quantity}/>
                      <IconButton>
                        <AddIcon onClick={() => dispatch(increaseFromCart(item.id))}/>
                      </IconButton>
                    </TableCell>
                    <TableCell align="right">{item.price * item.quantity}</TableCell>
                    <TableCell align="right">
                      <IconButton>
                        <DeleteIcon onClick={() => dispatch(removeFromCart(item.id))}/>
                      </IconButton>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
          <div>Total: {total}</div>
        </div>
        
        <div className='w-[600px]'>
        <form className='p-4'>
            <input type="text" className='block border w-full text-black p-3' placeholder='Your Name' required onChange={(e) => setName(e.target.value)}/>
            <input type="email" className='block border w-full text-black p-3 my-4'  placeholder='Your Email' required/>
            <button className='text-center block w-full bg-blue-500 text-white border p-4' onClick={() => dispatch(enterNameForThankYou(name))}>
              <Link to={'/thankyou'}>Place Your Order</Link>
            </button>
        </form>
        </div>
      </div>
      : 
      
      <div className='w-full'>
        <img className='w-[500px] block m-auto' src="https://i.pinimg.com/736x/2e/ac/fa/2eacfa305d7715bdcd86bb4956209038.jpg" alt="empty cart" />
        <Link className='block w-[160px] m-auto text-center border border-blue p-3 text-white hover:opacity-80 text-[18px] font-semibold bg-blue-500' to={'/'}>Back to Home</Link>
      </div>
      }

      
      
    </div>
  );
};

export default Cart;
