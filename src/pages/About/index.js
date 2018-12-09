import React from 'react'
import { Button } from 'antd'
import { connect } from 'react-redux'

@connect(
    store => ({app: store.app})
)
class About extends React.Component {
    state = {  }
    render() {
        console.log(this.props.app)
        return (
            <div>
                <Button>
                    about
                </Button>
            </div>
        );
    }
}

export default About;