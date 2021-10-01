import useStore from "../../store";
import ReserveSetting from "./ReserveSetting";
import DataTable from "react-data-table-component";

const Reserve = () => {
    const eventData = useStore(state => state.eventData);

    if(!eventData.canReserve){
        return <ReserveSetting />
    }

    return (
        <div className="mt-4">
            <h2>การจองพื้นที่ รออนุมัติ</h2>
            <DataTable />
        </div>
    );
};

export default Reserve;