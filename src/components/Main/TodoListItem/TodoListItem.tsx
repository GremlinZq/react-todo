import React, { useEffect, useRef, useState } from 'react';
import { formatDistanceToNow, minutesToSeconds } from 'date-fns';
import './TodoListItem.css';

type Props = {
  id: string
  markAsDone: (id: string) => void
  removeTodoItem: (ids: string) => void
  setUpdateDeadline: (id: string, minutes: number, seconds: number) => void
  value: string
  done: boolean
  date: number
  deadLine: { minutes: number, seconds: number }
  editValueTodosItem: (id:string, value:string) => void
}

const TodoListItem: React.FC<Props> = (props): JSX.Element => {
  const { id, markAsDone, removeTodoItem, value, done, date, deadLine, editValueTodosItem } = props;
  const [formatDate, setFormatDate] = useState(formatDistanceToNow(date, { includeSeconds: true, addSuffix: true }));
  const [time, setTime] = useState(minutesToSeconds(deadLine.minutes) + deadLine.seconds);
  const countRef = useRef(0);
  const [play, setPlay] = useState(false);
  const [stop, setStop] = useState(false);
  const [edit, setEdit] = useState(false);
  const [editValue, setEditValue] = useState(value);

  const activateEditMode = () => {
    setEdit(true);
  }

  const deactivateEditMode = () => {
    setEdit(false);
    editValueTodosItem(id, editValue)
  }

  const stopTimer = () => {
    setStop(true);
    setPlay(false);

    clearInterval(countRef.current);
  };

  useEffect(() => {
    if (!play) {
      return;
    }

    setStop(false);

    if (time <= 0) {
      markAsDone(id);
      stopTimer();
    }

    countRef.current = window.setInterval(() => {
      setTime(actual => actual - 1);
    }, 1000);

    return () => clearInterval(countRef.current);
  }, [markAsDone, id, play, time]);


  useEffect(() => {
    const timer = window.setInterval(() => {
      setFormatDate(formatDistanceToNow(date, { includeSeconds: true, addSuffix: true }));
    }, 1000);

    return () => clearInterval(timer);

  }, [formatDate, date, setFormatDate]);

  const minutes = Math.floor(time / 60);
  const getMinutes = minutes % 60;
  const getSeconds = time % 60;

  const min = getMinutes < 10 ? '0' + getMinutes : getMinutes;
  const sec = getSeconds < 10 ? '0' + getSeconds : getSeconds;

  return (
    <li className={done ? 'completed' : edit ? 'editing' : undefined}>
      {!edit
        ? <div className='view'>
            <input className='toggle' type='checkbox' />
            <label>
              <button type='button' tabIndex={0} className='title'
                      onClick={() => markAsDone(id)}>
                {value}
              </button>
              <div className='description'>
                <button aria-label='Save' type='button' className='icon icon-play'
                        disabled={play}
                        onClick={() => setPlay(true)}
                />
                <button aria-label='s' type='button' className='icon icon-pause'
                        onClick={stopTimer}
                        disabled={stop}
                        style={{ marginRight: 15 }}
                />
                {min} : {sec}
              </div>
              <span className='description'>{formatDate}</span>
            </label>
            <button type='button' aria-label='Save' className='icon icon-edit' onClick={activateEditMode} />
            <button type='button' aria-label='Save' className='icon icon-destroy'
                    onClick={() => removeTodoItem(id)} />
          </div>
        : <input type='text' className='edit'
                 onBlur={deactivateEditMode}
                 autoFocus={true}
                 value={editValue}
                 onChange={(event) => setEditValue(event.target.value)}/>
      }
    </li>
  );
};

export default TodoListItem;