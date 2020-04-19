import React from 'react';
import { connect } from "react-redux"
import * as actionGenerator from "../store/actions/userAuthAction"
import * as videoAction from "../store/actions/videoActions"
import "../styles/home.css"
import { Spinner } from "react-bootstrap"
import VideoGrid from "../components/common/videoGrid"


class Home extends React.Component {
    state = {
        videos: []

    }
    componentDidMount() {

        this.props.getAllVideos().then(res => {
            let arr = res.data;
            this.setState({
                videos: arr,

            })
        })


    }

    render() {
        return (
            this.state.videos.length != 0 &&
            <VideoGrid videos={this.state.videos} />
        )
    }
}

const mapStateToProps = (state) => {
    console.log("state", state)
    return {
        state: state
    }
}
const mapDispatchToProps = dispatch => {
    return {
        verifyUser: (token) => dispatch(actionGenerator.verifyUser(token)),
        getAllVideos: () => dispatch(videoAction.getAllVideos())

    }

}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
