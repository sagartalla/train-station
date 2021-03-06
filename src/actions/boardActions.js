export function AddNewTrain(){
	return {
		type: 'ADD_TRAIN',
		payload: {
			engines: 1,
			carriages: 0,
			startTime: null,
			endTime: null
		}
	}
}

export function AddCarriageToLastTrain() {
	return {
		type: 'ADD_CARRIAGE_TO_LAST_TRAIN'
	}
}

export function modifyTrainCard(index, action) {
	return {
		type: 'MODIFY_TRAIN_CARD',
		index,
		action
	}
}