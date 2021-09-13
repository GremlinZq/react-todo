import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import './Todo-list-item.css';
import { formatDistanceToNow, getMinutes, getSeconds } from 'date-fns';

const TodoListItem = props => {
	const { id, rest, markAsDone, removeTodoItem } = props;
	const { value, done, date, deadLine } = rest;

	const [num, setNum] = useState(deadLine.minutes * 60000 + deadLine.seconds);
	const [pause, setPause] = useState(false);

	const [data] = useState(date);
	const [formatDate, setFormatDate] = useState(formatDistanceToNow(data, { includeSeconds: true, addSuffix: true }));
	const intervalRef = useRef();

	const decreaseNum = () => setNum((prev) => prev - 1000 );

	const startTimer = () => {
		setPause(false);
		if(num <= 0) {
			clearInterval(intervalRef.current);
		} else {
			intervalRef.current = setInterval(() => decreaseNum(), 1000);
		}
	}

	const stopTimer = () => {
		setPause(true);
		clearInterval(intervalRef.current)
	}

	useEffect(() => {
		// eslint-disable-next-line consistent-return
		const timer = setInterval(() => {
			setPause(false);
			if (!pause) return () => startTimer();
			if (pause) return () => stopTimer();
		})
		return () => clearInterval(timer);
	});

	useEffect(() => {
		setInterval(() => {
			setFormatDate(() => formatDistanceToNow(data, { includeSeconds: true, addSuffix: true }))
		}, 1000)
	}, [data])

	const minutes = getMinutes(num);
	const seconds = getSeconds(num);

	const min = minutes < 10 ? `0${minutes}`: minutes;
	const sec = seconds < 10 ? `0${seconds}`: seconds;

	return (
		<li id={id} className={done ? 'completed' : null}>
			<div className='view'>
				<input className='toggle' type='checkbox' />
				<label>
					<button type='button' tabIndex={0} className='title'
						  onKeyDown={null}
						  onClick={() => markAsDone(id)}>
						{value}
					</button>
					<div className='description'>
                  			<button aria-label='Save' type='button' className='icon icon-play'
									onClick={startTimer} />
                  			<button aria-label='s' type='button' className='icon icon-pause'
									onClick={stopTimer} style={{ marginRight: 15 }} />
						{min}:{sec}
					</div>
					<span className='description'>{formatDate}</span>
				</label>
				<button type='button' aria-label='Save' className='icon icon-edit' />
				<button type='button' aria-label='Save' className='icon icon-destroy'
						onClick={() => removeTodoItem(id)} />
			</div>
		</li>
	);
};

TodoListItem.defaultProps = {
	rest: {},
};

TodoListItem.propTypes = {
	id: PropTypes.number.isRequired,
	rest: PropTypes.oneOfType([
		PropTypes.object,
	]),
	markAsDone: PropTypes.func.isRequired,
	removeTodoItem: PropTypes.func.isRequired,
};

export default TodoListItem;