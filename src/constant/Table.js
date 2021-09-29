import { DateTime } from 'luxon'

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