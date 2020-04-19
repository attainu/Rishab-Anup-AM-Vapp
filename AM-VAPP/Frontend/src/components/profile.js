import React from "react";
import "../styles/profile.css"
import { connect } from "react-redux"
import * as actionGenerator from "../store/actions/userAuthAction"
import * as videoAction from "../store/actions/videoActions"
import VideoGrid from "../components/common/videoGrid";
import { Modal, Button } from "react-bootstrap"
import ReactCrop from 'react-image-crop';
import 'react-image-crop/dist/ReactCrop.css';
import {getCroppedImg} from "./imageCrop/croppedImage"

class Profile extends React.Component {

    state = {
        videos: [],
        show: false,
        src: null,
        avatar:null,
        crop: {
            unit: '%',
            width: 30,
            aspect: 16 / 9,
        },
        
    }


    componentDidMount() {

        this.props.getAllVideos().then(res => {
            let arr = res.data;
            this.setState({
                videos: arr,

            })
        })


    }

    onImageLoaded = image => {
        this.imageRef = image;
    };

    onCropComplete = crop => {
        this.makeClientCrop(crop);
    };

    async makeClientCrop(crop) {
        if (this.imageRef && crop.width && crop.height) {
            const croppedImageUrl = await getCroppedImg(
                this.imageRef,
                crop,
                'newFile.jpeg'
            );
           
            this.setState({ croppedImageUrl });
        }
    }

    handleCroppedImage=()=>{
        this.setState({
            avatar:this.state.croppedImageUrl,
            show:false,
            src:null
        })
        
    }

    onCropChange = (crop, percentCrop) => {
        // You could also use percentCrop:
        // this.setState({ crop: percentCrop });
        this.setState({ crop });
    };


    onFileTrigger = () => {
        this.setState({
            show: true
        })
    }

    onFileSelect = (e) => {
        if (e.target.files && e.target.files.length > 0) {
            const reader = new FileReader();
            reader.addEventListener('load', () =>
                this.setState({ src: reader.result , show:true })
            );
            reader.readAsDataURL(e.target.files[0]);
        }

    }

    handleAvatarChange = () => {

        document.getElementById('userAvatar').click();
        this.setState({
            show: false
        })


    }

    handleClose = () => {
        this.setState({
            show: false,
            src:null
        })
    }
    render() {
        return (
            <div>
                <Modal show={this.state.show} onHide={() => this.handleClose()} centered>

                    <Modal.Body>Update Your Avatar</Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={() => this.handleClose()}>
                            Remove Avatar
                        </Button>
                        <Button variant="primary" onClick={() => this.handleAvatarChange()}>
                            Chose from Your Device
                         </Button>
                    </Modal.Footer>
                </Modal>
                {this.state.src && (
                     <Modal show={this.state.show} onHide={() => this.handleClose()} centered>

                     <Modal.Body>
                     <ReactCrop
                        src={this.state.src}
                        crop={this.state.crop}
                        ruleOfThirds
                        onImageLoaded={this.onImageLoaded}
                        onComplete={this.onCropComplete}
                        onChange={this.onCropChange}
                    />
                     </Modal.Body>

                     <Modal.Footer>
                        <Button variant="info" onClick={() => this.handleCroppedImage()}>
                            Update
                        </Button>
                    </Modal.Footer>
                    
                 </Modal>
                    
                )}
                <div className="profileBody">
                    <div className="userProfile">
                        <div className="userImage" onClick={() => this.onFileTrigger()}>
                            <img src={this.state.avatar?this.state.avatar:"https://greendestinations.org/wp-content/uploads/2019/05/avatar-exemple.jpg"} className="profileAvatar"></img>
                            <div className="changeAvatar">
                                <span>Change/Remove</span>
                            </div>
                        </div>
                        <div className="userDetails">
                            <p>Rishab T</p>
                            <p>RishabT123</p>
                            <p>Rishabht123@gmail.com</p>
                            <p>Subscribers: 1.1M</p>
                        </div>
                    </div>
                    <div className="userUploads">Uploads</div>
                    <div className="userVideos">
                        {this.state.videos.length != 0 &&
                            <VideoGrid videos={this.state.videos} />}
                    </div>

                </div>

                <input type="file" id="userAvatar" onChange={(e) => this.onFileSelect(e)} style={{ opacity: "0" }}></input>

            </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(Profile);