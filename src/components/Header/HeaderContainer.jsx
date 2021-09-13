import { connect } from 'react-redux';
import {
	createTodoItem,
	setUserText,
	setUserMinutes,
	setUserSeconds,
} from '../../redux/reducers/app-reducer';

import Header from './Header';

const mapStateToProps = state => {
	return {
		text: state.app.text,
		minutes: state.app.minutes,
		seconds: state.app.seconds
	}
}

const HeaderContainer = connect(mapStateToProps, {
	setUserText,
	setUserMinutes,
	setUserSeconds,
	createTodoItem,
})(Header)

export default HeaderContainer;