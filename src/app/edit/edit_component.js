import React, {Component} from 'react';
import Style from './styles.css'

class Edit extends Component {
  
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
  this.props.actions.showTodo()
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
            <tr >
              <td>{this.props.todo.title}</td>
              <td>{this.props.todo.description}</td>
            </tr>
            
          </tbody>
        </table>
      </div>
 
    );
  }
  
}
 
export default Edit;
