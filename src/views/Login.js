import { useState } from 'react';
import axios from 'axios';

import { API_BASE } from '../constant/api';
import { successAlertRedirect } from '../service/alert';

import Cookies from 'js-cookie';

const Login = () => {

    const [login, setLogin] = useState({
        username: "",
        password: ""
    });

    const handleSubmitBtn = (e) => {
        e.preventDefault();

        axios.post(`${API_BASE}/user/login`, login).then(res => {
            let clientData = {
                email : res.data.email,
                name : res.data.name,
                lastname : res.data.lastName,
                username : res.data.username,
                pic : res.data.pic
            }

            localStorage.setItem('userData', JSON.stringify(clientData));
            Cookies.set("token", res.data.token)

            successAlertRedirect("เข้าสู่ระบบสำเร็จ");
        }).catch(err => {
            alert(err.message);
        });
    }

    return (
        <div className="container lang-th" style={{ marginTop: "10%", maxWidth: 500 }}>
            <h1>เข้าสู่ระบบ</h1>
            <hr />
            <div>
                <form onSubmit={handleSubmitBtn}>
                    <div className="mb-3">
                        <label className="form-label">Username</label>
                        <input type="text" className="form-control" required onChange={(e) => {
                            setLogin(Object.assign({}, login, { username: e.target.value }));
                        }} />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Password</label>
                        <input type="password" className="form-control" required onChange={(e) => {
                            setLogin(Object.assign({}, login, { password: e.target.value }));
                        }} />
                    </div>
                    <button type="submit" className="btn btn-primary">เข้าสู่ระบบ</button>
                </form>
            </div>
        </div>
    );
};

export default Login;