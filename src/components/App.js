import React, { Component } from 'react';
import dayjs from 'dayjs';
import { List } from './List';
import { TextInput } from './TextInput';

class App extends Component {
  state = {
    items: [
      {content: 'Ate lunch at Whole Foods', created: 1551215574767},
      {content: 'Bought shoes at Nordstrom Rack', created: 1551215574762},
      {content: 'Had yogurt and read for breakfast', created: 15512155747678},
      {content: 'Worked on project at Book People', created: 1551215574767},
      {content: 'Went on a hike at Great Hills Park', created: 1551215574762},
      {content: 'Climbed and did yoga at ABP', created: 15512155747678},
      {content: 'Ran and worked out', created: 1551215574762},
      {content: 'Put music stuff on craigslist', created: 15512155747678},
    ],
    days: [
      {
        date: '2019-02-21',
        items: [2, 6]
      },
      {
        date: '2019-02-22',
        items: [5, 6, 7]
      },
      {
        date: '2019-02-25',
        items: [3, 4]
      },
      {
        date: '2019-02-26',
        items: [0, 1, 2]
      }
    ]
  }

  createToday() {
    const { days } = this.state;
    const today = dayjs().format('YYYY-MM-DD');
    console.log('new day');
    return [
      ...days,
      {date: today, items: []}
    ];
  }

  addItemToToday(days, itemIndex) {
    const todayIndex = days.length - 1;
    return [
      ...days.slice(0, todayIndex),
      Object.assign({}, days[todayIndex], {items: [...days[todayIndex].items, itemIndex]})
    ];
  }

  addItem(content) {
    const { days, items } = this.state;
    const todayExists = days[days.length - 1].date === dayjs().format('YYYY-MM-DD');

    this.setState({
      items: [
        ...items,
        {content, created: Date.now()}
      ],
      days: this.addItemToToday((todayExists ? days : this.createToday()), items.length),
    });
  }

  render() {
    return (
      <div className="App">
        <List days={this.state.days} items={this.state.items} />
        <TextInput addItem={this.addItem.bind(this)} />
      </div>
    );
  }
}

export default App;
