import { DateTime } from "luxon";

const MoreDetail = ({ data }) => {
    return (
        <div className="p-2 lang-th">
            <h4>กำหนดการ</h4>
            <div className="text-muted mt-2">
                <p className="mb-0">📅 วันที่ : {DateTime.fromISO(data.date).toLocaleString()}</p>
                <p className="mb-0">🕒 เวลา : {data.time}</p>
                <p>📍 สถานที่ : {data.location}</p>
            </div>
            <div className="mt-4">
                <h4>เพิ่มเติม</h4>
                <div className="text-muted">
                    <p className="mb-0">สร้างเมื่อ {DateTime.fromISO(data.create_at).toLocaleString(DateTime.DATE_FULL)}</p>
                    {/*<p>แก้ไขล่าสุด {DateTime.fromISO(data.update_at).toRelative()}</p>*/}
                </div>
            </div>
        </div>
    );
};

export default MoreDetail;