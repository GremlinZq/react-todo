import {
  CLEAR_COMPLETED,
  CREATE_TODO_ITEM,
  EDIT_VALUE_TODOS_ITEM,
  MARK_AS_DONE,
  REMOVE_TODO_ITEM,
  SET_UPDATE_DEADLINE,
} from '../utils/action-app-constants';

export type TodosType = {
  id: string
  value: string
  done: boolean
  date: number
  deadLine: { minutes: number, seconds: number }
}

export type ActionsType =
  CreateTodoItemAction
  | RemoveTodoItemAction
  | MarkAsDoneAction
  | ClearCompletedAction
  | SetUpdateDeadlineAction
  | EditValueTodosItemType

export type CreateTodoItemAction = {
  type: typeof CREATE_TODO_ITEM
  text: string
  minutes: number
  seconds: number
}

export type RemoveTodoItemAction = {
  type: typeof REMOVE_TODO_ITEM
  id: string
}

export type MarkAsDoneAction = {
  type: typeof MARK_AS_DONE
  id: string
}

export type ClearCompletedAction = {
  type: typeof CLEAR_COMPLETED
}

export type SetUpdateDeadlineAction = {
  type: typeof SET_UPDATE_DEADLINE
  id: string
  minutes: number
  seconds: number
}

export type EditValueTodosItemType = {
  type: typeof EDIT_VALUE_TODOS_ITEM
  id: string,
  value: string
}