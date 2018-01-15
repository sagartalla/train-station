import React, { Component } from 'react'
import styles from '../../stylus/board.styl'
import Droppable from '../Droppable'
import {AddNewTrain, AddCarriageToLastTrain, modifyTrainCard} from  '../../actions/boardActions'
import TrainCard from '../TrainCard'
import { connect } from 'react-redux'

class Board extends Component {
	
	constructor(props){
		super(props)
		this.dropHandle = this.dropHandle.bind(this)
		this.canDrop = this.canDrop.bind(this)
	}

	canDrop({item}){
		return true
	}

	dropHandle({item, props, monitor}){
		if(monitor.didDrop()){
			return
		}
		switch (item.id) {
			case 'engine':
				this.props.dispatch(AddNewTrain())
				break;
			case 'carriage':
				this.props.dispatch(AddCarriageToLastTrain())
				break;
		}		
		
	}

	render() {
		const {trains = [], error} = this.props.board
		const dispatch = this.props.dispatch
		return (
			<div className={`${styles.board}`}>
				<Droppable id="board" className={`${styles["drop-container"]}`} hoverClass={`${styles["hover-class"]}`} dropHandle={this.dropHandle} canDrop={this.canDrop}>
					{
						trains.map((train, index) =>{
							return <TrainCard key={index} trainInfo={train} dispatch={action =>
										dispatch(modifyTrainCard(index, action))
									}/>
						})
					}
					{(()=>{
						if(error){
							alert(error);
						}
					})()}
				</Droppable>
				<div className={`${styles["drop-title"]}`}>Drag drop elements here to create train</div>
			</div>
		)
	}
}


const mapStateToProps = state => ({
	board: state.board
})

export default connect(mapStateToProps)(Board)
