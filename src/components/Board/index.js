import React, { Component } from 'react'
import styles from '../../stylus/board.styl'
import Droppable from '../Droppable'

export default class Board extends Component {
	
	constructor(props){
		super(props)
		this.dropHandle = this.dropHandle.bind(this)
	}

	dropHandle({item}){
		console.log('dropHandle', item)
	}

	render() {
		return (
			<div className={`${styles.board}`}>
				<Droppable id="board" className={`${styles["drop-container"]}`} hoverClass={`${styles["hover-class"]}`} dropHandle={this.dropHandle}></Droppable>
				<div className={`${styles["drop-title"]}`}>Drag drop elements here to create train</div>
			</div>
		)
	}
}
