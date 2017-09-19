import {SHOW_TODOS} from '../config/actionTypes'

const todos = (state = [], action) => {
  switch (action.type) {
    case SHOW_TODOS:
      return action.todos
    default:
      return state
  }
}
export default todos