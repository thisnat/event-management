import useStore from "../../store";
import ReserveSetting from "./ReserveSetting";
import DataTable from "react-data-table-component";

const Reserve = () => {
    const eventData = useStore(state => state.eventData);

    if(!eventData.canReserve){
        return <ReserveSetting eventName={eventData.name}/>
    }

    return (
        <div className="mt-4">
            <DataTable 
            title="การจองพื้นที่ รออนุมัติ"/>
            <hr />
            <DataTable 
            title="การจองพื้นที่"/>
        </div>
    );
};

export default Reserve;