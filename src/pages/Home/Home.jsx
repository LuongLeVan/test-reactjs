import React from 'react';
import { Grid } from '@mui/material';
import products from '../../assets/fake-data/products';
import ProductCard from '../../components/ProductCard/ProductCard';
import Header from '../../components/Header/Header';

const Home = () => {
  const data = products;

  return (
    <div>
        <Header />
        <Grid container spacing={3} style={{marginTop:'40px'}}>
          {data.map((item) => (
            <Grid item key={item.id} xs={12} sm={6} md={4} lg={3}>
              <ProductCard product={item} />
            </Grid>
          ))}
        </Grid>
    </div>
  );
};

export default Home;
