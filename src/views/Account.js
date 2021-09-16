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
        <div className="container my-5">
            <h1>your account</h1>
            <div className="mt-4">
                <ProfilePic src={user.pic} />
                <div className="mt-4">
                    <p>user id : {user._id}</p>
                    <p>username : {user.username}</p>
                    <p>name : {user.name}</p>
                    <p>last name : {user.lastName}</p>
                    <p>create at : {user.create_at}</p>
                    <p>update at : {user.update_at}</p>
                </div>
            </div>
        </div>
    );
};

export default Account;