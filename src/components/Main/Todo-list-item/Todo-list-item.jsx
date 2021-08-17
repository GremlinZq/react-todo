import { Component } from 'react';
import './Todo-list-item.css';

export default class TodoListItem extends Component {

	state = {
		completed: false,
	}

	render() {

		const { value, id, removeTodoItem } = this.props;
		const { completed } = this.state;
		return (
			<li id={id} className={completed ? 'completed' : null}>
				<div className="view">
					<input className="toggle" type="checkbox" />
					<label>
						<span className='description' onClick={this.performTodo}>{value}</span>
						<span className="created">time</span>
					</label>

					<button className="icon icon-edit"></button>
					<button className="icon icon-destroy" onClick={() => { removeTodoItem(id) }}></button>
				</div>
			</li>
		)
	}


	performTodo = () => {
		this.setState(( {completed})  => {
			return {
				completed: !completed
			}
		})
	}
}