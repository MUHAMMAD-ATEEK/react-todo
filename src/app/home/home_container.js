import { connect } from 'react-redux'
import { showList } from './actions'
import HomeComponent from './home_component'


const mapStateToProps = (state) => {
  console.log(state);
  return {
     todos: state.todos
     }
}

const mapDispatchToProps = (dispatch) => {
  return {
     actions:{
       showTodos: () => {
        showList(dispatch)
      }
    }
    
    
  }
}

const HomeContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeComponent)

export default HomeContainer