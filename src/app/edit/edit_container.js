import { connect } from 'react-redux'
import { showTodo } from './actions'
import EditComponent from './edit_component'


const mapStateToProps = (state) => {
  console.log(state);
  return {
     todo: state.todo
     }
}

const mapDispatchToProps = (dispatch) => {
  return {
     actions:{
       showTodo: () => {
        showTodo(dispatch)
      }
    }
    
    
  }
}

const EditContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeComponent)

export default EditContainer