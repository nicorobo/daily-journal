import React, { Component } from 'react';
import { connect } from 'react-redux';
import { deleteItem } from '../actions';

class Item extends Component {
	render() {
		const { content, created } = this.props.item;
		return (
			<div className="item">{content}</div>
		);
	}
}

export default connect(null, { deleteItem })(Item);
