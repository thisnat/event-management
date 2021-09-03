const EventShowcase = () => {
    return (
        <div className="container-sm mt-4">
            <h2 className="lang-th">✨ งานอีเว้นท์ที่น่าสนใจ</h2>
            <div className="row event-showcase mt-4">
                <div className="col-sm-8">
                    <p style={{ fontSize: "5rem" }}>🏠</p>
                    <p style={{ fontWeight: "bold" }} className="gradient-text">somtething market</p>
                    <div className="event-showcase-detail lang-th">
                        <p className="mb-0">เข้าร่วมแล้ว 15 คน</p>
                        <p>จองพื้นที่แล้ว 7 คน</p>
                        <button className="btn btn-primary">รายละเอียด</button>
                    </div>
                </div>
                <div className="col-sm-4 mt-5 event-showcase-host">
                    <img src="https://avatars.dicebear.com/api/micah/somethingbkk.svg?background=%23ede1be" alt="host" />
                    <h2 className="mt-4">@somethingbkk</h2>
                </div>
            </div>
        </div>
    );
};

export default EventShowcase;