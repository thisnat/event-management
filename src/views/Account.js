import { useState, useEffect } from "react";
import { getWithToken } from "../service/api";

import Host from "../components/event/Host";
import { DateTime } from "luxon";

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
                    <div className="col-sm-8 lang-th">
                        {
                            user.isOrg
                                ? <span className="badge rounded-pill bg-primary">บัญชีองค์กร</span>
                                : <span className="badge rounded-pill bg-secondary">บัญชีบุคคล</span>
                        }
                        <div className="mt-4">
                            <p>id : {user._id}</p>
                            <p>email : {user.email}</p>
                            <p className="mt-5">เข้าร่วมเมื่อ {DateTime.fromISO(user.create_at).toLocaleString(DateTime.DATE_FULL)}</p>
                            <p>แก้ไขล่าสุด {DateTime.fromISO(user.update_at).toLocaleString(DateTime.DATETIME_SHORT)} ({DateTime.fromISO(user.update_at).toRelative()})</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Account;