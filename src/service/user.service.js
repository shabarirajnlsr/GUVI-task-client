import axios from 'axios';

const API_URL = "https://signuplogin01.herokuapp.com/auth"



const postRegisterData = (myData) => {
    return axios.post(API_URL+"register", myData);
}

const postLoginData = (myData) => {
    return axios.post(API_URL+"login", myData);
}

export  {
    postRegisterData,
    postLoginData
}