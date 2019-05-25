import React from 'react'
import CommentSection from '../CommentSection/CommentSection'
import PropTypes from 'prop-types'

import './Post.css'

const Post = props => {
    return(
    
    <div className="Post">
        <div className="PostHeader">
            <div><img src={props.user.thumbnailUrl} alt='user logo'/></div>
            <div>{props.user.username}</div>
            {/* <div>{console.log(props.id)}</div> */}
        </div>

        <div> 
            <img className="PostImage" src={props.user.imageUrl} alt='main post' />

            <div className="photo-div">
                <img src="https://img.icons8.com/windows/32/000000/hearts.png" />
                <img src="https://img.icons8.com/windows/32/000000/speech-bubble.png" />
            </div>

            <div className="CommentSection"><div>{props.user.likes} likes</div>
            <CommentSection comments={props.user.comments}/>
            </div>
        </div>
    </div>)
}

CommentSection.propTypes = {
    comments: PropTypes.arrayOf(PropTypes.object.isRequired),
}

export default Post