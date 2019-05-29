import React from 'react'
import CommentSection from '../CommentSection/CommentSection'
import PropTypes from 'prop-types'

import './Post.css'

class Post extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            likes: props.likes
        }
    }

    
    addLikes = () => {
        let likes = this.state.likes + 1
        this.setState({likes: likes})
    }

    render() {
    return(
    
    <div className="Post">
        <div className="PostHeader">
            <div><img src={this.props.user.thumbnailUrl} alt='user logo'/></div>
            <div>{this.props.user.username}</div>
            {/* <div>{console.log(props.id)}</div> */}
        </div>

        <div> 
            <img className="PostImage" src={this.props.user.imageUrl} alt='main post' />

            <div className="photo-div">
                <img src="https://img.icons8.com/windows/32/000000/hearts.png" 
                    onClick={this.addLikes}
                />
            </div>



            <div className="CommentSection"><div>{this.state.likes} likes</div>


            <div className="photo-div">

            <img src="https://img.icons8.com/windows/32/000000/speech-bubble.png" />
            </div>

            <CommentSection comments={this.props.user.comments}/>
            </div>
        </div>
    </div>)
    }
}

CommentSection.propTypes = {
    comments: PropTypes.arrayOf(PropTypes.object.isRequired),
}

export default Post