import React, { Component } from 'react'
import { Route,Router,browserHistory } from 'react-router'

import createHistory from 'history/createBrowserHistory'
const history = createHistory()

import Layout from './Layout'
import HomeContainer from './home/home_container'
import EditContainer from './edit/edit_container'

class Routes extends Component {
  render() {
    return (
      <Router  history={history}>
          <Layout>
            <Route path ='/' component={HomeContainer}/>
            <Route path ='/{id}' component={EditContainer}/>
          </Layout>  
       </Router>
    )
  }
}

export default Routes