import { BlackBtn } from "../../style/Button";

const EventShowcase = () => {
    return (
        <div className="container" style={{maxWidth:1100}}>
            <h2 className="lang-th">✨ งานอีเว้นท์ที่น่าสนใจ</h2>
            <div className="row event-showcase mt-4">
                <div className="col-sm-8 lang-th">
                    <p style={{ fontSize: "4.5rem" }}>🏠</p>
                    <p style={{ fontSize:48 }} className="gradient-text">something market</p>
                    <div className="event-showcase-detail">
                        <p className="mb-0">เข้าร่วมแล้ว 15 คน</p>
                        <p>จองพื้นที่แล้ว 7 คน</p>
                        <BlackBtn>รายละเอียด</BlackBtn>
                    </div>
                </div>
                <div className="col-sm-4 mt-5 event-showcase-host">
                    <img src="https://avatars.dicebear.com/api/micah/lnwza555.svg?background=%23ede1be" alt="host" />
                    <h2 className="mt-4">@somethingbkk</h2>
                </div>
            </div>
        </div>
    );
};

export default EventShowcase;