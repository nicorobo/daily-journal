import React, { Component } from 'react';
import styled from 'styled-components';
import dayjs from 'dayjs';
import { Droppable } from 'react-beautiful-dnd';
import Item from './Item';

const StyledDay = styled.div`
	margin-bottom: .5rem;
`;

const DayName = styled.div`
	color: #BA4141;
	font-weight: bold;
	font-size: .8rem;
	cursor: pointer;
`;

const DayItems = styled.div`
	margin: .25rem 0 0 2rem;
`;

export class Day extends Component {
	render() {
		const { day, changeActiveDate } = this.props;
		return (
			<StyledDay>
				<DayName onClick={() => changeActiveDate(day.date)}>
					{dayjs(day.date).format('MMMM D, YYYY')}
				</DayName>
				<Droppable droppableId={day.date}>
					{(provided, snapshot) => (
						<DayItems
							ref={provided.innerRef} 
							{...provided.droppableProps}
						>
							{day.items.map((item, i) => <Item key={item.id} index={i} item={item} />)}
							{provided.placeholder}
						</DayItems>
					)}
				</Droppable>
			</StyledDay>
		);
	}
}
