import React from 'react';

import TodoList from './Todo-list';
import Footer from './Footer';
import './Main.css';

const Main = props => {
	const { todos, addTodoItem, removeTodoItem } = props;

	return (
		<section className='main'>
			<TodoList todos={todos} removeTodoItem={removeTodoItem} />
			<Footer />
		</section>
	);
}

export default Main;