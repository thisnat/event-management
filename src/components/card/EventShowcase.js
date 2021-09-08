import styled from "styled-components";

const DetailBtn = styled.button`
color : white;
background-color : black;
font-size : 1.1rem;
padding : 0.7rem 2rem;
border-radius : 1rem;
border : none;
box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
`

const EventShowcase = () => {
    return (
        <div className="container-sm mt-4" style={{maxWidth:1100}}>
            <h2 className="lang-th">✨ งานอีเว้นท์ที่น่าสนใจ</h2>
            <div className="row event-showcase mt-4">
                <div className="col-sm-8">
                    <p style={{ fontSize: "4.5rem" }}>🏠</p>
                    <p style={{ fontWeight: "bold" }} className="gradient-text">somtething market</p>
                    <div className="event-showcase-detail lang-th">
                        <p className="mb-0">เข้าร่วมแล้ว 15 คน</p>
                        <p>จองพื้นที่แล้ว 7 คน</p>
                        <DetailBtn>รายละเอียด</DetailBtn>
                    </div>
                </div>
                <div className="col-sm-4 mt-5 event-showcase-host">
                    <img src="https://avatars.dicebear.com/api/micah/adminlnwza.svg?background=%23ede1be" alt="host" />
                    <h2 className="mt-4">@somethingbkk</h2>
                </div>
            </div>
        </div>
    );
};

export default EventShowcase;