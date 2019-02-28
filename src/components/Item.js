import React, { Component } from 'react';

export class Item extends Component {
	render() {
		const { content, created } = this.props.item;
		return (
			<div className="item">{content}</div>
		);
	}
}
