import { combineReducers, createStore } from 'redux';
import appReducer from './reducers/app-reducer';

const rootReducer = combineReducers({
	app: appReducer,
})

type RootReducerType = typeof rootReducer;
export type AppStateType = ReturnType<RootReducerType>

const store = createStore(rootReducer);

export default store;