const CREATE_TODO_ITEM = 'app/CREATE_TODO_ITEM';
const REMOVE_TODO_ITEM = 'app/REMOVE_TODO_ITEM';
const SET_TEXT = 'app/SET_TEXT';
const SET_MINUTES = 'app/SET_MINUTES';
const SET_SECONDS = 'app/SET_SECONDS';
const MARK_AS_DONE = 'app/MARK_AS_DONE';
const CLEAR_COMPLETED = 'app/CLEAR_COMPLETED';

const initialState = {
	todos: [
		{
			id: 1,
			value: 'drink coffee',
			done: false,
			date: Date.now(),
			deadLine: { minutes: 30, seconds: 0 },
			createdTodo: null,
		},
		{
			id: 2,
			value: 'learn react docs',
			done: false,
			date: Date.now(),
			deadLine: { minutes: 30, seconds: 0 },
			createdTodo: null,
		},
		{
			id: 3,
			value: 'build awesome app',
			done: false,
			date: Date.now(),
			deadLine: { minutes: 30, seconds: 0 },
			createdTodo: null,
		},
	],
	text: '',
	minutes: 0,
	seconds: 0,
};

const appReducer = (state = initialState, action) => {
	switch (action.type) {
		case SET_TEXT:
			return {
				...state,
				text: action.text,
			};
		case SET_MINUTES:
			return {
				...state,
				minutes: action.minutes,
			};
		case SET_SECONDS:
			return {
				...state,
				seconds: action.seconds,
			};
		case CREATE_TODO_ITEM:
			if (action.event.code === 'Enter') {
				return {
					...state,
					todos: [...state.todos, {
						id: Math.random() * 100,
						value: state.text,
						done: false,
						date: Date.now(),
						deadLine: {
							minutes: !state.minutes ? 30 : state.minutes,
							seconds: !state.seconds ? 0 : state.seconds,
						},
					}],
					text: '',
					minutes: 0,
					seconds: 0,
				};
			}
			return state;
		case REMOVE_TODO_ITEM: {
			const idx = state.todos.findIndex(todo => todo.id === action.id);

			return {
				...state,
				todos: [
					...state.todos.slice(0, idx),
					...state.todos.slice(idx + 1)
				]
			}
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
				todos: state.todos.filter(todo => !todo.done)
			}
		default:
			return state;
	}
};

export const setUserText = text => ({ type: SET_TEXT, text });
export const setUserMinutes = minutes => ({ type: SET_MINUTES, minutes });
export const setUserSeconds = seconds => ({ type: SET_SECONDS, seconds });
export const createTodoItem = event => ({ type: CREATE_TODO_ITEM, event });
export const removeTodoItem = id => ({type: REMOVE_TODO_ITEM, id})
export const markAsDone = id => ({ type: MARK_AS_DONE, id });
export const clearCompleted = () => ({ type: CLEAR_COMPLETED });

export default appReducer;