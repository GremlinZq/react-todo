import React, { Component } from 'react';
import { formatDistanceToNow } from 'date-fns';
import Header from  '../components/Header';
import Main from '../components/Main';


import './App.css';

export default class App extends Component {

	interval = null;

	state = {
		todos : [
			{ id: 1, value: 'drink coffe', done: false, date: Date.now(), createdTodo: null  },
			{ id: 2, value: 'learn react docs', done: false, date: Date.now(), createdTodo: null },
			{ id: 3, value: 'build awesome app', done: false, date: Date.now(), createdTodo: null },
		],
		userText: '',
	}

	/* ----------------------------------- BLL ---------------------------------- */
	componentDidMount() {
		this.setState(({ todos }) => ({
			todos: todos.map((elem) => ({
			...elem,
			createdTodo: formatDistanceToNow(elem.date, { addSuffix: true,includeSeconds: true }),
		  })),
		}));

		this.interval = setInterval(() => {
		  this.setState(({ todos }) => ({
			todos: todos.map((elem) => ({
			  ...elem,
			  createdTodo: formatDistanceToNow(elem.date, { includeSeconds: true, addSuffix: true }),
			})),
		  }));
		}, 5000);
	}

	componentWillUnmount() {
		clearInterval(this.interval);
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


	addTodoItem = event => {
		if (event.code === 'Enter') {
			this.setState(({ todos, userText }) => {
				return {
					todos: [...todos, { id: Math.random() * 100, value: userText, done: false, date: Date.now(), createdTodo: null } ]
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
			const index = todos.findIndex(todo => todo.id === id);

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


	/* ----------------------------------- UI ----------------------------------- */
	render() {
		const { todos, userText } = this.state;

		const active = todos.filter(todo => !todo.done);
		const completed = todos.filter(todo => todo.done);

		return (
			<section className="todoapp">
				<Header addTodoItem={this.addTodoItem}
						onChangeText={this.onChangeText}
						userText={userText}
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
}