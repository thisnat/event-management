import { useState, useEffect } from "react";
import { getWithToken } from "../service/api";

import Host from "../components/event/Host";

const Account = () => {

    const [user, setUser] = useState({});

    useEffect(() => {
        getWithToken("/user/me").then(res => {
            setUser(res.data);
        }).catch(err => {
            alert(err.response.data.msg);
        });
    }, [])

    return (
        <div className="container my-4">
            <h1 className="lang-th">ข้อมูลบัญชี</h1>
            <div className="mt-5">
                <div className="row">
                    <div className="col-sm-4 mb-4">
                        <Host user={user}/>
                    </div>
                    <div className="col-sm-8 lang-th" style={{fontSize:20}}>
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