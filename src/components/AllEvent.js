import { useState, useEffect } from "react";
import EventCard from "../components/card/EventCard";

import { API_BASE } from "../constant/api"
import axios from "axios";

const AllEvent = () => {

    const [eventList, setEventList] = useState([]);
    const [error, setError] = useState("");

    useEffect(() => {
        axios.get(`${API_BASE}/event`).then( res => {
            setEventList(res.data);
        }).catch((err) => {
            setError(err.message)
        })
    }, [])

    return (
        <div className="container lg mt-5">
            <h2 className="lang-th">🌐 งานอีเว้นท์ทั้งหมด</h2>
            <div className="row mt-4">
                {
                    !error
                    ? eventList.map((data, index) => (
                        <div className="col-sm-4" key={index}>
                            <EventCard data={data}/>
                        </div>
                    ))
                    : <h2>{error}</h2>
                }
            </div>
        </div>
    );
};

export default AllEvent;