import React, { Component } from 'react'
import {updateArrivalTime, updateDepartureTime} from '../../actions/trainCardActions.js'
import styles from '../../stylus/train.styl'
// import engineStyl from '../../stylus/engine.styl'
// import carriageStyl from '../../stylus/carriage.styl'

export default class TrainCard extends Component {
	constructor(props) {
		super(props)
		this.arrivalTimeChange = this.arrivalTimeChange.bind(this)
		this.departureTimeChange = this.departureTimeChange.bind(this)
	}

	arrivalTimeChange(value){
		this.props.dispatch(updateArrivalTime(value))
	}

	departureTimeChange(value){
		this.props.dispatch(updateDepartureTime(value))
	}

	render() {
		const {engines, carriages, startTime, endTime} = this.props.trainInfo
		return (
			<div className={`${styles['card-container']}`}>
				<div className={`${styles.engine}`}>E</div>
				{(()=>{
					var dom = []
					var count = carriages > 2 ? 2 : carriages;
					for(var i = 0; i < count; i++) {
						dom.push(<div key={i} className={`${styles.carriage}`}>C</div>)
					}
					return dom
				})()}
				{(()=>{
					var dom = null
					if(carriages > 2){
						dom = <span className={`${styles.more}`}>{`${carriages - 2}`} more carriages...</span>
					}
					return dom
				})()}

				<div className={`${styles.rightside}`}>
					<label className={`${styles.label}`}>
						Arrival Time
						<input name={"arrival"} type={'text'} type={"time"} value={startTime} onChange={e => this.arrivalTimeChange(e.target.value)}/> 
					</label>
					<label className={`${styles.label}`}>
						Depature Time
						<input name={"departure"} type={'text'} type={"time"} value={endTime} onChange={e => this.departureTimeChange(e.target.value)}/> 
					</label>
				</div>
			</div>
		)
	}
}