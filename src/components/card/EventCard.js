const EventCard = ({ data }) => {
    return (
        <a href="/" className="event-card-base" style={{textDecoration:"none"}}>
            <div className="event-card" style={{backgroundColor:data.color}}>
                <p className="event-card-host">@{data.host}</p>
                <p className="event-card-emoji">{data.emoji}</p>
                <h4 className="lang-th">{data.name}</h4>
                <div className="event-card-detail lang-th">
                    <p className="mb-0">ลงทะบียนแล้ว {data.regis} คน</p>
                    <p>จองพื้นที่แล้ว {data.reserve} พื้นที่</p>
                </div>
            </div>
        </a>
    );
};

export default EventCard;