import axios from "axios";

const API_URL = "http://localhost:9011/auth";

const signUp = (name, password) => {
    return axios
        .post(API_URL + "/register", {
            name,
            password
        }).then((response) => {
            if(response.data.accessToken) {
                localStorage.setItem("user", JSON.stringify(response.data))
            }
            console.log(response.data)
            return response.data;
        });
}

const login = (name, password) => {
    return axios
        .post(API_URL + "/authenticate", {
            name,
            password
        }).then((response) => {
            if(response.data.accessToken){
                localStorage.setItem("user", JSON.stringify(response.data));
            }
            return response.data;
        })
}

const logout = () => {
    localStorage.removeItem("user");
}

const getCurrentUser = () => {
    return JSON.parse(localStorage.getItem("user"));
 }

 const authService = {
    signUp,
    login,
    logout,
    getCurrentUser
 }

 export default authService;