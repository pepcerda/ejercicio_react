import axios from 'axios';


const baseURL = "https://three-points.herokuapp.com";

export const login = (body) => {
    console.log("Elemento de autenticación: " + body.username + " y " + body.password);
    let axiosConfig =
    {
        headers: {
            'Content-Type': "application/json"
        }
    }

    return axios.post(baseURL + '/api/login', JSON.stringify(body), axiosConfig)

}

