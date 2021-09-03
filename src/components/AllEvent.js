import EventCard from "../components/card/EventCard";

const AllEvent = () => {
    return (
        <div className="container lg mt-4">
            <h2 className="lang-th">🙌 งานอีเว้นท์ทั้งหมด</h2>
            <div className="row mt-4">
                <div className="col-sm-4">
                    <EventCard />
                </div>
                <div className="col-sm-4">
                    <EventCard />
                </div>
                <div className="col-sm-4">
                    <EventCard />
                </div>
                <div className="col-sm-4">
                    <EventCard />
                </div>
                <div className="col-sm-4">
                    <EventCard />
                </div>
            </div>
        </div>
    );
};

export default AllEvent;