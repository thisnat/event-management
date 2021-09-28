import { useState, useEffect } from 'react';
import useStore from '../store';
import { getWithToken, haveToken } from '../service/api';
import axios from 'axios';
import { API_BASE } from '../constant/api';

import JoinPage from '../components/setting/Join';
import ReservePage from '../components/setting/Reserve';

import Loading from "../components/Loading";
import NotFound from '../views/NotFound';

const EventSetting = (props) => {
    const eventId = props.match.params.id;
    const setEventId = useStore(state => state.setEventId);

    const [user, setUser] = useState({});
    const [eventData, setEventData] = useState({});
    const [isLoading, setIsLoading] = useState(false);
    const [joinActive, setJoinActive] = useState(true);
    const [reserveActive, setReserveActive] = useState(false);

    const handleJoinClick = (e) => {
        e.preventDefault()

        setJoinActive(true)
        setReserveActive(false)
    }
    const handleReserveClick = (e) => {
        e.preventDefault()

        setJoinActive(false)
        setReserveActive(true)
    }

    useEffect(() => {
        setIsLoading(true);
        setEventId(eventId)

        axios.get(`${API_BASE}/event/id/${eventId}`).then(res => {
            setEventData(res.data);
            setIsLoading(false);
        });

        if (haveToken()) {
            getWithToken('/user/token').then(res => {
                setUser(res.data);
            });
        }
    }, [eventId, setEventId])

    if (user && eventData.hostData && user.username === eventData.hostData.username) {
        return (
            <div className="container my-4 lang-th">
                <h1>จัดการอีเว้นท์</h1>
                <div>
                    <nav className="mt-2">
                        <ul className="pagination pagination">
                            <li className={`page-item ${joinActive ? "active" : ""}`}><button className="page-link" onClick={handleJoinClick}>การเข้าร่วม</button></li>
                            <li className={`page-item ${reserveActive ? "active" : ""}`}><button className="page-link" onClick={handleReserveClick}>การจองพื้นที่</button></li>
                        </ul>
                    </nav>
                </div>
                <div className="mt-2">
                    {
                        joinActive
                            ? <JoinPage />
                            : null
                    }
                    {
                        reserveActive
                            ? <ReservePage />
                            : null
                    }
                </div>
            </div>
        );
    } else if (isLoading) {
        return <Loading />
    }

    return <NotFound />
};

export default EventSetting;