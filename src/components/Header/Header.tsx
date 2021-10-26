import React, { KeyboardEvent } from 'react';
import { useForm } from 'react-hook-form';
import { connect } from 'react-redux';
import { createTodoItem } from '../../redux/reducers/app-reducer';
import './Header.css'

type Props = {
  createTodoItem: (text: string, minutes: number, seconds: number) => void;
}

interface UseFormInputs {
  text: string
  minutes: string
  seconds: string
}

const Header: React.FC<Props> = ({ createTodoItem }) => {
  const { register, handleSubmit, reset } = useForm<UseFormInputs>({});

  const onSubmit = ({ text, minutes, seconds}: UseFormInputs) => {
		createTodoItem(text, +minutes, +seconds);
    reset();
  };

  const checkKeyDown = (event: KeyboardEvent): void => {
    if (event.code === 'Enter') {
      event.preventDefault();
      handleSubmit(onSubmit)();
    }
  };

  return (
    <div className='header'>
      <h1>todos</h1>

      <form className='new-todo-form' onSubmit={handleSubmit(onSubmit)} onKeyDown={event => checkKeyDown(event)}>
        <input {...register('text')} className='new-todo' placeholder='What needs to be done?' />
        <input {...register('minutes')} className='new-todo-form__timer' placeholder='Min' />
        <input {...register('seconds')} className='new-todo-form__timer' placeholder='Sec' />
      </form>
    </div>
  );
};

export default connect(null, { createTodoItem })(Header);