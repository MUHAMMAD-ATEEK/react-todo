import React, {Component} from 'react';
// import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
// import NavBar from './navbar/bar'

// import Tabs from './tabs/index.js'
// import Styles from './styles/flexboxgrid.min.css'
// import bodyStyles from './styles/layout.css'

class Layout extends Component {

  render() {
    return (
      <div>
            {this.props.children}
      </div>
         );
  }
}

export default Layout;