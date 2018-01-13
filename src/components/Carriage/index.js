import React, { Component } from 'react'
import styles from '../../stylus/carriage.styl'
import Draggable from '../Draggable'
export default class Carriage extends Component {
	render() {
		return (
			<Draggable id="carriage">
				<div className={`${styles.carriage}`}>
					carrieage
				</div>
			</Draggable>
		)
	}
}