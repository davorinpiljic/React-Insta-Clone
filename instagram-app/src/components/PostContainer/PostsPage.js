import React from 'react'
import withAuthenticate from '../authentication/withAuthenticate'
import SearchBar from '../SearchBar/SearchBar'
import Post from './Post'
import PropTypes from 'prop-types'
import dummyData from '../../dummy-data'



class PostsPage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            user: [],
            searchInput: '',
        }
    }

    componentDidMount() {
      this.setState({user: dummyData})
     }
    
      commentFilter = event => {
        event.preventDefault()
        const filteredPosts = this.state.user.filter(element => {
          if (element.username.includes(this.state.searchInput)) {
            return element
          }
        })
        this.setState({user: filteredPosts})
      }
    
      searchHandle = event => {
        this.setState({searchInput: event.target.value})
      }

      render() {
      return(    
        <div className="App">
          <SearchBar 
            searchHandle={this.searchHandle}
            commentFilter={this.commentFilter}/>
        <div className="PostContainer">
          {this.state.user.map((element, key) => {
            return(<Post key={key} 
              id={key} 
              user={element}
              likes={element.likes}
            />)
          })}
        </div>
        </div>)}
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

export default PostsPage