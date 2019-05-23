import React from 'react';
import logo from './logo.svg';
import './App.css';
import dummyData from './dummy-data'


import PostContainer from './components/PostContainer/PostContainer'
import CommentSection from './components/CommentSection/CommentSection'
import SearchBar from './components/SearchBar/SearchBar'


class App extends React.Component {
  constructor(props) {
    super()
    this.state = {
      user: dummyData
    }
  }

  userIterate = () => {
    return(
      <div>
        {this.state.user.map(element => {
          return(<PostContainer user={element} />)
        })}
      </div>
    )
  }

  render() {

  return (

    <div className="App">
        <SearchBar />
        <PostContainer user={this.state.user} />
    </div>
  );
  }
}

export default App;
