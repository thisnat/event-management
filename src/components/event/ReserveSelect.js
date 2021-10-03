import { useState, useEffect } from "react";

import axios from "axios";
import { API_BASE } from '../../constant/api'

const ReserveSelect = ({id, setPrice, setZoneId}) => {

    const [zoneList, setZoneList] = useState([]);

    const handleSelect = (e) => {
        let [zoneId, price] = e.target.value.split(",");
        
        setZoneId(zoneId);
        setPrice(price);
    }

    useEffect(() => {
        axios.get(`${API_BASE}/zone/zoneByEvent/${id}`).then(res => {
            setZoneList(res.data);
        })
    }, [id])

    return (
        <select className="form-select" onChange={handleSelect}>
            <option defaultValue value="">กรุณาเลือกพื้นที่</option>
            {
                zoneList.map((zone, index) => (
                    !zone.isReserve
                    ? <option key={index} value={`${zone._id},${zone.price}`} >{zone.name}</option>
                    : null
                ))
            }
        </select>
    );
};

export default ReserveSelect;