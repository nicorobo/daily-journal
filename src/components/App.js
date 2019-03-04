import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { DragDropContext } from 'react-beautiful-dnd';
import { moveItem } from '../actions';
import List from './List';
import MainInput from './MainInput';

const Container = styled.div`
	display: flex;
	height: 100%;
	flex-direction: column;
	align-items: center;
`;

class App extends Component { 
	onDragEnd = ({destination, source, draggableId}) => {
		if(!destination) return false;
		this.props.moveItem(source, destination);
	}
	render() {
		return (
			<DragDropContext onDragEnd={this.onDragEnd}>
				<Container>
					<List />
					<MainInput />
				</Container>
			</DragDropContext>
		);
	}
}

export default connect(null, { moveItem })(App);
