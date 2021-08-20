import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';
import TodoList from './Todo-list';
import Footer from './Footer';
import './Main.css';

const Main = props => {
	const { todos, activeTodos, clearCompleted, completedTodos, onToggleDone, removeTodoItem } = props;

	return (
		<section className='main'>
			<Router>
				<Switch>
					<Route path='/all' component={ () => <TodoList todos={todos} removeTodoItem={removeTodoItem} onToggleDone={onToggleDone} /> }/>
					<Route path='/active' component={ () => <TodoList todos={activeTodos} removeTodoItem={removeTodoItem} onToggleDone={onToggleDone}/> }/>
					<Route path='/completed' component={ () => <TodoList todos={completedTodos} removeTodoItem={removeTodoItem} onToggleDone={onToggleDone} /> }/>
				</Switch>
				<Footer todos={activeTodos} clearCompleted={clearCompleted}/>
			</Router>
		</section>
	);
}

Main.defaultProps = {
	todos: [],
	activeTodos: [],
	completedTodos: [],
	clearCompleted: () => {},
	onToggleDone: () => {},
	removeTodoItem: () => {}
}

Main.propTypes = {
	todos: PropTypes.arrayOf(PropTypes.object),
	activeTodos: PropTypes.arrayOf(PropTypes.object),
	clearCompleted: PropTypes.func,
	completedTodos: PropTypes.arrayOf(PropTypes.object),
	onToggleDone: PropTypes.func,
	removeTodoItem: PropTypes.func
}

export default Main;