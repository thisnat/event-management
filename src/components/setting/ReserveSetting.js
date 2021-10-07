import { useState, useEffect } from 'react';

import useStore from '../../store'
import { postWithToken } from '../../service/api'

import ZoneSetting from './ZoneSetting';
import axios from 'axios';
import { API_BASE } from '../../constant/api';

const ReserveSetting = ({ eventName }) => {

    const user = useStore(state => state.user);
    const eventId = useStore(state => state.eventId);
    const [reserve, setReserve] = useState({});

    const [input, setInput] = useState({
        maxReserve: 1,
        paymentInfo: "",
        info: "",
        pic: "",
        eventId: eventId,
        eventName: eventName,
        price: 0
    });
    const [file, setFile] = useState([]);

    useEffect(() => {
        //useEffect clenup 
        const source = axios.CancelToken.source()
        let isMounted = true;

        axios.get(`${API_BASE}/reserve/event/${eventId}`, {
            cancelToken: source.token,
        }).then(res => {
            if (isMounted) {
                setReserve(res.data)
            }
        }).catch(err => {
            if (!isMounted) return; // comp already unmounted, nothing to do
        });

        return () => {
            isMounted = false;
            source.cancel()
        }
    }, [eventId])

    const handleSumbmitBtn = (e) => {
        e.preventDefault()

        if (file.length === 0) {
            alert("กรุณาเลือกรูปรูปแสดงพื้นที่ภายในงาน")
        } else {
            let formData = new FormData();
            formData.append("content", file);
            formData.append("data", JSON.stringify(input));

            postWithToken("/upload/reserve", formData).then(() => {
                window.location.replace("./setting");
            })
        }
    }

    if (reserve) {
        return <ZoneSetting />
    }

    return (
        <div className="mt-5">
            <h2>✨ กรุณาตั้งค่าเพื่อเปิดการใช้งานการจองพื้นที่</h2>
            <form onSubmit={handleSumbmitBtn}>
                <div className="row mt-4">
                    <div className="col-md">
                        <label className="form-label">ปริมาณพื้นที่ที่เปิดให้จอง</label>
                        <input type="number" className="form-control" max={user.isOrg ? "32" : "16"} min="1" value={input.maxReserve} required
                            onChange={(e) => setInput(Object.assign({}, input, { maxReserve: e.target.value }))} />
                        <p className="text-muted mt-2">** ปริมาณพื้นไม่สามารถแก้ไขได้ในภายหลัง บัญชีบุคคลได้สูงสุด 16 ที่ บัญชีองค์กร 32 ที่</p>
                    </div>
                    <div className="col-md">
                        <label className="form-label">ข้อมูลการชำระเงิน (เช่น บัญชีธนาคาร)</label>
                        <input type="text" className="form-control" required
                            onChange={(e) => setInput(Object.assign({}, input, { paymentInfo: e.target.value }))} />
                    </div>
                </div>
                <div className="row mt-4">
                    <div className="col-md">
                        <label className="form-label">รายละเอียดเพิ่มเติม</label>
                        <input type="text" className="form-control" required
                            onChange={(e) => setInput(Object.assign({}, input, { info: e.target.value }))} />
                    </div>
                    <div className="col-md">
                        <label className="form-label">ราคาต่อพื้นที่</label>
                        <input type="number" className="form-control" required
                            onChange={(e) => setInput(Object.assign({}, input, { price: e.target.value }))} />
                        <p className="text-muted mt-2">** พื้นที่ราคาพิเศษจะสามารถตั้งค่าได้หลังจากนี้</p>
                    </div>
                    <div className="col-md">
                        <label className="form-label">รูปแสดงพื้นที่ภายในงาน</label>
                        <input type="file" className="form-control" accept="image/png, image/jpeg" onChange={
                            (e) => setFile(e.target.files[0])
                        } />
                    </div>
                </div>
                <button type="submit" className="btn btn-success mt-5">ยืนยัน</button>
            </form>
        </div>
    );
};

export default ReserveSetting;