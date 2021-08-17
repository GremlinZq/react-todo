import React, { Component } from 'react';

import Header from  '../components/Header';
import Main from '../components/Main';

import './App.css';

export default class App extends Component {

	state = {
		todos : [
			{ id: 1, value: 'drink coffe', active: false },
			{ id: 2, value: 'learn react docs', active: false },
			{ id: 3, value: 'build awesome app', active: false },
		]
	}

	render() {
		const { todos } = this.state;

		return (
			<section className="todoapp">
				<Header />
				<Main todos={ todos } removeTodoItem={this.removeTodoItem} addTodoItem={this.addTodoItem} />
			</section>
		)
	}


	removeTodoItem = id => {
		this.setState(({ todos }) => {
			const index = todos.findIndex(todo => todo.id === id );
			return {
				todos: [
					...todos.slice(0, index),
					...todos.slice(index + 1)
				]
			}
		})
	}


	addTodoItem = text => {
		this.setState(({ todos }) => {
			return {
				todos: [...todos, { id: 4, value: text, active: false } ]
			}
		});
	}
}