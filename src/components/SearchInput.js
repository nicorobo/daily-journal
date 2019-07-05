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

export const SearchInput = ({ searchText, changeSearchText, changeInputMode }) => {
	console.log(searchText);
	const onChange = (e) => {
		changeSearchText(e.target.value);
	};
	const onSubmit = (e) => {
		e.preventDefault();
	};
	return (
		<Container>
			<form className="main-input" onSubmit={onSubmit}>
				<Input
					type="text"
					placeholder={`Enter a search term...`}
					onChange={onChange}
					value={searchText}
					autoFocus={true}
				/>
			</form>
			<InputFooter>
				<button onClick={() => changeInputMode('journal')}>Journal Mode</button>
			</InputFooter>
		</Container>
	);
};
