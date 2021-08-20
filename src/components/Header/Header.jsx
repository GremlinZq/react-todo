import React from 'react'
import PropTypes from 'prop-types';

import './Header.css';


const Header = props => {

	const { userText, onChangeText, addTodoItem } = props;

	return (
		<div className='header'>
			<h1>todos</h1>

			<input className="new-todo"
				placeholder="What needs to be done?"
				onChange={onChangeText}
				onKeyDown={event => addTodoItem(event)}
				value={userText}
			/>
		</div>
	);

}

Header.defaultProps = {
	userText: '',
	onChangeText: () => {},
	addTodoItem: () => {},
}

Header.propTypes = {
	userText: PropTypes.string,
	onChangeText: PropTypes.func,
	addTodoItem: PropTypes.func,
}


export default Header;