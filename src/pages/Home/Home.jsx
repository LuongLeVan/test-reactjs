import React from 'react';
import { Grid } from '@mui/material';
import ProductCard from '../../components/ProductCard/ProductCard';
import SideBar from '../../components/Sidebar/Sidebar';
import { useSelector } from 'react-redux';

const Home = () => {
  const data = useSelector((state) => state.cart.filterItem || []);

  return (
    <div className='mt-24'>
        <div className='flex'>
          <SideBar/>
          <Grid container spacing={3} style={{marginTop:'40px'}}>
            {data.length > 0 && data.map((item) => (
              <Grid item key={item.id} xs={12} sm={6} md={4} lg={3}>
                <ProductCard product={item} />
              </Grid>
            ))}
          </Grid>
        </div>
    </div>
  );
};


export default Home;
