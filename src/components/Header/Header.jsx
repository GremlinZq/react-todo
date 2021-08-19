import React from 'react';
import { Component } from 'react';

import './Header.css';

export default class Header extends Component {

	render() {
		const { userText, onChangeText, addTodoItem } = this.props;

		return (
			<div className='header'>
				<h1>todos</h1>

				<input className="new-todo"
					placeholder="What needs to be done?"
					onChange={onChangeText}
					onKeyDown={event => addTodoItem(event)}
					value={userText}
					autoFocus
				/>
			</div>
		);
	}
}