import { useState, useEffect } from 'react';

import useStore from '../../store'
import { postWithToken } from '../../service/api'

import ZoneSetting from './ZoneSetting';
import axios from 'axios';
import { API_BASE } from '../../constant/api';

const ReserveSetting = () => {

    const user = useStore(state => state.user);
    const eventId = useStore(state => state.eventId);
    const [reserve, setReserve] = useState({});

    const [input, setInput] = useState({
        maxReserve: 1,
        paymentInfo: "",
        info: "",
        pic: "test",
        eventId: eventId,
        price: 0
    });

    useEffect(() => {
        axios.get(`${API_BASE}/reserve/event/${eventId}`).then(res => {
            setReserve(res.data)
        })
    }, [eventId])

    const handleSumbmitBtn = (e) => {
        e.preventDefault()

        postWithToken("/reserve/create", input).then(() => {
            window.location.replace("./setting");
        })
    }

    if (reserve) {
        if (!reserve.isZoneSet) {
            return <ZoneSetting />
        }
    }

    return (
        <div className="mt-5">
            <h2>กรุณาตั้งค่าเพื่อเปิดการใช้งานการจองพื้นที่</h2>
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
                        <p className="text-muted mt-2">** พื้นที่ราคาพิเศษจะสามาระตั้งค่าได้หลังจากนี้</p>
                    </div>
                    <div className="col-md">
                        <p>รูปแสดงพื้นที่ภายในงาน</p>
                        <button className="btn btn-primary" onClick={(e) => e.preventDefault()}>เลือก</button>
                    </div>
                </div>
                <button type="submit" className="btn btn-success mt-5">ตกลง</button>
            </form>
        </div>
    );
};

export default ReserveSetting;