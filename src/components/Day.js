import React, { Component } from 'react';
import dayjs from 'dayjs';
import Item from './Item';

export class Day extends Component {
	render() {
		const { day, changeActiveDate } = this.props;
		return (
			<div className="day">
				<div className="day-name" onClick={() => changeActiveDate(day.date)}>{dayjs(day.date).format('MMMM D, YYYY')}</div>
				<div className="day-items">
					{day.items.map(i => <Item key={i.id} item={i} />)}
				</div>
			</div>
		);
	}
}
