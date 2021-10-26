import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createTodoItem } from '../../redux/reducers/app-reducer';
import './Header.css';

const Header = props => {
	const { createTodoItem } = props;

	const [text, setText] = useState('');
	const [minutes, setMinutes] = useState(0);
	const [seconds, setSeconds] = useState(0);

	return (
		<div className='header'>
			<h1>todos</h1>

			<form className='new-todo-form'
				  role='presentation'
				  onKeyDown={event => createTodoItem(event, text, minutes, seconds, setText, setMinutes, setSeconds)}
			>
				<input className='new-todo'
					   placeholder='What needs to be done?'
					   onChange={event => setText(event.target.value)}
					   value={text}
				/>
				<input className='new-todo-form__timer'
					   placeholder='Min'
					   onChange={event => setMinutes(+event.target.value)}
					   value={minutes || ''}
				/>
				<input className='new-todo-form__timer'
					   placeholder='Sec'
					   onChange={event => setSeconds(+event.target.value)}
					   value={seconds || '' }
				/>
			</form>
		</div>
	);
};

Header.propTypes = {
	createTodoItem: PropTypes.func.isRequired,
};

const mapStateToProps = () => ({})

export default connect(mapStateToProps, {createTodoItem})(Header);