import { useState, useEffect } from 'react';
import DataTable from 'react-data-table-component';

import { getWithToken } from '../service/api';
import { zoneList } from '../constant/Table';

const MyZone = () => {

    const [zoneData, setZoneData] = useState([])

    useEffect(() => {
        getWithToken('/payment/user').then(res => {
            setZoneData(res.data);
        })
    }, [])

    return (
        <div className="container my-4 lang-th">
            <h1>การจองพื้นที่</h1>
            <p className="text-muted lang-th">รวมประวัติการจองพื้นที่ของคุณ</p>
            <div className="mt-2">
                <DataTable
                    title="พื้นที่"
                    data={zoneData}
                    columns={zoneList}
                    pagination
                    responsive
                    subHeaderAlign="right"
                    subHeaderWrap />
            </div>
        </div>
    );
};

export default MyZone;