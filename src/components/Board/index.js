import React, { Component } from 'react'
import styles from '../../stylus/board.styl'
import Droppable from '../Droppable'
import {AddNewTrain, AddCarriageToLastTrain} from  '../../actions/boardActions'
import TrainCard from '../TrainCard'
import { connect } from 'react-redux'

class Board extends Component {
	
	constructor(props){
		super(props)
		this.dropHandle = this.dropHandle.bind(this)
		this.canDrop = this.canDrop.bind(this)
	}

	componentWillReceiveProps(nextProps){
		console.log('componentWillReceiveProps', nextProps)
	}

	canDrop({item}){
		return true
	}

	dropHandle({item}){
		// console.log('dropHandle', item)
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
		return (
			<div className={`${styles.board}`}>
				<Droppable id="board" className={`${styles["drop-container"]}`} hoverClass={`${styles["hover-class"]}`} dropHandle={this.dropHandle} canDrop={this.canDrop}>
					{
						trains.map((train, index) =>{
							console.log('render', train, index)
							return <TrainCard key={index} trainInfo={train}/>
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
