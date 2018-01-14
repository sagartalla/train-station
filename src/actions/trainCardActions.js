export function updateArrivalTime(value) {
	return {
		type: 'UPDATE_ARRIVAL',
		payload: {
			startTime: value
		}
	}	
}

export function updateDepartureTime(value) {
	return {
		type: 'UPDATE_DEPARTURE',
		payload: {
			endTime: value
		}
	}	
}

export function AddCarriage() {
	return {
		type: 'ADD_CARRIAGE'
	}
}