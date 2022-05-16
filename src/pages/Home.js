import React from 'react';
import Habilities from '../components/Habilities';
import Header from '../components/Header';
import History from '../components/History';
import Galery from '../components/Galery';
import Footer from '../components/Footer';

function Home() {
  return (
    <div>
      <Header />
      <History />
      <Habilities />
      <Galery />
      <Footer />
    </div>
  );
}

export default Home;
