import { Component } from 'react';
import './Todo-list-item.css';

export default class TodoListItem extends Component {

	render() {
		const { value, id, done, onToggleDone, removeTodoItem } = this.props;

		return (
			<li id={id} className={done ? 'completed' : null}>
				<div className="view">
					<input className="toggle" type="checkbox" />
					<label>
						<span className='description' onClick={() => onToggleDone(id)}>{value}</span>
						<span className="created">time</span>
					</label>

					<button className="icon icon-edit"></button>
					<button className="icon icon-destroy" onClick={() => { removeTodoItem(id) }}></button>
				</div>
			</li>
		)
	}
}