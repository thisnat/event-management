import axios from 'axios';
import { API_BASE } from '../constant/api';

import Cookies from 'js-cookie';

function setHeader() {
    const user = localStorage.getItem('userData');
    const token = Cookies.get("token");

    if (user && token) {
        axios.defaults.headers.common = { 'Authorization': `Bearer ${token}` }
    } else {
        //focus this
        console.log("token not found");
        Cookies.remove("token");
        localStorage.removeItem('userData');
        window.location.replace("/");
    }
}

export const logOut = () => {
    Cookies.remove("token");
    localStorage.removeItem('userData');
    window.location.replace("/");
}

export const getWithToken = (apiPath) => {
    setHeader();

    return axios.get(`${API_BASE}${apiPath}`);
}

