import React, { Component } from 'react'
import { connect } from 'react-redux'

import Engine from '../../components/Engine'
import Carriage from '../../components/Carriage'
import Board from '../../components/Board'

import styles from '../../stylus/dashboard.styl'

import HTML5Backend from 'react-dnd-html5-backend';
import { DragDropContext } from 'react-dnd';

class Dashboard extends React.Component {
	
	constructor(props) {
		super(props);
		// this.state = {date: new Date()};
	}

	render(){   
		return <div className={`${styles.dashboard}`}>
			<div className={`${styles['left-pannel']}`}>
				<Engine></Engine>
				<Carriage></Carriage>
			</div>
			<div className={`${styles["right-board"]}`}>
				<Board></Board>
			</div>
		</div>
	}
}

const mapStateToProps = state => ({
	
})

export default DragDropContext(HTML5Backend)(connect(mapStateToProps)(Dashboard))

export const DASHBOARD_PATH = '/'