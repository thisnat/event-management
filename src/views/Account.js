import { useState, useEffect } from "react";
import { getWithToken, patchWithToken } from "../service/api";
import Host from "../components/event/Host";
import { DateTime } from "luxon";
import { successToast, changePasswordAlert } from "../service/alert";
import ProfilePicUpload from "../components/ProfilePicUpload";

const Account = () => {

    useEffect(() => {
        getWithToken("/user/me").then(res => {
            setUser(res.data);
        }).catch(err => {
            alert(err.response.data.msg);
        });
    }, [])

    const [user, setUser] = useState({
        email: "",
        name: "",
        lastName: "",
        about: ""
    });
    const [edit, setEdit] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();

        patchWithToken("/user/me", user).then(res => {
            successToast("อัพเดทข้อมูลแล้ว");
            setUser(Object.assign({}, user, { update_at: DateTime.now() }));
        }).catch(err => {
            alert(err.response.data.msg);
        });

        setEdit(!edit);
    }

    const handleEdit = (e) => {
        e.preventDefault();

        setEdit(!edit);
    }

    return (
        <div className="container my-4">
            <h1 className="lang-th">ข้อมูลบัญชี</h1>
            <div className="mt-5">
                <div className="row">
                    <div className="col-sm-5 mb-4">
                        <Host user={user} />
                    </div>
                    <form className="col-sm-7 lang-th" onSubmit={handleSubmit}>
                        {
                            user.isOrg
                                ? <span className="badge rounded-pill bg-primary">บัญชีองค์กร</span>
                                : <span className="badge rounded-pill bg-secondary">บัญชีบุคคล</span>
                        }
                        <div className="mt-3">
                            <p>ID : {user._id}</p>

                            <div className="mt-3">
                                <label className="form-label">Email</label>
                                <input type="email" className="form-control" value={user.email} disabled={edit ? "" : "disabled"} required
                                    onChange={(e) => {
                                        setUser(Object.assign({}, user, { email: e.target.value }))
                                    }} />
                            </div>

                            <div className="mt-3">
                                <label className="form-label">ชื่อ</label>
                                <input type="text" className="form-control" value={user.name} disabled={edit ? "" : "disabled"} required
                                    onChange={(e) => {
                                        setUser(Object.assign({}, user, { name: e.target.value }))
                                    }} />
                            </div>

                            {
                                !user.isOrg
                                    ? <div className="mt-3">
                                        <label className="form-label">นามสกุล</label>
                                        <input type="text" className="form-control" value={user.lastName} disabled={edit ? "" : "disabled"} required
                                            onChange={(e) => {
                                                setUser(Object.assign({}, user, { lastName: e.target.value }))
                                            }} />
                                    </div>
                                    : null
                            }

                            <div className="mt-3">
                                <label className="form-label">เกี่ยวกับ</label>
                                <input type="text" className="form-control" value={user.about} disabled={edit ? "" : "disabled"}
                                    onChange={(e) => {
                                        setUser(Object.assign({}, user, { about: e.target.value }))
                                    }} />
                            </div>

                            <div className="mt-5 text-muted">
                                <p>เข้าร่วมเมื่อ {DateTime.fromISO(user.create_at).toLocaleString(DateTime.DATE_FULL)}</p>
                                <p>แก้ไขล่าสุด {DateTime.fromISO(user.update_at).toLocaleString(DateTime.DATETIME_SHORT)} ({DateTime.fromISO(user.update_at).toRelative()})</p>
                            </div>

                            <div className="mt-4">
                                {
                                    !edit
                                        ? <button className="btn btn-primary" onClick={handleEdit}>แก้ไขข้อมูล</button>
                                        : null
                                }
                                {
                                    edit
                                        ? <button className="btn btn-success" type="submit">บันทึก</button>
                                        : null
                                }
                                <button className="btn btn-secondary ms-4" onClick={(e) => {
                                    e.preventDefault();
                                    changePasswordAlert();
                                }}>เปลี่ยน Password</button>
                                 <ProfilePicUpload />
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Account;