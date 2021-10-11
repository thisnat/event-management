import { useState, useEffect } from 'react';
import axios from 'axios';
import { API_BASE } from '../constant/api';
import NotFound from '../views/NotFound';
import ReserveNotActive from '../components/ReserveNotActive';
import { ReserveZone } from '../style/Image';
import { Card } from '../style/Card';
import ReserveSelect from '../components/event/ReserveSelect';
import { patchWithToken } from '../service/api';
import { CONTENT_URL } from '../constant/api';

const Reserve = (props) => {

    const eventId = props.match.params.id;
    const [eventData, setEventData] = useState({});
    const [reserveData, setReserveData] = useState({});
    const [isError, setIsError] = useState(false);
    const [price, setPrice] = useState(0);

    const [zoneId, setZoneId] = useState("");

    const handleReserveBtn = (e) => {
        e.preventDefault();

        if (zoneId) {
            patchWithToken(`/zone/reserve/${zoneId}`, { eventId : eventData._id, eventName : eventData.name }).then(res => {
                window.location.replace("/myzone");
            })
        } else {
            alert("กรุณาเลือกพื้นที่")
        }
    }

    useEffect(() => {
        axios.get(`${API_BASE}/event/id/${eventId}`).then(res => {
            setEventData(res.data);
        }).catch(() => {
            setIsError(true)
        })

        axios.get(`${API_BASE}/reserve/event/${eventId}`).then(res => {
            setReserveData(res.data);
        })
    }, [eventId])

    if (!eventData.canReserve && !isError) {
        return <ReserveNotActive id={eventId} />
    } else if (isError) {
        return <NotFound />
    }

    return (
        <div className="container my-4 lang-th">
            <h1>{eventData.name} / จองพื้นที่</h1>
            <div className="text-center mt-4">
                <ReserveZone src={`${CONTENT_URL}${reserveData.pic}`} />
            </div>
            <div className="row mt-5">
                <Card className="col-md">
                    <h5>ช่องทางการชำระเงิน</h5>
                    <p className="ms-2" style={{fontSize:"1.4rem"}}>{reserveData.paymentInfo}</p>
                    <h5>รายละเอียดการจองพื้นที่</h5>
                    <p className="ms-2">{reserveData.info}</p>
                </Card>
                <div className="col-md">
                    <ReserveSelect id={eventId} setPrice={setPrice} setZoneId={setZoneId} />
                    <p className="text-muted mt-2">เหลือพื้นที่ {eventData.maxReserve - eventData.reserve} พื้นที่</p>
                    <h2>ราคา {price} บาท</h2>
                    <p className="text-muted">id : {zoneId}</p>
                    <button className="btn btn-success" onClick={handleReserveBtn}>จองพื้นที่</button>
                </div>
            </div>
        </div>
    );
};

export default Reserve;