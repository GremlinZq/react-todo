import React from 'react';
import { connect } from 'react-redux';
import { AppStateType } from '../../../redux/store';
import { TodosType } from '../../../types/types';
import TaskFilter from './TaskFilter/TaskFilter';
import { clearCompleted } from '../../../redux/reducers/app-reducer';
import ClearCompleted from './ClearCompleted/ClearCompleted';
import './Footer.css';

interface Props {
  todos: Array<TodosType>
  clearCompleted: () => void;
}

const Footer = ({ todos, clearCompleted }: Props): JSX.Element => (
  <footer className='footer'>
    <span className='todo-count'>{todos.length} items left</span>
    <TaskFilter />
    <ClearCompleted clearCompleted={clearCompleted} />
  </footer>
);

const mapStateToProps = (state: AppStateType) => ({ todos: state.app.todos });
export default connect(mapStateToProps, { clearCompleted })(Footer);