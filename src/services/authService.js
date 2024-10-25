
import { auth } from "./api";


export const login = async (email, password) => {
    const api = process.env.REACT_APP_API_SERVICE_NAME; 
    const endPoint = api + "api/auth/signin"; 
   
    const form = new FormData();
    form.append("email", email);
    form.append("password", password);
   
    return auth(endPoint, form);
};

export const createAccount = async (username, email, password) => {
    const api = process.env.REACT_APP_API_SERVICE_NAME; 
    const endPoint = api + "api/auth/signup"; 
   
    const form = new FormData();
    form.append("username", username);
    form.append("email", email);
    form.append("password", password);
   
    return auth(endPoint, form);
};


export const authService = {
    login,
    createAccount
};
