import React from 'react';
import './Header.css';
import PropTypes from 'prop-types';

const Header = props => {
	const {
		setUserText, setUserMinutes,
		setUserSeconds, createTodoItem,
		text, minutes, seconds,
	} = props;

	return (
		<div className='header'>
			<h1>todos</h1>

			<form className='new-todo-form' role='presentation'
				  onKeyDown={event => createTodoItem(event)}>
				<input className='new-todo'
					   placeholder='What needs to be done?'
					   onChange={event => setUserText(event.target.value)}
					   value={!text ? '' : text}
				/>
				<input className='new-todo-form__timer'
					   placeholder='Min'
					   onChange={event => setUserMinutes(+event.target.value)}
					   value={!minutes ? '' : minutes}
				/>
				<input className='new-todo-form__timer'
					   placeholder='Sec'
					   onChange={event => setUserSeconds(+event.target.value)}
					   value={!seconds ? '' : seconds}
				/>
			</form>
		</div>
	);
};

Header.propTypes = {
	text: PropTypes.string.isRequired,
	minutes: PropTypes.number.isRequired,
	seconds: PropTypes.number.isRequired,
	setUserText: PropTypes.func.isRequired,
	setUserMinutes: PropTypes.func.isRequired,
	setUserSeconds: PropTypes.func.isRequired,
	createTodoItem: PropTypes.func.isRequired,
};

export default Header;