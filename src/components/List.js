import React, { Component } from 'react';
import dayjs from 'dayjs';
import { Day } from './Day';

export class List extends Component {
	render() {
		return (
			<div className="list">
				{this.props.days.map(d => (
					<Day day={Object.assign({}, d, {items: d.items.map(i => this.props.items[i])})} />
				))}
			</div>
		);
	}
}
