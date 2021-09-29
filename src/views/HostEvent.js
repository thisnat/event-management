import { useState } from 'react';
import EventCard from '../components/card/EventCard';

import { CirclePicker } from 'react-color';
import { colorList } from '../constant/color';

import 'emoji-mart/css/emoji-mart.css'
import { Picker } from 'emoji-mart'

import { postWithToken } from "../service/api"

const HostEvent = () => {

    const userData = JSON.parse(localStorage.getItem('userData'));

    const [data, setData] = useState({
        emoji: "🎉",
        name: "????",
        host: userData.username,
        color: "#307fe2",
        date: "",
        time: "",
        location: "",
        about: "",
        join: 0,
        canReserve : false
    });

    const [emojiOpen, setEmojiOpen] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();

        postWithToken("/event/create", Object.assign({}, data, { host: "" })).then(res => {
            //redirect to event page
            window.location.replace(`/event/${res.data._id}`);
        }).catch(err => {
            alert(err.response.data.msg)
        });
    }

    return (
        <div className="container my-4">
            <h1 className="lang-th">สร้างงานอีเว้นท์</h1>
            <div className="m-auto" style={{ maxWidth: 500 }}>
                <EventCard data={data} />
            </div>
            <div className="m-auto mt-5 lang-th" style={{ maxWidth: 800 }}>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label className="form-label">ชื่ออีเว้นท์</label>
                        <input type="text" className="form-control" required onChange={(e) => {
                            if (e.target.value === "") {
                                setData(Object.assign({}, data, { name: "????" }));
                            } else {
                                setData(Object.assign({}, data, { name: e.target.value }));
                            }
                        }} placeholder="ไม่เกิน x ตัวอักษร" />
                    </div>
                    <div className="row mb-3">
                        <div className="col-md mb-3">
                            <p>สีอีเว้นท์</p>
                            <CirclePicker colors={colorList} onChangeComplete={(color) => {
                                setData(Object.assign({}, data, { color: color.hex }))
                            }} />
                        </div>
                        <div className="col-md">
                            <p>Emoji</p>
                            <button className="btn btn-primary" onClick={(e) => {
                                e.preventDefault();
                                setEmojiOpen(!emojiOpen);
                            }}>เลือก Emoji</button>
                            {
                                emojiOpen
                                    ? <div className="mt-2" style={{ position: "absolute" }}>
                                        <Picker emoji="tada" title="Pick your emoji !" native={true} onSelect={(emoji) => {
                                            setData(Object.assign({}, data, { emoji: emoji.native }));
                                            setEmojiOpen(!emojiOpen);
                                        }} />
                                    </div>
                                    : null
                            }
                        </div>
                    </div>
                    <div className="row mb-3">
                        <div className="col-md mb-3">
                            <label className="form-label">วันที่</label>
                            <input type="date" className="form-control" required onChange={(e) => {
                                setData(Object.assign({}, data, { date: e.target.value }))
                            }} />
                        </div>
                        <div className="col-md mb-3">
                            <label className="form-label">เวลา</label>
                            <input type="time" className="form-control" required onChange={(e) => {
                                setData(Object.assign({}, data, { time: e.target.value }))
                            }} />
                        </div>
                        <div className="col-md">
                            <label className="form-label">สถานที่</label>
                            <input type="text" className="form-control" required onChange={(e) => {
                                setData(Object.assign({}, data, { location: e.target.value }))
                            }} />
                        </div>
                    </div>
                    <div className="mb-4">
                        <label className="form-label">รายละเอียด</label>
                        <input type="text" className="form-control" required onChange={(e) => {
                            setData(Object.assign({}, data, { about: e.target.value }))
                        }} />
                    </div>
                    <p className="text-muted lang-th">* การตั้งค่าการจองพื้นที่จะทำได้หลังสร้างอีเว้นท์เสร็จ</p>
                    <button type="submit" className="btn btn-success">สร้างอีเว้นท์</button>
                </form>
            </div>
        </div>
    );
};

export default HostEvent;