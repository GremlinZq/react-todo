const CREATE_TODO_ITEM = 'app/CREATE_TODO_ITEM';
const REMOVE_TODO_ITEM = 'app/REMOVE_TODO_ITEM';
const SET_TEXT = 'app/SET_TEXT';
const SET_MINUTES = 'app/SET_MINUTES';
const SET_SECONDS = 'app/SET_SECONDS';
const MARK_AS_DONE = 'app/MARK_AS_DONE';
const CLEAR_COMPLETED = 'app/CLEAR_COMPLETED';
const SET_UPDATE_DEADLINE = 'app/SET_UPDATE_DEADLINE';

const initialState = {
	todos: [
		{
			id: 1,
			value: 'drink coffee',
			done: false,
			date: Date.now(),
			deadLine: { minutes: 30, seconds: 0 },
		},
		{
			id: 2,
			value: 'learn react docs',
			done: false,
			date: Date.now(),
			deadLine: { minutes: 30, seconds: 0 },
		},
		{
			id: 3,
			value: 'build awesome app',
			done: false,
			date: Date.now(),
			deadLine: { minutes: 30, seconds: 0 },
		},
	],
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

				action.setText('');
				action.setMinutes(0);
				action.setSeconds(0);

				return {
					...state,
					todos: [...state.todos, {
						id: Math.random() * 100,
						value: action.text,
						done: false,
						date: Date.now(),
						deadLine: {
							minutes: action.minutes,
							seconds: action.seconds,
						},
					}],
				};
			}

			return state;
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

		default:
			return state;
	}
};


export const createTodoItem = (event, text, minutes, seconds, setText, setMinutes, setSeconds) => (
	{ type: CREATE_TODO_ITEM, event, text, minutes, seconds, setText, setMinutes, setSeconds }
);
export const removeTodoItem = id => ({ type: REMOVE_TODO_ITEM, id });
export const markAsDone = id => ({ type: MARK_AS_DONE, id });
export const clearCompleted = () => ({ type: CLEAR_COMPLETED });
export const setUpdateDeadline = (id, minutes, seconds) => ({ type: SET_UPDATE_DEADLINE, id, minutes, seconds });

export default appReducer;