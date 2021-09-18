import { useState, useEffect } from "react";
import styled from "styled-components";

import { getWithToken, logOut } from "../service/api";

const ProfilePic = styled.img`
width : 200px;
height : 200px;
border-radius : 360px;
`

const Account = () => {

    const [user, setUser] = useState({});

    useEffect(() => {
        getWithToken("/user/me").then(res => {
            setUser(res.data);
        }).catch(err => {
            alert(err);

            logOut();
        });
    }, [])

    return (
        <div className="container my-4">
            <h1 className="lang-th">ข้อมูลบัญชี</h1>
            <div className="mt-5">
                <div className="row">
                    <div className="col-sm-4 mb-4" style={{ textAlign: "center" }} >
                        <ProfilePic src={user.pic} />
                        {
                            user.isOrg
                            ? <h2 className="mt-4 mb-0">{user.name}</h2>
                            : <h2 className="mt-4 mb-0">{user.name} {user.lastName}</h2>
                        }
                        <p className="gradient-text mt-2" style={{ fontSize: 24 }}>@{user.username}</p>
                    </div>
                    <div className="col-sm-8 lang-th" style={{fontSize:22}}>
                        {
                            user.isOrg
                                ? <span className="badge rounded-pill bg-primary">บัญชีองค์กร</span>
                                : <span className="badge rounded-pill bg-secondary">บัญชีบุคคล</span>
                        }
                        <div className="mt-4">
                            <p>id : {user._id}</p>
                            <p>email : {user.email}</p>
                            <p>create at : {user.create_at}</p>
                            <p>update at : {user.update_at}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Account;