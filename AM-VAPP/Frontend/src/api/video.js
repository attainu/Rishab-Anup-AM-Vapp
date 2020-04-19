import axios from "axios";


export const createVideo = async (data) => {
    return axios.post("http://localhost:6060/video", data).then(res => {
        return res;

    })

}

export const createThumbnail = async (data) => {
    return axios.post("http://localhost:6060/thumbnail", data).then(res => {
        return res;

    })

}

export const getAllVideos = async ()=>{
    return axios.get("http://localhost:6060/video").then(res=>{
        return res;
    })  
}



