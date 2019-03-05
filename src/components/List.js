import React, { Component } from 'react';
import styled from 'styled-components';
import Day from './Day';

const StyledList = styled.div`
	display: flex;
	flex-direction: column;
	flex-grow: 1;
	width: 50%;
	min-width: 500px;
	margin-top: 1rem;
	overflow-y: auto;
`;

const Spacer = styled.div`
	flex-grow: 1;
`;

export const List = ({ days, items, changeActiveDate }) => (
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