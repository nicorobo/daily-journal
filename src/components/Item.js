import React, { Component } from 'react';
import { Draggable } from 'react-beautiful-dnd';
import styled from 'styled-components';

const Container = styled.div`
	display: flex;
	margin-top: .25rem;
	font-size: 0.9rem;
	color: #333;
	.spacer {
		flex-grow: 1;
	}
	.item-delete {
		display: none;
		padding: .1rem .75rem;
		cursor: pointer;
	}
	&:hover .item-delete {
		display: block;
	}
`;

export const Item = ({item, index, deleteItem}) => (
	<Draggable draggableId={item.id} index={index}>
		{(provided, snapshot) => {
			return (
			<Container 
				ref={provided.innerRef}
				{...provided.draggableProps}
			>
				<div className="item-content" {...provided.dragHandleProps}>{item.content}</div>
				<div className="spacer"></div>
				<button className="item-delete" onClick={deleteItem}>Delete</button>
			</Container>
		)}}
	</Draggable>
);
