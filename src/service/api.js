import axios from 'axios';
import { API_BASE } from '../constant/api';

const user = localStorage.getItem('userData');

if (user) {
    let userData = JSON.parse(localStorage.getItem('userData'));
    let token = userData.token;

    if (token) {
        axios.defaults.headers.common = { 'Authorization': `Bearer ${token}` }
    } else {
        console.log("token not found");
        localStorage.removeItem('userData');
        window.location.replace("/");
    }
} else {
    console.log("userdata not found");
}

export const logOut = () => {
    localStorage.removeItem('userData');
    window.location.replace("/");
}

export const getWithToken = async (apiPath) => {
    let response = await axios.get(`${API_BASE}${apiPath}`);

    return response
}

