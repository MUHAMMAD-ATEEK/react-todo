import React, {Component} from 'react';
import Style from './styles.css'

class Index extends Component {
  
  constructor(props, context) {
    super(props, context);
    this.state={
     
    }
}
 
  onChange() {
    this.setState({
    });
   
  }


componentDidMount(){
  this.props.actions.showTodos()
}

  render() {
    return (
       <div className="container">
        <h2>Hover Rows</h2>
        <p>The .table-hover class enables a hover state on table rows:</p>            
        <table className="table table-hover">
          <thead>
            <tr>
              <th>Title</th>
              <th>Description</th>
              <th>Edit</th>
              <th>delete</th>
            </tr>
          </thead>
          <tbody>
          {this.props.todos.map((todo,i) => 
            <tr key={i}>
              <td>{todo.title}</td>
              <td>{todo.description}</td>
            </tr>
            )}  
          </tbody>
        </table>
      </div>
 
    );
  }
  
}
 
export default Index;
