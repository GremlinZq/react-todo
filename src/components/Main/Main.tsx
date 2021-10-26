import React from 'react';
import Routes from '../../routes/Routes';
import Footer from './Footer/Footer';
import './Main.css';

const Main: React.FC = () => (
  <section className='main'>
    <Routes />
    <Footer />
  </section>
);

export default Main;