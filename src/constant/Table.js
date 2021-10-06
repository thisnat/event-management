import { DateTime } from 'luxon'

function getStatus(status) {
    if (status === 0) {
        return <span className="badge rounded-pill bg-secondary">รอการชำระเงิน</span>
    } 
    else if (status === 1) {
        return <span className="badge rounded-pill bg-warning text-dark">กำลังดำเนินการ</span>
    }
    else if (status === 2) {
        return <span className="badge rounded-pill bg-success">จองพื้นที่สำเร็จ</span>
    }
    else if (status === 3) {
        return <span className="badge rounded-pill bg-danger">ยกเลิก</span>
    }
    else {
        return <span className="badge rounded-pill bg-secondary">null</span>
    }
}

export const joinColumns = [
    {
        name: 'ชื่ออีเว้นท์',
        selector: row => <a href={`/event/${row.eventId}`}>{row.eventName}</a>,
    },
    {
        name: 'เข้าร่วมเมื่อ',
        selector: row => DateTime.fromISO(row.joinDate).toLocaleString(DateTime.DATETIME_SHORT),
    },
];

export const hostColumns = [
    {
        name: 'ชื่ออีเว้นท์',
        selector: row => <a href={`/event/${row._id}`}>{row.name}</a>,
    },
    {
        name: 'จำนวนผู้เข้าร่วม',
        selector: row => row.join,
    },
    {
        name: 'จำนวนผู้จองพื้นที่',
        selector: row => row.reserve,
    },
    {
        name: 'สร้างเมื่อ',
        selector: row => DateTime.fromISO(row.create_at).toLocaleString(DateTime.DATETIME_SHORT),
    },
    {
        name: 'จัดการ',
        selector: row => <a className="btn btn-primary" href={`/event/${row._id}/setting`}>จัดการ</a>,
    },
];

export const joinList = [
    {
        name: 'ชื่อ',
        selector: row => `${row.name} ${row.lastName}`,
    },
    {
        name: 'username',
        selector: row => row.username,
    },
    {
        name: 'email',
        selector: row => row.email,
    },
    {
        name: 'เข้าร่วมเมื่อ',
        selector: row => DateTime.fromISO(row.joinDate).toLocaleString(DateTime.DATETIME_SHORT),
    },
];

export const zoneList = [
    {
        name : 'อีเว้นท์',
        selector: row => <a href={`/event/${row.eventId}`}>{row.eventName}</a>,
    },
    {
        name : 'ชื่อพื้นที่',
        selector: row => row.zoneName,
    },
    {
        name : 'ราคา',
        selector: row => row.zonePrice,
    },
    {
        name : 'สถานะ',
        selector: row => getStatus(row.status),
    },
    {
        name : 'หมายเลขการจอง',
        selector: row => row._id,
    },
    {
        name : 'รายละเอียด',
        selector: row => row.status === 0 ? <a className="btn btn-primary" href={`/confirm/${row._id}`}>แจ้งชำระ</a> : <button className="btn btn-primary" disabled>แจ้งชำระ</button>
    },
]

export const confirmList = [
    {
        name : 'ผู้จองพื้นที่',
        selector: row => row.username,
    },
    {
        name : 'ชื่อพื้นที่',
        selector: row => row.zoneName,
    },
    {
        name : 'ราคา',
        selector: row => row.zonePrice,
    },
    {
        name : 'แจ้งชำระเมื่อ',
        selector: row => DateTime.fromISO(row.update_at).toLocaleString(DateTime.DATETIME_SHORT),
    },
    {
        name : 'หลักฐานการชำระ',
        selector: row => <button className="btn btn-primary">สลิป</button>,
    },
    {
        name : 'ดำเนินการ',
        selector: row => <div>
            <button className="btn btn-success me-2">ยอมรับ</button>
            <button className="btn btn-danger">ยกเลิก</button>
        </div>,
    },
]