import React from 'react';

import './Task-filter.css';

const TaskFilter = () => {

	return (
		<ul className='filters'>
			<li><button>All</button></li>
			<li><button>Active</button></li>
			<li><button>Completed</button></li>
		</ul>
	);
}

export default TaskFilter;