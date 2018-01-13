import React, { Component } from 'react'
import { DropTarget } from 'react-dnd';
import classNames from 'classnames'

const Types = {
	Droppable: 'droppable'
};


const Target = {

	// canDrop(props, monitor) {
	// 	console.log('canDrop', props, monitor)
	// 	// const item = monitor.getItem();
	// 	return true
	// },

	// hover(props, monitor, component) {
	// 	console.log('hover', props, monitor, component)
	// 	const isJustOverThisOne = monitor.isOver();
	// 	const canDrop = monitor.canDrop();
	// },

	drop(props, monitor) {
		props.dropHandle({
			item: monitor.getItem()
		})
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
	componentWillReceiveProps(nextProps) {
		console.log('componentWillReceiveProps', nextProps)
	}
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
