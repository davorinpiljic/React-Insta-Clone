import React from 'react';
import './App.css';
import PropTypes from 'prop-types'

import PostsPage from './components/PostContainer/PostsPage'
import withAuthenticate from './components/authentication/withAuthenticate'
import Login from './components/Login/Login'


const ComponentFromWithAuthenticate = withAuthenticate(PostsPage)(Login)


class App extends React.Component {
  constructor() {
    super() 
    this.state = {
      placehold: '',
    }
  }

  render() {
  return (
    <div className="App">
      <ComponentFromWithAuthenticate />
    </div>
    );
  }  
}

export default App;
