import useStore from "../../store";

import ReserveSetting from "./ReserveSetting";
import ReserveData from "./ReserveData";


const Reserve = () => {
    const eventData = useStore(state => state.eventData);

    if (!eventData.canReserve) {
        return <ReserveSetting eventName={eventData.name} />
    }

    return <ReserveData />
};

export default Reserve;