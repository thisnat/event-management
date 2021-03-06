import { useState, useEffect } from 'react';
import axios from 'axios';
import { API_BASE } from '../constant/api';
import { getWithToken, postWithToken, haveToken } from '../service/api';
import { successToast } from '../service/alert'

import Host from '../components/event/Host';
import EventCard from '../components/card/EventCard';
import Detail from '../components/event/Detail';
import MoreDetail from '../components/event/MoreDetail';
import Loading from "../components/Loading";
import NotFound from "./NotFound";

const Event = (props) => {
    const eventId = props.match.params.id;

    const [eventData, setEventData] = useState({});
    const [user, setUser] = useState({});

    const [isLoading, setIsLoading] = useState(false);
    const [isJoin, setIsJoin] = useState(false);

    const handleJoinBtn = (e) => {
        e.preventDefault()

        let payload = {
            eventName : eventData.name, 
        }

        postWithToken(`/join/${eventId}`, payload).then(res => {
            console.log(payload);
            setIsJoin(true);
            successToast("เข้าร่วมอีเว้นท์สำเร็จ");
        });
    }

    useEffect(() => {
        setIsLoading(true);
        axios.get(`${API_BASE}/event/id/${eventId}`).then(res => {
            setEventData(res.data);
            setIsLoading(false);
        }).catch(() => {
            setIsLoading(false);
        })

        if (haveToken()) {
            getWithToken('/user/token').then(res => {
                setUser(res.data);
            });

            getWithToken(`/join/isJoin/${eventId}`).then(res => {
                if (res.data) {
                    setIsJoin(true);
                }
            })
        }

    }, [eventId])

    if (Object.keys(eventData).length !== 0) {
        return (
            <div className="container my-5">
                <div className="row">
                    <div className="col-md-3">
                        {
                            eventData.hostData
                                ? <Host user={eventData.hostData} />
                                : null
                        }
                    </div>
                    <div className="col-md-9">
                        <div style={{ maxWidth: 550, margin: "auto" }}>
                            <EventCard data={eventData} />
                            <div className="lang-th" style={{ textAlign: "center" }}>
                                {
                                    haveToken()
                                        ? user.username === eventData.hostData.username
                                            ? <a className="btn btn-primary mt-4" href={`./${eventId}/setting`}>จัดการอีเว้นท์</a>
                                            : <div>
                                                <button className="btn btn-success mt-4 me-3" onClick={handleJoinBtn} disabled={isJoin ? "disabled" : ""}>{isJoin ? "เข้าร่วมแล้ว" : "เข้าร่วม"}</button>
                                                <a className="btn btn-primary mt-4 me-3" href={`/reserve/${eventId}`}>จองพื้นที่</a>
                                            </div>
                                        : null
                                }
                            </div>
                        </div>
                        <div className="row mt-5">
                            <div className="col-sm-8">
                                <Detail data={eventData.about} />
                            </div>
                            <div className="col-sm-4 border-start">
                                <MoreDetail data={eventData} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    } else if (isLoading) {
        return <Loading />
    }

    return <NotFound />
};

export default Event;