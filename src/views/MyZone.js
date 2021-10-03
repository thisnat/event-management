import React from 'react';
import DataTable from 'react-data-table-component';

const MyZone = () => {
    return (
        <div className="container my-4 lang-th">
            <h1>การจองพื้นที่</h1>
            <p className="text-muted lang-th">รวมประวัติการจองพื้นที่ของคุณ</p>
            <div className="mt-2">
                <DataTable
                    title="พื้นที่" />
            </div>
        </div>
    );
};

export default MyZone;