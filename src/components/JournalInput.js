import React, { useState } from 'react';
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
	padding: 0.2rem 1rem;
	font-size: 1rem;
	border: 1px solid #bbb;
	&:focus {
		border: 1px solid cornflowerblue;
	}
`;

const ActiveDate = styled.div`
	color: #333;
	font-weight: bold;
	font-size: 0.75rem;
	flex-grow: 1;
`;

const Thin = styled.span`
	color: #bbb;
	font-weight: 300;
`;

const InputFooter = styled.div`
	display: flex;
	margin-top: 0.5rem;
`;

export const JournalInput = ({ addItem, activeDate, scrollTo, changeInputMode }) => {
	const [value, setValue] = useState('');
	const onChange = (e) => {
		setValue(e.target.value);
	};
	const onSubmit = (e) => {
		e.preventDefault();
		addItem(value, activeDate);
		scrollTo(activeDate, true);
		setValue('');
	};
	return (
		<Container>
			<form className="main-input" onSubmit={onSubmit}>
				<Input
					type="text"
					placeholder={`What did you do ${
						dayjs(activeDate).isSame(dayjs(), 'day')
							? 'today'
							: dayjs(activeDate).format('MMMM D')
					}?`}
					onChange={onChange}
					value={value}
					autoFocus={true}
				/>
			</form>
			<InputFooter>
				<ActiveDate>
					Date: <Thin>{dayjs(activeDate).format('MMMM D, YYYY')}</Thin>
				</ActiveDate>
				<button onClick={() => changeInputMode('search')}>Search Mode</button>
			</InputFooter>
		</Container>
	);
};
