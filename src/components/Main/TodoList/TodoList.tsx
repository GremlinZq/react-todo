import React from 'react';
import { Props } from '../../../routes/Routes';
import TodoListItem from '../TodoListItem/TodoListItem';

const TodoList: React.FC<Props> = ({todos, ...restProps}) => {
	const TaskItems = todos.map(({id, ...rest}) => <TodoListItem key={id} {...rest} id={id}  {...restProps} />);

	return (
		<ul className='todo-list'>
			{ TaskItems }
		</ul>
	);
}

export default TodoList