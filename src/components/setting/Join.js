import { useState, useEffect } from "react";
import useStore from "../../store";
import axios from "axios";
import { API_BASE } from "../../constant/api";
import DataTable from 'react-data-table-component';
import { joinList } from "../../constant/Table";

import { DateTime } from 'luxon';
import { downloadCSV } from "../../service/csv";

const Join = () => {
    const eventId = useStore(state => state.eventId);
    const [joinData, setJoinData] = useState([]);

    useEffect(() => {
        axios.get(`${API_BASE}/join/event/${eventId}`).then(res => {
            setJoinData(res.data);
        })
    }, [eventId])

    return (
        <div>
            <button className="btn btn-success float-end" onClick={() => downloadCSV(joinData, eventId)}>ดาวน์โหลดไฟล์ .csv</button>
            <DataTable
                title="รายชื่อผู้เข้าร่วมอีเว้นท์"
                columns={joinList}
                data={joinData}
                pagination
                responsive
                subHeaderAlign="right"
                subHeaderWrap />
            {
                joinData.length > 0
                    ? <p className="float-end">อัพเดทล่าสุด {DateTime.fromISO(joinData[joinData.length - 1].joinDate).toLocaleString(DateTime.DATETIME_SHORT)}</p>
                    : null
            }
        </div>
    );
};

export default Join;