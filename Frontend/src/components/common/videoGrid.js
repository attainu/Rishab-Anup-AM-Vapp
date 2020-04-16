import React from "react"
import {Spinner} from "react-bootstrap"

class VideoGrid extends React.Component{

    state = {
        loadIndex: []
    }

    componentDidMount() {
        let loadIndex =  this.state.loadIndex;
            this.props.videos.forEach((element, index) => {
                loadIndex[index] = 0;
            })
            this.setState({
                loadIndex: loadIndex
            })
   
    }

    onImageLoad = (index) => {
        let loadIndex = this.state.loadIndex;
        loadIndex[index] = 1
        this.setState({
            loadIndex
        })
    }
  render(){
      return(
        <div className="video-grid">
        {this.props.videos.length != 0 && this.props.videos.map((video,index) => (

            <div className="video-list">
                <div className="video-content">
                    {this.state.loadIndex[index] == 0 &&  <Spinner className="loadSpinner" animation="grow" variant="success" />}
                    <img src={video.thumbnail} onLoad={() => this.onImageLoad(index)} style={{opacity:this.state.loadIndex[index]==0?"0":"1"}} />
                    <span><b>{video.title}</b></span>
                    <span>{video.anime}</span>
                    <div className="author">
                    <span>{video.users.name}</span>
                    <span><i class="fas fa-eye"></i> {video.views}</span>
                    </div>
                </div>
                <div className="showPlay">
                    <span><i class="far fa-play-circle fa-6x"></i></span>
                </div>
            </div>
        ))}

    </div>
      )
  }
}

export default VideoGrid;