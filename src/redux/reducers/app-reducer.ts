import uniqueId from 'lodash.uniqueid';
import { ActionsType, ClearCompletedAction, CreateTodoItemAction, MarkAsDoneAction, RemoveTodoItemAction,
  SetUpdateDeadlineAction, TodosType } from '../../types/types';
import {
  CLEAR_COMPLETED,
  CREATE_TODO_ITEM,
  EDIT_VALUE_TODOS_ITEM,
  MARK_AS_DONE,
  REMOVE_TODO_ITEM,
  SET_UPDATE_DEADLINE,
} from '../../utils/action-app-constants';

const initialState = {
  todos: [
    {
      id: uniqueId(),
      value: 'drink coffee',
      done: false,
      date: Date.now(),
      deadLine: { minutes: 30, seconds: 0 },
    },
  ] as unknown as Array<TodosType>,
};

type InitialStateType = typeof initialState;

const appReducer = (state = initialState, action: ActionsType): InitialStateType => {
  switch (action.type) {
    case CREATE_TODO_ITEM:
      return {
        ...state,
        todos: [...state.todos, {
          id: uniqueId(''),
          value: action.text,
          done: false,
          date: Date.now(),
          deadLine: {
            minutes: !action.minutes && !action.seconds ? 30 : action.minutes,
            seconds: !action.seconds ? 0 : action.seconds,
          },
        }] as Array<TodosType>,
      };
    case REMOVE_TODO_ITEM: {
      const idx = state.todos.findIndex(todo => todo.id === action.id);

      return {
        ...state,
        todos: [
          ...state.todos.slice(0, idx),
          ...state.todos.slice(idx + 1),
        ],
      };
    }

    case MARK_AS_DONE:
      return {
        ...state,
        todos: state.todos.map(todo => {
          if (action.id === todo.id) {
            return {
              ...todo,
              done: !todo.done,
            };
          }
          return todo;
        }),
      };
    case CLEAR_COMPLETED:
      return {
        ...state,
        todos: state.todos.filter(todo => !todo.done),
      };
    case SET_UPDATE_DEADLINE:
      return {
        ...state,
        todos: state.todos.map(todo => {
          if (todo.id === action.id) {
            return {
              ...todo,
              deadLine: {
                ...todo.deadLine,
                minutes: action.minutes,
                seconds: action.seconds,
              },
            };
          }
          return todo;
        }),
      };
    case EDIT_VALUE_TODOS_ITEM:
      return {
        ...state,
        todos: state.todos.map(todo => {
            if (todo.id === action.id) {
              return {
                ...todo,
                value: action.value,
              }
            }
            return todo;
        })
      }
    default:
      return state;
  }
};

export const createTodoItem = (text: string, minutes: number, seconds: number): CreateTodoItemAction => ({
  type: CREATE_TODO_ITEM,
  text,
  minutes,
  seconds,
});
export const removeTodoItem = (id: string): RemoveTodoItemAction => ({ type: REMOVE_TODO_ITEM, id });
export const markAsDone = (id: string): MarkAsDoneAction => ({ type: MARK_AS_DONE, id });
export const clearCompleted = (): ClearCompletedAction => ({ type: CLEAR_COMPLETED });
export const setUpdateDeadline = (id: string, minutes: number, seconds: number): SetUpdateDeadlineAction => ({
  type: SET_UPDATE_DEADLINE,
  id,
  minutes,
  seconds,
});

export const editValueTodosItem = (id: string, value: string) => ({type: EDIT_VALUE_TODOS_ITEM, id, value})

export default appReducer;