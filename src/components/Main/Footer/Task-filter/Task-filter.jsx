import React from 'react';
import { Link } from "react-router-dom";
import './Task-filter.css';

const TaskFilter = () => {

	return (
		<ul className='filters'>
			<li>
				<button type='button'>
					<Link to='/all'>All</Link>
				</button>
			</li>
			<li>
				<button type='button'>
					<Link to='/active'>Active</Link>
				</button>
			</li>
			<li>
				<button type='button'>
					<Link to='/completed'>Completed</Link>
				</button>
			</li>
		</ul>
	);
}

export default TaskFilter;