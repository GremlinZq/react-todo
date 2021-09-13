import React from 'react';
import HeaderContainer from '../components/Header/HeaderContainer';
import MainContainer from '../components/Main/MainContainer';
import './App.css';

const App = () => {

	return (
		<section className='todoapp'>
			<HeaderContainer />
			<MainContainer />
		</section>
	);
};

export default App;