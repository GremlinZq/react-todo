import React from 'react';
import PropTypes from 'prop-types';
import './Clear-completed.css';

const ClearCompleted = props => {
	const { clearCompleted } = props;

	return <button type='button' className="clear-completed" onClick={clearCompleted}>Clear completed</button>
}

ClearCompleted.defaultProps = {
	clearCompleted: () => {},
}

ClearCompleted.propTypes = {
	clearCompleted: PropTypes.func
}

export default ClearCompleted;