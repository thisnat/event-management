const EventCard = () => {
    return (
        <a href="/" style={{textDecoration:"none"}}>
            <div className="event-card">
                <p className="event-card-host">@foodfestbkk</p>
                <p className="event-card-emoji">🍣</p>
                <h4 className="lang-th">International Food festival 2021</h4>
                <div className="event-card-detail lang-th">
                    <p className="mb-0">ลงทะบียนแล้ว 78 คน</p>
                    <p>จองพื้นที่แล้ว 12/24 พื้นที่</p>
                </div>
            </div>
        </a>
    );
};

export default EventCard;