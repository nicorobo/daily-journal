import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { DragDropContext } from 'react-beautiful-dnd';
import { addItem, moveItem, changeActiveDate } from '../actions';
import { List } from './List';
import { MainInput } from './MainInput';
import { Calendar } from './Calendar';

const Container = styled.div`
	display: flex;
	height: 100vh;
	flex-direction: column;
	align-items: center;
`;

class App extends Component {
	onDragEnd = ({ destination, source }) => {
		if (!destination) return false;
		this.props.moveItem(source, destination);
	};
	render() {
		return (
			<DragDropContext onDragEnd={this.onDragEnd}>
				<Container>
					<List
						days={this.props.days}
						items={this.props.items}
						changeActiveDate={this.props.changeActiveDate}
					/>
					<MainInput
						addItem={this.props.addItem}
						activeDate={this.props.activeDate}
						changeActiveDate={this.props.changeActiveDate}
					/>
					<Calendar
						days={this.props.days}
						activeDate={this.props.activeDate}
						changeActiveDate={this.props.changeActiveDate}
					/>
				</Container>
			</DragDropContext>
		);
	}
}

const mapState = (state) => ({
	days: state.days,
	items: state.items,
	activeDate: state.activeDate,
});

export default connect(
	mapState,
	{ changeActiveDate, addItem, moveItem }
)(App);
