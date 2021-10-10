import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { formatDistanceToNow, getMinutes, getSeconds } from 'date-fns';
import { setUpdateDeadline } from '../../../redux/reducers/app-reducer';
import './Todo-list-item.css';

const TodoListItem = props => {
	const { id, rest, markAsDone, removeTodoItem, setUpdateDeadline } = props;
	const { value, done, date, deadLine } = rest;


	const [formatDate, setFormatDate] = useState('');
	const [time, setActualTime] = useState(deadLine.minutes * 60000  + deadLine.seconds);
	const [play, setPlay] = useState(false);
	const [stop, setStop] = useState(false)
	const ref = useRef();


	useEffect(()  => {
		if (!play) {
			return
		}

		setStop(false);

		ref.current = setInterval(() => {
			setActualTime((actual) => actual - 1000)
		}, 1000)


		// eslint-disable-next-line consistent-return
		return () => clearInterval(ref.current);
	}, [play])

	const stopTimer = () => {
		setStop(true);
		setPlay(false);
		 clearInterval(ref.current)
	}

	useEffect(() => {
		const min = getMinutes(time)
		const sec = getSeconds(time)

		setUpdateDeadline(id, min, sec)
	}, [id, time, setUpdateDeadline])

	useEffect(() => {
		const timer = setInterval(() => {
			setFormatDate(formatDistanceToNow(date, { includeSeconds: true, addSuffix: true }))
		}, 1000)

		return () => clearInterval(timer);
	}, [date])

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
								onClick={() => setPlay(true)}
								disabled={play}
						/>
						<button aria-label='s' type='button' className='icon icon-pause'
								onClick={stopTimer}
								style={{ marginRight: 15 }}
								disabled={stop}
						/>
						{deadLine.minutes}:{deadLine.seconds}
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
	setUpdateDeadline: PropTypes.func.isRequired,
};

const mapStateToProps = () => ({})

export default connect(mapStateToProps, {setUpdateDeadline})(TodoListItem);