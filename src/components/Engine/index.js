import React, { Component } from 'react'
import styles from '../../stylus/engine.styl'
import Draggable from '../Draggable'

export default class Engine extends Component {
	render() {
		return (
			<Draggable id="engine">
				<div className={`${styles.engine}`}>
					engine
				</div>
			</Draggable>
		)
	}
}
