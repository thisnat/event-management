const MoreDetail = () => {
    return (
        <div className="p-2 lang-th">
            <h4>กำหนดการ</h4>
            <div className="text-muted mt-2">
                <p className="mb-0">📅 วันที่ : 9 June 2021</p>
                <p className="mb-0">🕒 เวลา : 16.00 - 18.00</p>
                <p>📍 สถานที่ : somewhere</p>
            </div>
            <div className="mt-4">
                <h4>เพิ่มเติม</h4>
                <button className="btn btn-secondary mt-2">ผู้เข้าร่วม</button>
            </div>
        </div>
    );
};

export default MoreDetail;