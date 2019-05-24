import React from 'react'
import Comment from './Comment'
import PropTypes from 'prop-types'

import './CommentSection.css'

const CommentSection = props => {
    return(
        <div className="Comment"> 
            <Comment 
                username={props.comments.map((element, key) => {
                    return(<div key={key}><h3>{element.username}</h3>
                        <p>{element.text}</p></div>)
                })}
                text={props.comments.text}
            />
        </div>
    )
}

Comment.propTypes = {
    comments: PropTypes.shape({
        username: PropTypes.string.isRequired,
        text: PropTypes.string.isRequired,
    })
}

export default CommentSection

