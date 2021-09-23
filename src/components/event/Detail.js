import { DateTime } from 'luxon';

const Detail = ({data}) => {
    return (
        <div className="p-2 lang-th">
            <h4>รายละเอียด</h4>
            <p>{data.about}</p>
            <div className="mt-5 text-muted">
                <p className="mb-0">สร้างเมื่อ {DateTime.fromISO(data.create_at).toLocaleString(DateTime.DATE_FULL)}</p>
                <p>แก้ไขล่าสุด {DateTime.fromISO(data.update_at).toRelative()}</p>
            </div>
        </div>
    );
};

export default Detail;