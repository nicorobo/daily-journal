import React, { Component } from 'react';
import dayjs from 'dayjs';
import styled from 'styled-components';


const Container = styled.div`
	margin: 1rem 0 1rem 0;
`;

const Input = styled.input`
	width: 80vw;
	max-width: 25rem;
	height: 1.5rem;
	border-radius: 5px;
	outline: none;
	padding: .2rem 1rem;
	font-size: 1rem;
	border: 1px solid #bbb;
	&:focus {
		border: 1px solid cornflowerblue;
	}
`;

const ActiveDate = styled.div`
	color: #333;
	font-weight: bold;
	font-size: .75rem;
	flex-grow: 1;
`;

const Thin = styled.span`
	color: #bbb;
	font-weight: 300;
`;

const InputFooter = styled.div`
	display: flex;
	margin-top: .5rem;
`;

const Today = styled.button`
	padding: .2rem 1rem;
`

export class MainInput extends Component {
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
		const { activeDate, changeActiveDate } = this.props;
		return (
			<Container>
				<form className="main-input" onSubmit={this.onSubmit}>
					<Input
						type="text"
						placeholder={`What did you do ${dayjs(activeDate).isSame(dayjs(), 'day') ? 'today' : dayjs(activeDate).format('MMMM D')}?`}
						onChange={this.onChange}
						value={this.state.value}
						autoFocus={true} />
				</form>
				<InputFooter>
					<ActiveDate>
						Date: <Thin>{dayjs(activeDate).format('MMMM D, YYYY')}</Thin>
					</ActiveDate>
					<Today onClick={() => changeActiveDate(dayjs().format('YYYY-MM-DD'))}>Today</Today>
				</InputFooter>
			</Container>
			
		);
	}
};


