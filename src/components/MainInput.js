import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addItem } from '../actions';

class MainInput extends Component {
	state = {
		value: '',
	}
	onChange = e => {
		this.setState({value: e.target.value})
	}
	onSubmit = e => {
		e.preventDefault();
		this.props.addItem(this.state.value, this.props.activeDate);
		this.setState({value: ''});
	}
	render() {
		return (
			<div className="main-input-container">
				<form className="main-input" onSubmit={this.onSubmit}>
					<input
						type="text"
						placeholder={"What did you do today?"}
						onChange={this.onChange}
						value={this.state.value}
						autoFocus={true} />
				</form>
				<div className="active-date">Selected date: {this.props.activeDate}</div>
			</div>
			
		);
	}
};

const mapState = state => ({activeDate: state.activeDate});

export default connect(mapState, { addItem })(MainInput);


