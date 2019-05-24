import React from 'react';
// import logo from './logo.svg';
import './App.css';
import PropTypes from 'prop-types'

//Data import
import dummyData from './dummy-data'

//Container import
import Post from './components/PostContainer/Post'
import SearchBar from './components/SearchBar/SearchBar'

class App extends React.Component {
  constructor(props) {
    super()
    this.state = {
      user: dummyData
    }
  }

  render() {

  return (
    <div className="App">
        <SearchBar />
        <div className="PostContainer">
          {this.state.user.map((element, key) => {
            return(<Post key={key} user={element} />)
          })}
        </div>
    </div>
    );
  }  
}

Post.propTypes = {
  user: PropTypes.shape({
    username: PropTypes.string.isRequired,
    thumbnailUrl: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired,
    likes: PropTypes.number.isRequired,
    comments: PropTypes.arrayOf(PropTypes.object.isRequired)
  })
}

export default App;
