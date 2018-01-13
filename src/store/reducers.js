import { combineReducers } from 'redux'
import userReducer from 'reducers/userReducer'
import boardReducer from 'reducers/boardReducer'
export const makeRootReducer = () => {
  return combineReducers({
    user: userReducer,
    board: boardReducer
  })
}


export default makeRootReducer
