import EventCard from "../components/card/EventCard";
import { eventList } from "../constant/EventMock";

const AllEvent = () => {
    return (
        <div className="container lg mt-5">
            <h2 className="lang-th">🌐 งานอีเว้นท์ทั้งหมด</h2>
            <div className="row mt-4">
                {
                    eventList.map((data, index) => (
                        <div className="col-sm-4" key={index}>
                            <EventCard data={data}/>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default AllEvent;