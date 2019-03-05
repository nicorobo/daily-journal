import React, { Component } from 'react';
import { Draggable } from 'react-beautiful-dnd';
import styled from 'styled-components';

const Container = styled.div`
	display: flex;
	font-size: 0.9rem;
	margin-top: .25rem;
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

export class Item extends Component {
	render() {
		const { id, content, created } = this.props.item;
		return (
			<Draggable draggableId={id} index={this.props.index}>
				{(provided, snapshot) => {
					return (
					<Container 
						ref={provided.innerRef}
						{...provided.draggableProps}
					>
						<div className="item-content" {...provided.dragHandleProps}>{content}</div>
						<div className="spacer"></div>
						<button className="item-delete" onClick={this.props.deleteItem}>Delete</button>
					</Container>
				)}}
			</Draggable>
		);
	}
}
