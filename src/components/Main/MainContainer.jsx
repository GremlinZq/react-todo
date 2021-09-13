import { connect } from 'react-redux';
import Main from './Main';
import { clearCompleted, markAsDone, removeTodoItem } from '../../redux/reducers/app-reducer';

const mapStateToProps  = state => {
	return {
		todos: state.app.todos,
	}
}

const MainContainer = connect(mapStateToProps, { markAsDone, clearCompleted, removeTodoItem })(Main)

export default MainContainer;