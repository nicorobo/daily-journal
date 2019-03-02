import React, { Component } from 'react';
import dayjs from 'dayjs';
import store from '../store';
import { Provider } from 'react-redux';
import styled from 'styled-components';
import List from './List';
import MainInput from './MainInput';

const Container = styled.div`
	display: flex;
	height: 100%;
	flex-direction: column;
	align-items: center;
`;

class App extends Component { 
	render() {
		return (
			<Provider store={store}>
				<Container>
					<List />
					<MainInput />
				</Container>
			</Provider>
		);
	}
}

export default App;
