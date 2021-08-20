import React from 'react';
import PropTypes from 'prop-types';
import TodoListItem from '../Todo-list-item';


const TodoList = props => {

	const { todos, onToggleDone, removeTodoItem } = props;

	const TaskItems = todos.map( ({id, value, done, createdTodo}) =>  {
		return (
			<TodoListItem key={id}
						  id={id}
						  value={value}
						  onToggleDone={onToggleDone}
						  done={done} createdTodo={createdTodo}
						  removeTodoItem={removeTodoItem}
			/>
		)
	})

	return (
		<ul className='todo-list'>
			{ TaskItems }
		</ul>
	);
}


TodoList.defaultProps = {
	todos: [],
	onToggleDone: () => {},
	removeTodoItem: () => {}
}

TodoList.propTypes = {
	todos: PropTypes.arrayOf(PropTypes.object),
	onToggleDone: PropTypes.func,
	removeTodoItem: PropTypes.func
}

export default TodoList;