import React from 'react';
import { Draggable } from 'react-beautiful-dnd';
import styled from 'styled-components';

const Container = styled.div`
	display: flex;
	margin-top: 0.25rem;
	font-size: 0.9rem;
	color: #333;
	.item-content {
		word-break: break-all;
	}
	.item-delete {
		visibility: hidden;
		padding: 0.1rem 0.75rem;
		cursor: pointer;
		height: 19px;
	}
	&:hover .item-delete {
		visibility: visible;
	}
`;

const Spacer = styled.div`
	flex-grow: 1;
`;

export const Item = ({ item, index, deleteItem }) => (
	<Draggable draggableId={item.id} index={index}>
		{(provided, snapshot) => {
			return (
				<Container ref={provided.innerRef} {...provided.draggableProps}>
					<div className="item-content" {...provided.dragHandleProps}>
						{item.content}
					</div>
					<Spacer />
					<button className="item-delete" onClick={deleteItem}>
						Delete
					</button>
				</Container>
			);
		}}
	</Draggable>
);
