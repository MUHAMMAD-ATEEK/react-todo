import { combineReducers } from 'redux'
import todos from './home/homeReducer'

const rootReducer = combineReducers({
  todos
})

export default rootReducer