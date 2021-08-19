import React, { Component } from 'react';
import Header from  '../components/Header';
import Main from '../components/Main';

import './App.css';

export default class App extends Component {

	state = {
		todos : [
			{ id: 1, value: 'drink coffe', done: false },
			{ id: 2, value: 'learn react docs', done: false },
			{ id: 3, value: 'build awesome app', done: false },
		],
		userText: '',
	}
	/* ----------------------------------- UI ----------------------------------- */
	render() {
		const { todos } = this.state;

		const active = this.state.todos.filter(todo => !todo.done);
		const completed = this.state.todos.filter(todo => todo.done);

		return (
			<section className="todoapp">
				<Header addTodoItem={this.addTodoItem}
						onChangeText={this.onChangeText}
						userText={this.state.userText}
				/>
				<Main
					todos={ todos }
					removeTodoItem={this.removeTodoItem}
					onToggleDone={this.onToggleDone}
					activeTodos={active}
					completedTodos={completed}
					clearCompleted={this.clearCompleted}
				/>
			</section>
		)
	}

	/* ----------------------------------- BLL ---------------------------------- */
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


	addTodoItem = event => {
		if (event.code === 'Enter') {
			this.setState(({ todos }) => {
				return {
					todos: [...todos, { id: Math.random() * 100, value: this.state.userText, done: false } ]
				}
			});

			this.setState({userText: ''})
		}
	}

	onChangeText = event => {
		this.setState({ userText: event.target.value })
	}

	onToggleDone = id => {
		this.setState(({todos}) => {
			const index = this.state.todos.findIndex(todo => todo.id === id);

			const oldTodo = todos[index];

			const newTodo = {
				...oldTodo,
				done: !oldTodo.done,
			}

			return {
				todos: [
					...todos.slice(0, index),
					newTodo,
					...todos.slice(index + 1)
				]
			}
		})
	}

	clearCompleted = () => this.setState({todos: []})
}