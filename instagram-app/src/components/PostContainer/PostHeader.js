import React from 'react'

const PostHeader = props => {
    return(<div className="post-header">
        <img src={props.user.thumbnailUrl} />

        <div>{props.user.username}</div>
    </div>)
}

export default PostHeader