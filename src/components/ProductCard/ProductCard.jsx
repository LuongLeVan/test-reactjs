import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { useState } from 'react';
import { useDispatch } from 'react-redux';  
import { addToCart } from '../../redux/actions';
import Sidebar from '../Sidebar/Sidebar';


const ProductCard = ({ product }) => {
  const [isHover, setIsHover] = useState(false);
  const dispatch = useDispatch();  

  return (
    <div>
      <Card sx={{ maxWidth: 345 }} onMouseEnter={() => setIsHover(true)} onMouseLeave={() => setIsHover(false)}>
        <CardActionArea>
          <img
            src={product.image01}
            alt={product.title}
            className='w-[300px] h-[300px]'
            
          />
          <button
            className={`absolute top-[40%] left-[30%] text-white text-[20px] border border-white bg-black p-2`}
            style={{ display: isHover ? 'block' : 'none' }}
            onClick={() => dispatch(addToCart(product))}
          >
            <AddIcon />
            Add to cart
            </button>
          <CardContent>
            <Typography gutterBottom variant="h6" component="div">
              {product.title} - {product.price}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {product.description.length > 100 ? `${product.description.slice(0, 80)}...` : product.description}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="medium" onClick={() => dispatch(addToCart(product))}>
            Add To Cart
          </Button>
        </CardActions>
      </Card>
    </div>
  );
};

export default ProductCard;
