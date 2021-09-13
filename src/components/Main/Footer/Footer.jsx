import React from 'react';
import PropTypes from 'prop-types';
import './Footer.css';
import TaskFilter from './Task-filter';
import ClearCompleted from './Clear-completed';

const Footer = props => {
	const { todos, clearCompleted } = props;

	return (
		<footer className='footer'>
        	<span className="todo-count">{todos.length} items left</span>
			<TaskFilter />
			<ClearCompleted clearCompleted={clearCompleted}/>
		</footer>
	);
}


Footer.defaultProps = {
	todos: [],
	clearCompleted: () => {},
}

Footer.propTypes = {
	todos: PropTypes.arrayOf(PropTypes.object),
	clearCompleted: PropTypes.func
}

export default Footer;