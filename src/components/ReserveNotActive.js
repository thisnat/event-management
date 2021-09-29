const ReserveNotActive = ({id}) => {
    return (
        <div className="container lang-th" style={{marginTop:"8%", textAlign:"center"}}>
            <p style={{fontSize:"8rem"}}>🚧</p>
            <h1>ยังไม่เปิดให้จองพื้นที่</h1>
            <h4 className="text-muted">กรุณารอให้ Host ทำการเปิดจองพื้นที่</h4>
            <p className="text-muted">Event ID : {id}</p>
        </div>
    );
};

export default ReserveNotActive;