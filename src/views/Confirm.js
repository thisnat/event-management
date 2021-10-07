import { useState, useEffect } from 'react';
import { getWithToken } from '../service/api';

import axios from 'axios';
import { API_BASE } from '../constant/api';

import NotFound from '../views/NotFound';

const Confirm = (props) => {
    const paymentId = props.match.params.id
    const [payment, setPayment] = useState({});
    const [reserve, setReserve] = useState({});
    const [error, setError] = useState(false);

    const [file, setFile] = useState([]);

    const handleSumbit = () => {
        if (file.length === 0) {
            alert("กรุณาเลือกรูปหลักฐานการชำระเงิน")
        } else {
            let formData = new FormData();
            formData.append("content", file);
            formData.append("data", paymentId);

            axios.post(`${API_BASE}/upload/payment`, formData).then(() => {
                window.location.replace("/myzone");
            })
        }
    }

    useEffect(() => {
        getWithToken(`/payment/${paymentId}`).then(async res => {
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
                    <br />
                    <h5>หลักฐานการชำระเงิน</h5>
                    <input type="file" className="form-control" accept="image/png, image/jpeg" onChange={
                        (e) => setFile(e.target.files[0])
                    } />
                </div>

            </div>
            <hr />
            <button className="btn btn-success" onClick={handleSumbit}>ยืนยันการแจ้งชำระ</button>
        </div>
    );
};

export default Confirm;