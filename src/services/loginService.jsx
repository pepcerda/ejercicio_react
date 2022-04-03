import axios from 'axios';

//Para utilizar el API del ejercicio, cambiar esta URL por: https://three-points.herokuapp.com. No se ha utilizado por problemas con el CORS en el backend. 
const baseURL = "https://e93e896a-53fb-4119-89cc-2697a142725d.mock.pstmn.io";

export const login = (body) => {
    console.log("Elemento de autenticación: " + body.username + " y " + body.password);
    let axiosConfig =
    {
        headers: {
            'Content-Type': "application/json",
            'X-Api-Key': 'PMAK-6249cad8f0b3df3cb35f9839-c52d45d6848166a9ad36b2d52194df344c'
        }
    }

    return axios.post(baseURL + '/api/login', JSON.stringify(body), axiosConfig)

}

