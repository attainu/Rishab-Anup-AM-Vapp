import axios from "axios";


export const loginUser = async (data) => {
    return axios.post("http://localhost:6060/user/find", data).then(res => {
        return res;

    })

}

export const registerUser = (data) => {

    return axios.post("http://localhost:6060/user", data).then(res => {
        return res;

    })

}

export const verifyUserFromToken = (token) => {

    return axios.post("http://localhost:6060/user/verify", {}, {
        headers: { token: token }
    }).then(res => {
        return res;

    })


}