import useStore from "../../store";
import ReserveSetting from "./ReserveSetting";

const Reserve = () => {
    const eventData = useStore(state => state.eventData);

    if(!eventData.canReserve){
        return <ReserveSetting />
    }

    return (
        <div className="mt-4">
            <h4>หน้าการจอง</h4>
        </div>
    );
};

export default Reserve;