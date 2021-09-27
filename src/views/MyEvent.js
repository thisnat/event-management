import { useState, useEffect } from 'react';
import { getWithToken, haveToken } from '../service/api';

import DataTable from 'react-data-table-component';
import { joinColumns, hostColumns } from '../constant/Table';

const MyEvent = () => {

    const [joinData, setJoinData] = useState([]);
    const [hostData, setHostData] = useState([]);

    useEffect(() => {
        if (haveToken()) {
            getWithToken('/join/user').then( res => {
                setJoinData(res.data);
            });

            getWithToken('/event/host').then( res => {
                setHostData(res.data);
            });
        }
    }, [])

    return (
        <div className="container my-4">
            <h1>My event</h1>
            <p className="text-muted lang-th">รวมประวัติการใช้งานเว็บไซต์ของคุณ (อีเว้นท์ที่เข้าร่วม, อีเว้นท์ที่สร้าง, พื้นที่ที่จอง)</p>
            <div className="mt-4 lang-th">
                <h4>อีเว้นท์ที่เข้าร่วม</h4>
                <DataTable
                    columns={joinColumns}
                    data={joinData}
                    pagination
                    responsive
                    subHeaderAlign="right"
                    subHeaderWrap />
            </div>
            <div className="mt-2 lang-th">
                <h4>อีเว้นท์ที่สร้าง</h4>
                <DataTable
                    columns={hostColumns}
                    data={hostData}
                    pagination
                    responsive
                    subHeaderAlign="right"
                    subHeaderWrap />
            </div>
        </div>
    );
};

export default MyEvent;