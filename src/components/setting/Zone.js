import { useState } from "react";
import styled from "styled-components";

import { patchWithToken } from '../../service/api';
import { successToast } from '../../service/alert';

const Card = styled.div`
border-radius : 1rem;
box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;
padding : 1rem;
`

const Zone = ({ zone }) => {

    const [update, setUpdate] = useState({
        name: zone.name,
        price: zone.price
    })

    const handleUpdateBtn = (e) => {
        e.preventDefault()

        patchWithToken(`/zone/update/${zone._id}`, update).then(() => {
            successToast(`อัพเดท ${update.name} สำเร็จ`)
        });
    }

    return (
        <Card>
            <form>
                <div>
                    <label className="form-label">ชื่อพื้นที่</label>
                    <input type="text" className="form-control" value={update.name} required onChange={
                        (e) => setUpdate(Object.assign({}, update, { name: e.target.value }))
                    } />
                </div>
                <div>
                    <label className="form-label">ราคาพื้นที่</label>
                    <input type="number" className="form-control" min="1" value={update.price} required onChange={
                        (e) => setUpdate(Object.assign({}, update, { price: e.target.value }))
                    } />
                </div>
                <button className="btn btn-primary mt-2" type="submit" onClick={handleUpdateBtn}>อัพเดท</button>
            </form>
        </Card>
    );
};

export default Zone;