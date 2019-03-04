import React, { Component } from 'react';
import styled from 'styled-components';
import Day from './Day';

const StyledList = styled.div`
	width: 50%;
	min-width: 500px;
	flex-grow: 1;
`;

export class List extends Component {
	render() {
		const { days, items, changeActiveDate } = this.props;
		return (
			<StyledList>
				{days.map(d => (
					<Day
						key={d.date}
						changeActiveDate={changeActiveDate}
						day={{...d, items: d.items.map(i => items[i])}} />
				))}
			</StyledList>
		);
	}
}
