import React from 'react';

import './Header.css';

const Header = props => {

	return (
		<div className='header'>
			<h1>todos</h1>

			<input className="new-todo"
				placeholder="What needs to be done?"
				autoFocus
			/>

		</div>
	);
}

export default Header;