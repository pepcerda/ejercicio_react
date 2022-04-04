import axios from 'axios';

const baseURL = "https://three-points.herokuapp.com";

export const getPosts = (token) => {
    const axiosConfig = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }
    return axios.get(baseURL + '/api/posts', axiosConfig); 
}

export const postLike = (token, id) => {
    const axiosConfig = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }
    console.log(`${baseURL}/api/posts/${id}/like`);
    return axios.post(`${baseURL}/api/posts/${id}/like`,{} , axiosConfig); 
}