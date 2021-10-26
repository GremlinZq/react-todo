import React from 'react';
import Header from '../components/Header/Header';
import Main from '../components/Main/Main';
import './App.css'

const App: React.FC = () => (
  <section className='todoapp'>
    <Header />
    <Main />
  </section>
);

export default App;