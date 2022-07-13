import React from 'react';
import HomeCarousel from './Carousel';
import Kategori from './Kategori';

const Home = () => {
  return (
    <div
      className='my-5'
      style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
    >
      <HomeCarousel />
      <br />
      <Kategori />
    </div>
  );
};

export default Home;
