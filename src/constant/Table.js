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
        name: 'สร้างเมื่อ',
        selector: row => DateTime.fromISO(row.create_at).toLocaleString(DateTime.DATETIME_SHORT),
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