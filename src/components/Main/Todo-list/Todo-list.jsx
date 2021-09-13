import React from 'react';
import PropTypes from 'prop-types';
import TodoListItem from '../Todo-list-item';

const TodoList = props => {

	const { todos, markAsDone, removeTodoItem } = props;

	const TaskItems = todos.map(({id, ...rest}) => {
		return <TodoListItem key={id} rest={rest} id={id} markAsDone={markAsDone} removeTodoItem={removeTodoItem} />
	});

	return (
		<ul className='todo-list'>
			{ TaskItems }
		</ul>
	);
}


TodoList.defaultProps = {
	todos: [],
}

TodoList.propTypes = {
	todos: PropTypes.arrayOf(PropTypes.object),
	markAsDone: PropTypes.func.isRequired,
	removeTodoItem: PropTypes.func.isRequired,
}

export default TodoList;