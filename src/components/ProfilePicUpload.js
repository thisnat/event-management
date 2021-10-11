import { useState } from "react";

import { API_BASE, CONTENT_URL } from "../constant/api";
import axios from "axios";

const ProfilePicUpload = () => {

    const [file, setFile] = useState([]);

    const handleBtn = () => {
        if (file.length === 0) {
            alert("กรุณาเลือกรูป")
        } else {
            let formData = new FormData();
            formData.append("content", file);
            formData.append("data", CONTENT_URL);

            axios.post(`${API_BASE}/upload/profile`, formData).then(() => {
                window.location.replace("/me");
            })
        }
    }

    return (
        <>
            <button className="btn btn-secondary ms-4" data-bs-toggle="modal" data-bs-target="#myModal" onClick={(e) => e.preventDefault()}>เปลี่ยนรูปประจำตัว</button>

            <div className="modal fade" tabIndex="-1" id="myModal">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">เปลี่ยนรูปประจำตัว</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <input type="file" className="form-control" accept="image/png, image/jpeg" onChange={
                                (e) => setFile(e.target.files[0])
                            } />

                            <p className="text-muted mt-4">** นามสกุลไฟล์ต้องเป็น .jpg หรือ .png เท่านั้น</p>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">ปิด</button>
                            <button type="button" className="btn btn-primary" onClick={handleBtn}>บันทึก</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ProfilePicUpload;