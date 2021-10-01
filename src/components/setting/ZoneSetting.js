import useStore from '../../store'
import {useState, useEffect} from 'react';

import axios from 'axios';
import { API_BASE } from '../../constant/api';

import Zone from './Zone';

const ZoneSetting = () => {

    const eventId = useStore(state => state.eventId);

    const [zoneList, setZoneList] = useState([]);

    useEffect(() => {
        axios.get(`${API_BASE}/zone/zoneByEvent/${eventId}`).then(res => {
            setZoneList(res.data)
        })
    },[eventId])

    const handleSubmitBtn = () => {
        axios.patch(`${API_BASE}/event/reserveDone/${eventId}`).then(() => {
            window.location.replace("./setting");
        })
    }

    return (
        <div>
            <h4>zone setting : {eventId}</h4>
            <div className="row">
                {
                    zoneList
                    ? zoneList.map((zone, index) => (
                        <div className="col-md-2" key={index}>
                            <Zone zone={zone} />
                        </div>
                    ))
                    : null
                }
            </div>
            <hr />
            <p className="text-muted">* การตั้งค่าครั้งนี้สามารถตั้งได้ครั้งเดียว เมื่อตั้งค่าแล้วกรุณากดอัพเดทเพื่ออัพเดทข้อมูล</p>
            <button className="btn btn-success" onClick={handleSubmitBtn}>ยืนยัน</button>
        </div>
    );
};

export default ZoneSetting;