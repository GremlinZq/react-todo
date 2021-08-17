import React from 'react';
import { Component } from 'react';

import TodoListItem from '../Todo-list-item';


export default class TodoList extends Component {

	render() {

		const { todos, removeTodoItem } = this.props;
		const TaskItems = todos.map( ({id, value})  =>  <TodoListItem key={id} id={id} value={value} removeTodoItem={removeTodoItem}/> )

		return (
			<ul className='todo-list'>
				{ TaskItems }
			</ul>
		);
	}
}