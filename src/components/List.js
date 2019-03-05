import React, { Component } from 'react';
import styled from 'styled-components';
import Day from './Day';

const StyledList = styled.div`
	display: flex;
	flex-direction: column;
	margin-top: 1rem;
	width: 50%;
	min-width: 500px;
	flex-grow: 1;
	overflow-y: auto;
`;

const Spacer = styled.div`
	flex-grow: 1;
`;

export class List extends Component {
	render() {
		const { days, items, changeActiveDate } = this.props;
		return (
			<StyledList>
				<Spacer />
				{days.map(d => {
					if (d.items.length === 0) return false;
					return (
						<Day
							key={d.date}
							changeActiveDate={changeActiveDate}
							day={{...d, items: d.items.map(i => items[i])}} 
						/>
					);
				})}
			</StyledList>
		);
	}
}
