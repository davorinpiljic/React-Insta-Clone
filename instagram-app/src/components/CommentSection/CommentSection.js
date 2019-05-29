import React from 'react'
import Comment from './Comment'
import PropTypes from 'prop-types'

import './CommentSection.css'

class CommentSection extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
        comments: [],
        comment: '',
       }
    }

    componentDidMount() {
        this.setState({comments: this.props.comments})
    }

    addNewComment = (event) => {
        event.preventDefault() 
        const newComment = {text: this.state.comment, username: 'placeholder'}
        this.setState({
            comments: [...this.state.comments, newComment]
        })
    }

    commentHandle = (event) => {

        this.setState({comment: event.target.value})
    }

    render() {
    return(
        <div className="Comment"> 
                {this.state.comments.map((element, key) => {
                    return(<Comment 
                            key={key} 
                            id={key}
                            username={element.username} 
                            text={element.text}
                        />)
                    })}
            
            <form onSubmit={this.addNewComment}>
                <input 
                    type="text"
                    placeholder="placeholder text"
                    onChange={this.commentHandle}
                >
                </input>
            </form>
        </div>
        
        )
    }
}

Comment.propTypes = {
    comments: PropTypes.shape({
        username: PropTypes.string.isRequired,
        text: PropTypes.string.isRequired,
    })
}

export default CommentSection

