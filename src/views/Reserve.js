import { useState, useEffect } from 'react';
import axios from 'axios';
import { API_BASE } from '../constant/api';
import NotFound from '../views/NotFound';
import ReserveNotActive from '../components/ReserveNotActive';

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
        <div className="container my-4">
            <h1>event id : {eventId}</h1>
            <p>{eventData.name}</p>
        </div>
    );
};

export default Reserve;