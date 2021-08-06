import React from 'react';
import Sidebar from './Sidebar';
import Gallery from './Gallery';
import { withContext } from '../../context';

function Home({ value }) {
  return (
    <section className='pt-5 pb-5'>
      <div className='container'>
        <div className='row'>
          <Sidebar {...value} />
          <Gallery />
        </div>
      </div>
    </section>
  );
}
export default Home;
