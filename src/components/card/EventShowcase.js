import { useState, useEffect } from "react";
import { BlackBtn } from "../../style/Button";
import axios from "axios";
import { API_BASE } from "../../constant/api";

const EventShowcase = () => {

    useEffect(() => {
        axios.get(`${API_BASE}/event/eventoftheday`).then(res => {
            setEventData(res.data);
        })
    },[])

    const [eventData, setEventData] = useState({});
    
    if(Object.keys(eventData).length === 0) {
        return null
    }

    return (
        <div className="container" style={{maxWidth:1100}}>
            <h2 className="lang-th">✨ งานอีเว้นท์ที่น่าสนใจ</h2>
            <div className="row event-showcase mt-4">
                <div className="col-sm-8 lang-th">
                    <p style={{ fontSize: "4.5rem" }}>{eventData.emoji}</p>
                    <p style={{ fontSize:48 }} className="gradient-text">{eventData.name}</p>
                    <div className="event-showcase-detail">
                        <p className="mb-0">เข้าร่วมแล้ว {eventData.join} คน</p>
                        <p>จองพื้นที่แล้ว {eventData.reserve} คน</p>
                        <BlackBtn href={`/event/${eventData._id}`}>รายละเอียด</BlackBtn>
                    </div>
                </div>
                <div className="col-sm-4 mt-5 event-showcase-host">
                    <img src={eventData.pic} alt="host" />
                    <h2 className="mt-4">@{eventData.host}</h2>
                </div>
            </div>
        </div>
    );
};

export default EventShowcase;