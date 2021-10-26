import React from 'react';
import './ClearCompleted.css';

interface Props {
  clearCompleted: () => void
}

const ClearCompleted: React.FC<Props> = ({ clearCompleted }): JSX.Element => (
  <button type='button' className='clear-completed' onClick={clearCompleted}>Clear completed</button>
);
export default ClearCompleted;