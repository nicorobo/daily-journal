import React, { Component } from 'react';
import styled from 'styled-components';
import dayjs from 'dayjs';
import { connect } from 'react-redux';
import { Droppable } from 'react-beautiful-dnd';
import { Item } from './Item';
import { deleteItem } from '../actions';

const StyledDay = styled.div`
	margin-bottom: 0.5rem;
`;

const DayName = styled.div`
	display: inline;
	color: #4b5392;
	font-weight: ${(props) => (props.active ? 'bold' : '400')};
	font-size: 0.75rem;
	cursor: pointer;
`;

const DayOfWeek = styled.span`
	font-weight: 400;
	color: #bbb;
`;

const DayItems = styled.div`
	margin: 0.25rem 0 0 2rem;
`;

class Day extends Component {
	handleClick = () => {
		const { day, changeActiveDate, scrollTo } = this.props;
		scrollTo(day.date);
		changeActiveDate(day.date);
	};
	render() {
		const { day, activeDate } = this.props;
		return (
			<StyledDay id={day.date}>
				<DayName active={activeDate === day.date} onClick={this.handleClick}>
					{dayjs(day.date).format('MMMM D, YYYY')}
					<DayOfWeek> ({dayjs(day.date).format('dddd')})</DayOfWeek>
				</DayName>
				<Droppable droppableId={day.date}>
					{(provided, snapshot) => (
						<DayItems ref={provided.innerRef} {...provided.droppableProps}>
							{day.items.map((item, i) => (
								<Item
									key={item.id}
									index={i}
									item={item}
									deleteItem={() => this.props.deleteItem(item.id, day.date)}
								/>
							))}
							{provided.placeholder}
						</DayItems>
					)}
				</Droppable>
			</StyledDay>
		);
	}
}

const mapState = (state) => ({ activeDate: state.activeDate });

export default connect(
	mapState,
	{ deleteItem }
)(Day);
