import React, { Component } from 'react'
import { DropTarget } from 'react-dnd';
import classNames from 'classnames'

const Types = {
	Droppable: 'droppable'
};


const Target = {

	canDrop(props, monitor) {
		return props.canDrop({
			item: monitor.getItem()
		})
	},

	// hover(props, monitor, component) {
	// 	console.log('hover', props, monitor, component)
	// 	const isJustOverThisOne = monitor.isOver();
	// 	const canDrop = monitor.canDrop();
	// },

	drop(props, monitor) {
		props.dropHandle({
			item: monitor.getItem(),
			props,
			monitor
		})
		return {
			item: monitor.getItem()
		}
	}
};

function collect(connect, monitor) {
	return {
		connectDropTarget: connect.dropTarget(),
		isOver: monitor.isOver(),
		isOverCurrent: monitor.isOver({ shallow: true }),
		canDrop: monitor.canDrop(),
		itemType: monitor.getItemType()
	};
}

class Droppable extends Component {
	render() {
		const {className, isOver, connectDropTarget, hoverClass} = this.props;
		var obj = {}
		obj[hoverClass] = isOver
		return connectDropTarget(
			<div className={classNames(className, obj)}>
				{this.props.children}
			</div>
		)
	}
}

export default DropTarget('draggable', Target, collect)(Droppable);
