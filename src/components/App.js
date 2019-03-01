import React, { Component } from 'react';
import dayjs from 'dayjs';
import store from '../store';
import { Provider } from 'react-redux';
import List from './List';
import MainInput from './MainInput';

class App extends Component { 
	render() {
		return (
			<Provider store={store}>
				<div className="app">
					<List />
					<MainInput />
				</div>
			</Provider>
		);
	}
}

export default App;
