import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

const ProductCard = ({ product }) => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={product.image01}
          alt={product.title}
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="div">
            {product.title} - {product.price}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {product.description.length > 100 ? `${product.description.slice(0,80)}...` : product.description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="medium">Add To Cart</Button>
      </CardActions>
    </Card>
  );
}
export default ProductCard;
