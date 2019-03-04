import React from 'react';
import styled from 'styled-components';
import dayjs from 'dayjs';
import CalendarHeatmap from 'react-calendar-heatmap';
import ReactTooltip from 'react-tooltip';
import 'react-calendar-heatmap/dist/styles.css';

const CalendarContainer = styled.div`
	width: 50vw;
	min-width: 550px;
	.day-color-0 {
		fill: #eee;
	}
	.day-color-1 {
		fill: rgba(140, 198, 101, 0.5);
	}
	.day-color-2 {
		fill: rgba(140, 198, 101, 0.75);
	}
	.day-color-3 {
		fill: rgba(140, 198, 101, 1);
	}
`

const getYear = (days, start, end) => {
	const dayDictionary = days.reduce((dict, day) => ({...dict, [day.date]: day}), {});
	let counter = start;
	const allDays = [];
	while (counter.isBefore(end)) {
		const date = counter.format('YYYY-MM-DD');
		allDays.push(dayDictionary[date] || {date, items: []});
		counter = counter.add(1, 'day');
	};
	const lastDate = end.format('YYYY-MM-DD');
	allDays.push(dayDictionary[lastDate] || {lastDate, items: []});
	return allDays;
}

const getClassForValue = (value) => {
	const items = (value && value.items) || [];
	if (items.length >= 10) return 'day-color-3';
	else if (items.length >= 5) return 'day-color-2';
	else if (items.length > 0) return 'day-color-1';
	return 'day-color-0';
}

export const Calendar = ({days, activeDate, changeActiveDate}) => {
	const start = dayjs().subtract(1, 'year');
	const end = dayjs();
	const year = getYear(days, start, end);
	return (
		<CalendarContainer>
			<CalendarHeatmap
				startDate={start.format('YYYY-MM-DD')}
				endDate={end.format('YYYY-MM-DD')}
				onClick={({date}) => changeActiveDate(date)}
				classForValue={getClassForValue}
				tooltipDataAttrs={value => ({'data-tip': dayjs(value.date).format('MMMM D, YYYY')})}
				values={year} />
			<ReactTooltip />
		</CalendarContainer>
	);
}