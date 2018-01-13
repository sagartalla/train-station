export default (state = null, action ) => {
	switch (action.type) {
		case 'UPDATE_ARRIVAL':
			return action.payload
		break;
		case 'UPDATE_DEPARTURE':
			return action.payload
		break;
		default:
			return state
	}
}
