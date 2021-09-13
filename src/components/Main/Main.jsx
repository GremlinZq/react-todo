import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';
import TodoList from './Todo-list';
import Footer from './Footer';
import './Main.css';

const Main = props => {
	const { todos, markAsDone,removeTodoItem, clearCompleted } = props;

	const todosActive = todos.filter(todo => !todo.done)
	const todosCompleted = todos.filter(todo => todo.done)

	return (
		<section className='main'>
			<Router>
				<Switch>
					<Route exact path='/' render={() => {
						return <TodoList todos={todos}  markAsDone={markAsDone} removeTodoItem={removeTodoItem} />;
					}} />
					<Route path='/all' render={() => {
						return <TodoList todos={todos}   markAsDone={markAsDone} removeTodoItem={removeTodoItem}  />;
					}} />
					<Route path='/active' render={() => {
						return <TodoList todos={todosActive}  markAsDone={markAsDone} removeTodoItem={removeTodoItem} />;
					}} />
					<Route path='/completed'  render={() => {
						return <TodoList todos={todosCompleted} markAsDone={markAsDone}  removeTodoItem={removeTodoItem} />;
					}} />
				</Switch>
				<Footer todos={todos} clearCompleted={clearCompleted} />
			</Router>
		</section>
	);
};


Main.defaultProps = {
	todos: [],
}

Main.propTypes = {
	todos: PropTypes.arrayOf(PropTypes.shape({
		id: PropTypes.number,
		value: PropTypes.string,
		done: PropTypes.bool,
		date: PropTypes.number,
		deadLine: PropTypes.objectOf(PropTypes.number),
		createdTodo: PropTypes.string,
		filter: PropTypes.func,
	})),
	markAsDone: PropTypes.func.isRequired,
	clearCompleted: PropTypes.func.isRequired,
	removeTodoItem: PropTypes.func.isRequired,
}

export default Main;