export default function board(reducer){
	return (state = {}, action ) => {
		switch (action.type) {
			case 'ADD_TRAIN':
				var trains = state.trains ? state.trains.slice(0) : [];
				return {...state, 
					trains: trains.concat([], action.payload),
					error: false
				};
			break;
			case 'ADD_CARRIAGE_TO_LAST_TRAIN':
				var trains = state.trains ? state.trains.slice(0) : [];
				var lastTrain = trains[trains.length - 1]
				if(trains.length){
					lastTrain.carriages += 1
					return {...state, 
						trains: [].concat([], trains),
						error: false
					};	
				}else{
					return {
						...state,
						error: 'Create at least one train before droping a carriage!!'
					}
				}
			break;
			case 'MODIFY_TRAIN_CARD': 
				const {
						index,
						action: innerAction
					} = action;
				return {...state,
					trains: [].concat([], reducer(state.trains.slice(0)[index], innerAction)),
					error: false
				}
			default:
				return state
		}
	}
}

