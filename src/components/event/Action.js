const Action = () => {
    return (
        <div className="p-2 lang-th">
            <h4>รายละเอียดงาน</h4>
            <div className="text-muted mt-2">
                <p className="mb-0">📅 วันที่ : 9 June 2021</p>
                <p className="mb-0">🕒 เวลา : 16.00 - 18.00</p>
                <p>📍 สถานที่ : somewhere</p>
                <p>เวลาเปิดจองพื้นที่ : 4 June 2021, 19.00</p>
            </div>
            <div>
                <button className="btn btn-success">เข้าร่วม</button>
            </div>
            <div>
                <button className="btn btn-primary mt-2">จองพื้นที่</button>
            </div>
            <div>
                <button className="btn btn-secondary mt-2">รายละเอียดเพิ่มเติม</button>
            </div>
        </div>
    );
};

export default Action;