import {EDIT_TODOS} from '../config/actionTypes'

const todo = (state = {'title':'', 'description':''}, action) => {
  switch (action.type) {
    case EDIT_TODOS:
      return action.todo
    default:
      return state
  }
}
export default todo