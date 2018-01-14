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
		this.computeTracks = this.computeTracks.bind(this);
	}

	computeTracks() {
		var flaten = []
		var quit = false
		this.props.trains.forEach(function(item){
			if(item.startTime && item.endTime){
				flaten.push({
					time: item.startTime,
					type: 's'
				},{
					time: item.endTime,
					type: 'e'
				})
			}else{
				alert('Please enter all times!!')
				quit = true
			}
		})
		if(quit){
			return
		}
		flaten.sort((a, b) => {
			return new Date ('1/1/1999 ' + a.time) - new Date ('1/1/1999 ' + b.time)
		})
		var overlapItemCount = [], index = 0, counter = 0
		flaten.forEach(function(item){
			if(item.type == 's'){
				counter++;
				overlapItemCount[index] = counter;
			}else{
				counter--;
			}
			if(counter == 0){
				index++;
			}
		})
		alert('Minimum number of tracks required is ' + Math.max.apply(null ,overlapItemCount));
	}

	render(){   
		return <div>
			<div className={`${styles.dashboard}`}>
				<div className={`${styles['left-pannel']}`}>
					<Engine></Engine>
					<Carriage></Carriage>
				</div>
				<div className={`${styles["right-board"]}`}>
					<Board></Board>
				</div>
			</div>
			<button onClick={this.computeTracks}>Compute Tracks</button>
		</div>
	}
}

const mapStateToProps = state => ({
	trains: state.board.trains
})

export default DragDropContext(HTML5Backend)(connect(mapStateToProps)(Dashboard))

export const DASHBOARD_PATH = '/'