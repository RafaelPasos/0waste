
import axios from "./axios";


const _auth = "http://localhost:3000"
const auth = {
    login: (credentials)=>{
        axios(window.localStorage.getItem('token'), _auth)
        .post("/login")
    },
    register: (credentials)=>{
        axios(window.localStorage.getItem('token'), _auth)
        .post("/register")
    }
}




/*
    const api = axios.create({
        baseURL: _auth,
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            "Access-Control-Allow-Origin": "*",
        },
    });

    export function login(mail, pass){
        const params = {
            email: mail,
            password: pass
        }
        return api.post('/login',params);
    }

    api.interceptors.response.use((response: any) => {
    if (response.status === 200) {
        return response.data;
    }
});
*/