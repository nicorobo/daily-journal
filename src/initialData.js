import dayjs from 'dayjs';

const today = dayjs().format('YYYY-MM-DD');
const initialData = {
	activeDate: today,
	items: {
		'0': {
			id: '0',
			content: 'Ate lunch at Whole Foods',
			created: 1551215574767,
		},
		'1': {
			id: '1',
			content: 'Bought shoes at Nordstrom Rack',
			created: 1551215574762,
		},
		'2': {
			id: '2',
			content: 'Had yogurt and read for breakfast',
			created: 15512155747678,
		},
		'3': {
			id: '3',
			content: 'Worked on project at Book People',
			created: 1551215574767,
		},
		'4': {
			id: '4',
			content: 'Went on a hike at Great Hills Park',
			created: 1551215574762,
		},
		'5': {
			id: '5',
			content: 'Climbed and did yoga at ABP',
			created: 15512155747678,
		},
		'6': { id: '6', content: 'Ran and worked out', created: 1551215574762 },
		'7': {
			id: '7',
			content: 'Put music stuff on craigslist',
			created: 15512155747678,
		},
		'8': {
			id: '8',
			content: 'Chia seed bowl and soup at Central Market',
			created: 15512155747678,
		},
		'9': {
			id: '9',
			content: 'Did Ashtanga yoga at ABP',
			created: 1551215574762,
		},
		'10': {
			id: '10',
			content: 'Ate a Grove Winebar',
			created: 15512155747678,
		},
	},
	days: [
		{
			date: '2019-02-21',
			items: ['8', '9'],
		},
		{
			date: '2019-02-22',
			items: ['5', '6', '7', '10'],
		},
		{
			date: '2019-02-25',
			items: ['3', '4'],
		},
		{
			date: '2019-02-26',
			items: ['0', '1', '2'],
		},
	],
};

export default initialData;