import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import store from './redux/store';
import App from './App/App';
import './index.css';

render(
	<Provider store={store}>
		<Router>
			<App />
		</Router>
	</Provider>,
	document.querySelector('#root'),
);