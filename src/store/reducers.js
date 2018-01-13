import { combineReducers } from 'redux'
import userReducer from 'reducers/userReducer'
import board from 'reducers/boardReducer'
import trainReducer from 'reducers/trainReducer'
export const makeRootReducer = () => {
  return combineReducers({
    user: userReducer,
    board: board(trainReducer)
  })
}


export default makeRootReducer
