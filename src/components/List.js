import React, { Component } from 'react';
import { connect } from 'react-redux';
import dayjs from 'dayjs';
import { addDay, changeActiveDate } from '../actions';
import { Day } from './Day';

class List extends Component {
	render() {
		const { days, items, addDay, changeActiveDate } = this.props;
		return (
			<div className="list">
				{days.map(d => (
					<Day
						key={d.date}
						changeActiveDate={changeActiveDate}
						day={{...d, items: d.items.map(i => items[i])}} />
				))}
			</div>
		);
	}
}

const mapState = state => ({days: state.days, items: state.items});

export default connect(mapState, { addDay, changeActiveDate })(List);
