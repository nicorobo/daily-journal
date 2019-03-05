import React from 'react';
import styled from 'styled-components';
import dayjs from 'dayjs';
import CalendarHeatmap from 'react-calendar-heatmap';
import ReactTooltip from 'react-tooltip';
import 'react-calendar-heatmap/dist/styles.css';

const CalendarContainer = styled.div`
	margin-bottom: 1rem;
	width: 50vw;
	min-width: 640px;
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
`;

//Format dayjs object as 1994-05-26
const format = (d) => d.format('YYYY-MM-DD');

// In order for the calendar's onClick handler to return the date, its 'values'
// prop must contain that date. We only store days that have (or have had) items
// in them, so we create an array with empty day objects except where we already
// have data for the day. Now you can change active date using the calendar, even
// on days that don't currently have items.
const getYear = (days, start, end) => {
	const daysByDate = days.reduce(
		(dict, day) => ({ ...dict, [day.date]: day }),
		{}
	);
	let counter = start;
	const year = [];
	while (counter.isBefore(end)) {
		const date = format(counter);
		year.push(daysByDate[date] || { date, items: [] });
		counter = counter.add(1, 'day');
	}
	// Adding the last day (could avoid by adding dayjs.isBeforeOrSame() plugin)
	const date = format(end);
	year.push(daysByDate[date] || { date, items: [] });
	return year;
};

const getClassForValue = (value) => {
	const items = (value && value.items) || [];
	if (items.length >= 10) return 'day-color-3';
	else if (items.length >= 5) return 'day-color-2';
	else if (items.length > 0) return 'day-color-1';
	return 'day-color-0';
};

export const Calendar = ({ days, activeDate, changeActiveDate }) => {
	const start = dayjs().subtract(1, 'year');
	const end = dayjs();
	const year = getYear(days, start, end);
	return (
		<CalendarContainer>
			<CalendarHeatmap
				startDate={format(start)}
				endDate={format(end)}
				onClick={({ date }) => changeActiveDate(date)}
				classForValue={getClassForValue}
				tooltipDataAttrs={(value) => ({
					'data-tip': dayjs(value.date).format('MMMM D, YYYY'),
				})}
				values={year}
			/>
			<ReactTooltip />
		</CalendarContainer>
	);
};
