import React, { Component } from 'react';
import dayjs from 'dayjs';
import { Item } from './Item';

export class Day extends Component {
	render() {
		const { date, items } = this.props.day;
		return (
			<div className="day">
				<div className="day-name">{dayjs(date).format('MMMM D, YYYY')}</div>
				<div className="day-items">
					{items.map(i => <Item item={i} />)}
				</div>
			</div>
		);
	}
}
