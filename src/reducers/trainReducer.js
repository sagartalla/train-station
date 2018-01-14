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
			if(state.endTime && (new Date ('1/1/1999 ' + state.startTime) > new Date ('1/1/1999 ' + action.payload.endTime))){
				return {...state,
					timeError: 'arrival time should be less than arrival time'
				};
			}
			return {...state, 
				startTime: action.payload.startTime,
				timeError: false
			};
		break;
		case 'UPDATE_DEPARTURE':
			if(state.startTime && (new Date ('1/1/1999 ' + state.startTime) > new Date ('1/1/1999 ' + action.payload.endTime))){
				return {...state,
					timeError: 'depart time should be grater than arrival time'
				};
			}
			return {...state, 
				endTime: action.payload.endTime,
				timeError: false
			};
		break;
		case 'ADD_CARRIAGE': 
			return {...state,
				carriages: state.carriages + 1
			}
		default:
			return state
	}
}
