import { useState, useEffect } from "react";
import useStore from "../../store";
import DataTable from "react-data-table-component";
import { postWithToken } from '../../service/api';
import { confirmList, paidList } from '../../constant/Table';

const ReserveData = () => {

    const eventData = useStore(state => state.eventData);

    const [paymentList, setPaymentList] = useState([]);
    const [confirmPayment, setConfirmPayment] = useState([]);

    useEffect(() => {
        postWithToken('/payment/event/confirm/', { eventId: eventData._id }).then( async res => {
            setPaymentList(res.data);
            let { data } = await postWithToken('/payment/event/paid/', { eventId: eventData._id });
            setConfirmPayment(data)
        })
    }, [eventData._id])

    return (
        <div className="mt-4">
            <DataTable
                title="การจองพื้นที่ รออนุมัติ"
                data={paymentList}
                columns={confirmList}
                responsive
                subHeaderAlign="right"
                subHeaderWrap />
                <br />
            <DataTable
                title="การจองพื้นที่"
                data={confirmPayment}
                columns={paidList}
                pagination
                responsive
                subHeaderAlign="right"
                subHeaderWrap />
        </div>
    );
};

export default ReserveData;