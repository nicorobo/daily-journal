import React, { Component } from 'react';
import styled from 'styled-components';
import dayjs from 'dayjs';
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
				<DayItems>
					{day.items.map(i => <Item key={i.id} item={i} />)}
				</DayItems>
			</StyledDay>
		);
	}
}
