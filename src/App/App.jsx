import React from 'react';
import Header from '../components/Header';
import MainContainer from '../components/Main/MainContainer';
import './App.css';

const App = () => {

	return (
		<section className='todoapp'>
			<Header />
			<MainContainer />
		</section>
	);
};

export default App;