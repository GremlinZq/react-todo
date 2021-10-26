import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import { TodosType } from '../types/types';
import { ACTIVE_TODOS_ROUTE, ALL_TODOS_ROUTE, COMPLETED_TODOS_ROUTE, TODOS_ROUTE } from '../utils/consts';
import {
  clearCompleted,
  editValueTodosItem,
  markAsDone,
  removeTodoItem,
  setUpdateDeadline,
} from '../redux/reducers/app-reducer';
import { AppStateType } from '../redux/store';
import TodoList from '../components/Main/TodoList/TodoList';

interface MapStateToPropsType {
  todos: Array<TodosType>;
}

interface MapDispatchToPropsType {
  removeTodoItem: (id: string) => void;
  markAsDone: (id: string) => void;
  clearCompleted: () => void;
  setUpdateDeadline: (id: string, min: number, seconds: number) => void;
  editValueTodosItem: (id: string, value: string) => void;
}

export type Props = MapStateToPropsType & MapDispatchToPropsType

const Routes: React.FC<Props> = ({ todos, ...restProps }): JSX.Element => (
  <Switch>
    <Route exact path={TODOS_ROUTE} render={() => <TodoList todos={todos} {...restProps} />} />
    <Route path={ALL_TODOS_ROUTE} render={() => <TodoList todos={todos} {...restProps} />} />;
    <Route path={ACTIVE_TODOS_ROUTE}
           render={() => <TodoList todos={todos.filter(todo => !todo.done)} {...restProps} />} />;
    <Route path={COMPLETED_TODOS_ROUTE}
           render={() => <TodoList todos={todos.filter(todo => todo.done)} {...restProps} />} />;
  </Switch>
);

const mapStateToProps = (state: AppStateType) => ({ todos: state.app.todos });

export default connect(mapStateToProps, {
  removeTodoItem,
  markAsDone,
  clearCompleted,
  editValueTodosItem,
  setUpdateDeadline,
})(Routes);