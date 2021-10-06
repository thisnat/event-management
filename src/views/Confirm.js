import { useState, useEffect } from 'react';
import { getWithToken } from '../service/api';

import NotFound from '../views/NotFound';

const Confirm = (props) => {
    const paymentId = props.match.params.id
    const [payment, setPayment] = useState({});
    const [reserve, setReserve] = useState({});
    const [error, setError] = useState(false);

    useEffect(() => {
        getWithToken(`/payment/${paymentId}`).then( async res => {
            setPayment(res.data);
            let { data } = await getWithToken(`/reserve/${res.data.reserveId}`);
            setReserve(data);
        }).catch(() => {
            setError(true)
        })
    }, [paymentId])

    if (error) {
        return <NotFound />
    }

    return (
        <div className="container my-4 lang-th">
            <h1>แจ้งชำระ</h1>
            <p className="text-muted">รหัสการจอง : {paymentId}</p>
            <div className="row">
                <div className="col-md">
                    <h4>ช่องทางการชำระเงิน</h4>
                    <h4 className="text-muted">{reserve.paymentInfo}</h4>
                    <h4 className="mt-4">รายละเอียดการจอง</h4>
                    <p className="text-muted">{reserve.info}</p>
                </div>
                <div className="col-md mt-2">
                    <h5>พื้นที่ : {payment.zoneName}</h5>
                    <h5>ราคา : {payment.zonePrice} บาท</h5>
                    <button className="btn btn-primary mt-4">อัพโหลดสลิป</button>
                </div>

            </div>
            <hr />
            <button className="btn btn-success">ยืนยันการแจ้งชำระ</button>
        </div>
    );
};

export default Confirm;