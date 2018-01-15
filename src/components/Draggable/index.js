import React, { Component } from 'react'
import { DragSource } from 'react-dnd'

const DraggableSource = {
	beginDrag(props) {
		// Return the data describing the dragged item
		const item = { id: props.id };
		return item;
	},

	// endDrag(props, monitor, component) {
	// 	console.log('endDrag', props, monitor, component)
	// 	if (!monitor.didDrop()) {
	// 		return;
	// 	}

	// 	// When dropped on a compatible target, do something
	// 	const item = monitor.getItem();
	// 	const dropResult = monitor.getDropResult();
	// 	console.log('endDrag2', dropResult)
	// 	// DraggableActions.moveDraggableToList(item.id, dropResult.listId);
	// }
};

function collect(connect, monitor) {
	return {
		// Call this function inside render()
		// to let React DnD handle the drag events:
		connectDragSource: connect.dragSource(),
		// You can ask the monitor about the current drag state:
		isDragging: monitor.isDragging()
	};

}


class Draggable extends Component {
	render() {
		const { id } = this.props;
		const { isDragging, connectDragSource } = this.props;
		return connectDragSource(
			<div>
				{this.props.children}
			</div>
		)
	}
}

export default DragSource('draggable', DraggableSource, collect)(Draggable);
