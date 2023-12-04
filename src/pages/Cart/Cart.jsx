import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Table, TableContainer, TableHead, TableBody, TableRow, TableCell, Paper, IconButton, Typography } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { Link, useNavigate } from 'react-router-dom';

import { decreaseFromCart, enterNameForThankYou, increaseFromCart, removeFromCart } from '../../redux/actions';
import numberWithCommas from '../../math/numberWithCommas';

const Cart = () => {

  const cartItems = useSelector((state) => state.cart.items || []);
  const dispatch = useDispatch();
  const [total, setTotal] = useState(0);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const navigator = useNavigate();

  useEffect(() => {
    const newTotal = cartItems.reduce((current, item) => {
      return current + item.quantity * item.price;
    }, 0)
    setTotal(newTotal);
  }, [cartItems])

  const handleClick = () => {
    if (name && email) {
      dispatch(enterNameForThankYou(name));
      navigator('/thankyou');
    }
  };

  return (
    <div className='w-full mt-24'>
      {cartItems.length != 0
        ?
        <div className='md:flex'>
          <div className='w-full pr-20'>
            <TableContainer component={Paper}>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell align='left'>Product</TableCell>
                    <TableCell align='center'>Name</TableCell>
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
                      </TableCell>
                      <TableCell align="right">{item.title}</TableCell>
                      <TableCell align="right">{numberWithCommas(item.price)}đ</TableCell>
                      <TableCell align="right" className='p-0'>
                        <div className='flex items-center justify-end'>
                          <IconButton>
                            <RemoveIcon onClick={() => dispatch(decreaseFromCart(item.id))} />
                          </IconButton>
                          <div className='block px-3'>{item.quantity}</div>
                          <IconButton>
                            <AddIcon onClick={() => dispatch(increaseFromCart(item.id))} />
                          </IconButton>
                        </div>
                      </TableCell>
                      <TableCell align="right">{numberWithCommas(item.price * item.quantity)}đ</TableCell>
                      <TableCell align="right">
                        <IconButton>
                          <DeleteIcon onClick={() => dispatch(removeFromCart(item.id))} />
                        </IconButton>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
            <div className='text-[24px]'>Total: {numberWithCommas(total)}đ</div>
          </div>

          <div className='w-[200px] md:w-[600px]'>
            <form className='p-4'>
              <input type="text" className='block border w-full text-black p-3' placeholder='Your Name' required onChange={(e) => setName(e.target.value)} />
              <input type="email" className='block border w-full text-black p-3 my-4' placeholder='Your Email' required onChange={(e) => setEmail(e.target.value)} />
              <button
                className='text-center block w-full bg-blue-500 text-white border p-4'
                onClick={() => handleClick()}
              >
                Place Your Order

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
