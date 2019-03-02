import React, { Component } from 'react';
import { connect } from 'react-redux';
import dayjs from 'dayjs';
import styled from 'styled-components';
import { DragDropContext } from 'react-beautiful-dnd';
import { addDay, changeActiveDate, moveItem } from '../actions';
import { Day } from './Day';

const StyledList = styled.div`
	width: 50%;
	min-width: 500px;
`;

class List extends Component {
	onDragEnd = ({destination, source, draggableId}) => {
		if(!destination) return false;
		this.props.moveItem(source, destination);
	}
	render() {
		const { days, items, addDay, changeActiveDate } = this.props;
		return (
			<DragDropContext onDragEnd={this.onDragEnd}>
				<StyledList>
					{days.map(d => (
						<Day
							key={d.date}
							changeActiveDate={changeActiveDate}
							day={{...d, items: d.items.map(i => items[i])}} />
					))}
				</StyledList>
			</DragDropContext>
		);
	}
}

const mapState = state => ({days: state.days, items: state.items});

export default connect(mapState, { addDay, changeActiveDate, moveItem })(List);
