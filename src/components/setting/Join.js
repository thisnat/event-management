import { useState, useEffect } from "react";
import useStore from "../../store";

import axios from "axios";
import { API_BASE } from "../../constant/api";

import DataTable from 'react-data-table-component';
import { joinList } from "../../constant/Table";

const Join = () => {
    const eventId = useStore(state => state.eventId);
    const [joinData, setJoinData] = useState([]);

    useEffect(() => {
        axios.get(`${API_BASE}/join/event/${eventId}`).then(res => {
            setJoinData(res.data);
        })
    },[eventId])

    return (
        <div className="mt-4">
            <DataTable
                    title="รายชื่อผู้เข้าร่วมอีเว้นท์"
                    columns={joinList}
                    data={joinData}
                    pagination
                    responsive
                    subHeaderAlign="right"
                    subHeaderWrap />
        </div>
    );
};

export default Join;