import React from 'react'
import PropTypes from 'prop-types';
import './Todo-list-item.css';


const TodoListItem = props => {

		const { value, id, done, createdTodo, onToggleDone, removeTodoItem } = props;

	return (
		<li id={id} className={done ? 'completed' : null}>
			<div className="view">
				<input className="toggle" type="checkbox" />
				<label>
					<span role="button" tabIndex={0} className='description' onClick={() =>  { onToggleDone(id) } } onKeyDown={null}>{value}</span>
					<span className="created">{createdTodo}</span>
				</label>

				<button type='button' className="icon icon-edit">{null}</button>
				<button type='button' className="icon icon-destroy" onClick={() => { removeTodoItem(id) }}>{null}</button>
			</div>
		</li>
	)

}


TodoListItem.defaultProps = {
	value: '',
	id: null,
	done: false,
	createdTodo: '',
	onToggleDone: () => {},
	removeTodoItem: () => {},
}


TodoListItem.propTypes = {
	value: PropTypes.string,
	id: PropTypes.number,
	done: PropTypes.bool,
	createdTodo: PropTypes.string,
	onToggleDone: PropTypes.func,
	removeTodoItem: PropTypes.func,
}

export default TodoListItem;