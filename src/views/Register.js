import { useState } from "react";
import axios from "axios";

import { API_BASE } from '../constant/api'
import { successAlertRedirect } from "../service/alert";

const Register = () => {

    const [user, setUser] = useState({
        isOrg: false,
        name: "",
        lastName: "",
        username: "",
        email: "",
        password: ""
    })

    const [confirmPassword, setConfirmpassword] = useState("");

    const handleSubmitBtn = (e) => {
        e.preventDefault();

        if (confirmPassword === user.password) {
            axios.post(`${API_BASE}/user/register`, user).then(() => {
                successAlertRedirect("ลงทะเบียนสำเร็จ");
            }).catch(err => {
                alert(err.response.data.msg);
            });
        } else {
            alert("password ไม่ตรงกัน")
        }
    }

    return (
        <div className="container lang-th my-5" style={{ maxWidth: 700 }}>
            <h1>ลงทะเบียน</h1>
            <hr />
            <div>
                <form onSubmit={handleSubmitBtn}>
                    <div className="mb-3">
                        <div className="form-check form-switch">
                            <input className="form-check-input" type="checkbox" onChange={(e) => {
                                setUser(Object.assign({}, user, { isOrg: !user.isOrg, name: "", lastName: "" }));
                            }} />
                            <label className="form-check-label">บัญชีองค์กร</label>
                        </div>
                        <p className="text-muted">* บัญชีองค์กร รูปแบบการตั้งชื่อจะเป็นชื่ออย่างเดียวไม่มีนามสกุล, จำนวนบูธที่เปิดให้จองได้จะมากขึ้น</p>
                    </div>
                    {
                        !user.isOrg
                            ? <div className="row">
                                <div className="col-lg mb-3">
                                    <label className="form-label">ชื่อจริง</label>
                                    <input type="text" className="form-control" required onChange={(e) => {
                                        setUser(Object.assign({}, user, { name: e.target.value }));
                                    }} />
                                </div>
                                <div className="col-lg mb-3">
                                    <label className="form-label">นามสกุล</label>
                                    <input type="text" className="form-control" required onChange={(e) => {
                                        setUser(Object.assign({}, user, { lastName: e.target.value }));
                                    }} />
                                </div>
                            </div>
                            : null
                    }

                    {
                        user.isOrg
                            ? <div className="col-lg mb-3">
                                <label className="form-label">ชื่อองค์กร</label>
                                <input type="text" className="form-control" required onChange={(e) => {
                                    setUser(Object.assign({}, user, { name: e.target.value }));
                                }} />
                            </div>
                            : null
                    }
                    <label className="form-label">Username</label>
                    <div className="input-group mb-3">
                        <span className="input-group-text lang-eng" id="basic-addon3">@</span>
                        <input type="text" className="form-control" id="basic-url" aria-describedby="basic-addon3" required onChange={(e) => {
                            setUser(Object.assign({}, user, { username: e.target.value }));
                        }} />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Email address</label>
                        <input type="email" className="form-control" required onChange={(e) => {
                            setUser(Object.assign({}, user, { email: e.target.value }));
                        }} />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Password</label>
                        <input type="password" className="form-control" required onChange={(e) => {
                            setUser(Object.assign({}, user, { password: e.target.value }));
                        }} />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Confirm Password</label>
                        <input type="password" className="form-control" required onChange={(e) => {
                            setConfirmpassword(e.target.value);
                        }}/>
                    </div>
                    <button type="submit" className="btn btn-success">ลงทะเบียน</button>
                </form>
            </div>
        </div>
    );
};

export default Register;