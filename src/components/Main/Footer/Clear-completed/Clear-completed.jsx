import './Clear-completed.css';

const ClearCompleted = props => {
	const { clearCompleted } = props;

	return <button className="clear-completed" onClick={clearCompleted}>Clear completed</button>
}

export default ClearCompleted;