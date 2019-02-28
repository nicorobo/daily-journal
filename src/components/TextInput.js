import React, { Component } from 'react';

export class TextInput extends Component {
	state = {
		value: '',
	}
	addItem(e) {
		e.preventDefault();
		this.props.addItem(this.state.value);
		this.setState({value: ''});
	}
	onChange(e) {
		this.setState({value: e.target.value})
	}
	render() {
		return (
			<form className="text-input" onSubmit={this.addItem.bind(this)}>
				<input
					type="text"
					placholder={"What did you do today?"}
					onChange={this.onChange.bind(this)}
					value={this.state.value}
					autoFocus="true" />
			</form>
		);
	}
}
