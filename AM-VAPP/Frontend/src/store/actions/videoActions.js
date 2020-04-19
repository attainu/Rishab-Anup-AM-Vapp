import * as ApiVideo from "../../api/video"


const formatData = (type, data) => {
    return {
        type,
        payLoad: data
    }
}


export const getAllVideos = () => {

    return dispatch =>{
        return ApiVideo.getAllVideos().then(res => {
            dispatch({
                type:"load_videos"
            });
            return res;
    
        })

    }  

}


