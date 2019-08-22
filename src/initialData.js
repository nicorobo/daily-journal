import dayjs from 'dayjs';

const today = dayjs().format('YYYY-MM-DD');
const todayUnix = dayjs().valueOf();
const initialData = {
	activeDate: today,
	items: {
		'0': {
			id: '0',
			content: 'Began keeping track of my days with Daily Journal!',
			created: todayUnix,
		},
	},
	days: [
		{
			date: today,
			items: ['0'],
		},
	],
};

export default initialData;
