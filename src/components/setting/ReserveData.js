import { useState, useEffect } from "react";
import useStore from "../../store";
import DataTable from "react-data-table-component";
import { postWithToken } from '../../service/api';
import { confirmList } from '../../constant/Table';

const ReserveData = () => {

    const eventData = useStore(state => state.eventData);
    const [paymentList, setPaymentList] = useState([]);

    useEffect(() => {
        postWithToken('/payment/event/confirm/', { eventId: eventData._id }).then(res => {
            setPaymentList(res.data);
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
                title="การจองพื้นที่" />
        </div>
    );
};

export default ReserveData;