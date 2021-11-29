
import axios from 'axios'

const _auth = "http://localhost:3000"
const _authProductos = "http://localhost:3001"
const api = axios.create({
    baseURL: _auth,
    headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
    },
});

const apiProductos = axios.create({
    baseURL: _authProductos,
    headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
        "token": localStorage.getItem('token'),
    },
});

export function login(mail, pass){
    const params = {
        email: mail,
        password: pass
    }
    return api.post('/login', params);
}

export function register(name, mail, pass){
    const params = {
        name: name,
        email: mail,
        password: pass
    }
    return api.post('/register', params);
}


export function createProduct(name, date){
    const params = {
        name: name,
        expiration: date,
    }
    return apiProductos.post('/products', params);
}

export function getProductList(){
  
    return apiProductos.get('/products');
}


api.interceptors.response.use((response) => {
    if (response.status === 200) {
        return response.data;
    }
});
