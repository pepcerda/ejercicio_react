import axios from 'axios';
const baseURL = "https://three-points.herokuapp.com"

export const login = (body) => {
    console.log("Elemento de autenticación: " + body.username + " y " + body.password);
    let axiosConfig =
    {
        headers: {
            'Content-Type': "application/json; charset=utf-8", 
            'Access-Control-Allow-Origin': '*'
        }
    }

    axios.post(baseURL + '/api/login', body, axiosConfig)
        .then((response) => {
            localStorage.setItem("token", response)
            return true;
        }).catch((err) => {
            return false;
        })

}