import { useState, useEffect } from 'react';
import axios from 'axios';
import { API_BASE } from '../constant/api';
import NotFound from '../views/NotFound';
import ReserveNotActive from '../components/ReserveNotActive';
import { ReserveZone } from '../style/Image';

const Reserve = (props) => {

    const eventId = props.match.params.id;
    const [eventData, setEventData] = useState({});
    const [isError, setIsError] = useState(false);

    useEffect(() => {
        axios.get(`${API_BASE}/event/id/${eventId}`).then(res => {
            setEventData(res.data);
        }).catch(() => {
            setIsError(true)
        })
    }, [eventId])

    if (!eventData.canReserve && !isError) {
        return <ReserveNotActive id={eventId}/>
    } else if (isError) {
        return <NotFound />
    }

    return (
        <div className="container my-4 lang-th">
            <h1>จองพื้นที่ / {eventData.name}</h1>
            <h5 className="text-muted">เหลือพื้นที่ {eventData.maxReserve - eventData.reserve} พื้นที่</h5>
            <div className="text-center mt-4">
                <ReserveZone src="https://demo.warptheme.com/images/placeholder_600x400.svg"/>
            </div>
        </div>
    );
};

export default Reserve;