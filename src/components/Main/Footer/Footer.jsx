import React from 'react';

import './Footer.css';
import TaskFilter from './Task-filter';
import ClearCompleted from './Clear-completed';

const Footer = props => {

	const { todosCounter } = props;

	return (
		<footer className='footer'>
        	<span className="todo-count">{todosCounter} items left</span>
			<TaskFilter />
			<ClearCompleted />
		</footer>
	);
}

export default Footer;