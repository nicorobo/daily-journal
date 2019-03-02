import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Draggable } from 'react-beautiful-dnd';
import styled from 'styled-components';
import { deleteItem } from '../actions';

const Container = styled.div`

`;

class Item extends Component {
	render() {
		const { id, content, created } = this.props.item;
		return (
			<Draggable draggableId={id.toString()} index={this.props.index}>
				{(provided, snapshot) => (
					<Container 
						ref={provided.innerRef}
						{...provided.draggableProps}
						{...provided.dragHandleProps}
					>
						{content}
					</Container>
				)}
			</Draggable>
		);
	}
}

export default connect(null, { deleteItem })(Item);
