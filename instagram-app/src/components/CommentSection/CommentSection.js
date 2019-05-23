import React from 'react'
import Comment from './Comment'

const CommentSection = props => {
    return(
        <div>
            <Comment 
                username={props.comments.username} 
                text={props.comments.text}
            />

        </div>
        

    )
}

export default CommentSection