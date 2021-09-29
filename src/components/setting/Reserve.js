import useStore from "../../store";
import ReserveSetting from "./ReserveSetting";

const Reserve = () => {
    const eventData = useStore(state => state.eventData);

    if(!eventData.canReserve){
        return <ReserveSetting />
    }

    return (
        <div>
            <h1>its reserve</h1>
            <p>{eventData.name}</p>
        </div>
    );
};

export default Reserve;