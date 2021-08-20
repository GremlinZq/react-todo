import React from 'react';
import { Component } from 'react';

import TodoListItem from '../Todo-list-item';


export default class TodoList extends Component {

	render() {

		const { todos, onToggleDone, removeTodoItem } = this.props;
		const TaskItems = todos.map( ({id, value, done, createdTodo})  =>  <TodoListItem key={id} id={id} value={value} onToggleDone={onToggleDone} done={done} createdTodo={createdTodo} removeTodoItem={removeTodoItem}/> )

		return (
			<ul className='todo-list'>
				{ TaskItems }
			</ul>
		);
	}
}