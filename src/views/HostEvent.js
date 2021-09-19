import { useState } from 'react';
import EventCard from '../components/card/EventCard';

import { CirclePicker } from 'react-color';
import { colorList } from '../constant/color';

import 'emoji-mart/css/emoji-mart.css'
import { Picker } from 'emoji-mart'

const HostEvent = () => {

    const userData = JSON.parse(localStorage.getItem('userData'));

    const [data, setData] = useState({
        emoji: "🎉",
        name: "????",
        host: userData.username,
        color: "#307fe2",
        regis: "??",
        reserve: "??/??"
    });

    const [emojiOpen, setEmojiOpen] = useState(false);

    return (
        <div className="container my-4">
            <h2 className="lang-th">สร้างงานอีเว้นท์</h2>
            <div className="m-auto" style={{ maxWidth: 500 }}>
                <EventCard data={data} />
            </div>
            <div className="m-auto mt-5 lang-th" style={{ maxWidth: 800 }}>
                <form>
                    <div className="mb-3">
                        <label className="form-label">ชื่ออีเว้นท์</label>
                        <input type="text" className="form-control" required onChange={(e) => {
                            if (e.target.value === "") {
                                setData(Object.assign({}, data, { name: "????" }));
                            } else {
                                setData(Object.assign({}, data, { name: e.target.value }));
                            }
                        }} placeholder="ไม่เกิน x ตัวอักษร"/>
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
                            <input type="text" className="form-control" required />
                        </div>
                        <div className="col-md mb-3">
                            <label className="form-label">เวลา</label>
                            <input type="text" className="form-control" required />
                        </div>
                        <div className="col-md">
                            <label className="form-label">สถานที่</label>
                            <input type="text" className="form-control" required />
                        </div>
                    </div>
                    <div className="mb-4">
                        <label className="form-label">รายละเอียด</label>
                        <input type="text" className="form-control" required />
                    </div>
                    <button type="submit" className="btn btn-success">สร้างอีเว้นท์</button>
                </form>
            </div>
        </div>
    );
};

export default HostEvent;