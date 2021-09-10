import { useState } from 'react';
import EventCard from '../components/card/EventCard';

import { CirclePicker } from 'react-color';

import 'emoji-mart/css/emoji-mart.css'
import { Picker } from 'emoji-mart'

const HostEvent = () => {

    const [data, setData] = useState({
        emoji: "🎉",
        name: "????",
        host: "Username",
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
                        <input type="text" className="form-control" onChange={(e) => {
                            setData(Object.assign({}, data, { name: e.target.value }))
                        }}/>
                    </div>
                    <div className="row mb-3">
                        <div className="col-md mb-3">
                            <p>สีของอีเว้นท์</p>
                            <CirclePicker onChangeComplete={(color) => {
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
                                ? <Picker onSelect={(emoji) => { setData(Object.assign({}, data, { emoji: emoji.native })) }}/>
                                : null
                            }
                        </div>
                    </div>
                    <div className="mb-3">
                        <label className="form-label">รายละเอียด</label>
                        <input type="email" className="form-control" />
                    </div>
                    <button type="submit" className="btn btn-success">สร้างอีเว้นท์</button>
                </form>
            </div>
        </div>
    );
};

export default HostEvent;