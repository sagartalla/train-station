export default (state = {}, action ) => {
	switch (action.type) {
		case 'ADD_TRAIN':
			trains = state.trains || []
			return {...state, 
				state.trains = trains.concat([], action.payload)
			}
		break;
		default:
			return state
	}
}
