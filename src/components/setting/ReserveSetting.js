const ReserveSetting = () => {
    return (
        <div className="mt-5">
            <h2>กรุณาตั้งค่าเพื่อเปิดการใช้งานการจองพื้นที่</h2>
            <form>
                <div className="row mt-4">
                    <div className="col-md">
                        <label className="form-label">ปริมาณพื้นที่ที่เปิดให้จอง</label>
                        <input type="number" className="form-control" required />
                        <p className="text-muted mt-2">** ปริมาณพื้นไม่สามารถแก้ไขได้ในภายหลัง</p>
                    </div>
                    <div className="col-md">
                        <label className="form-label">ข้อมูลการชำระเงิน (เช่น บัญชีธนาคาร)</label>
                        <input type="text" className="form-control" required />
                    </div>
                </div>
                <div className="row mt-4">
                    <div className="col-md">
                        <label className="form-label">รายละเอียดเพิ่มเติม</label>
                        <input type="text" className="form-control" required />
                    </div>
                    <div className="col-md">
                        <p>รูปแสดงพื้นที่ภายในงาน</p>
                        <button className="btn btn-primary">เลือก</button>
                    </div>
                </div>
                <button className="btn btn-success mt-5">ตกลง</button>
            </form>
        </div>
    );
};

export default ReserveSetting;