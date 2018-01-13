export default (state = {}, action ) => {
	//here state is a train
	switch (action.type) {
		// case 'ADD_TRAIN':
		// 	var trains = state.trains ? state.trains.slice(0) : [];
		// 	return {...state, 
		// 		trains: trains.concat([], action.payload),
		// 		error: false
		// 	};
		case 'UPDATE_ARRIVAL': 
			return {...state, 
				startTime: action.payload.startTime
			};
		break;
		case 'UPDATE_DEPARTURE':
			return {...state, 
				endTime: action.payload.endTime
			};
		break;
		default:
			return state
	}
}
