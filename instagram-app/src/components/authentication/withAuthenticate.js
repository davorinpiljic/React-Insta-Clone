import React from 'react'

const withAuthenticate = SomeComponent => 
    class extends React.Component {
        constructor() {
            super()
            this.state = {
                something: '',
            }
        }

    render() {
        return(
            <SomeComponent />
        )
    }
    }

export default withAuthenticate