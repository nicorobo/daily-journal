import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { DragDropContext } from 'react-beautiful-dnd';
import { scroller } from 'react-scroll';
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
	scrollTo = (to) => {
		console.log('scrolling to: ', to);
		scroller.scrollTo(to, {
			duration: 400,
			smooth: true,
			containerId: 'day-list',
			offset: -20,
		});
	};
	render() {
		return (
			<DragDropContext onDragEnd={this.onDragEnd}>
				<Container>
					<List
						days={this.props.days}
						items={this.props.items}
						changeActiveDate={this.props.changeActiveDate}
						scrollTo={this.scrollTo}
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
						scrollTo={this.scrollTo}
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
