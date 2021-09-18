import Host from '../components/event/Host';
import EventCard from '../components/card/EventCard';
import Detail from '../components/event/Detail';
import MoreDetail from '../components/event/MoreDetail';

import { eventList } from '../constant/EventMock'

const Event = (props) => {
    const eventId = props.match.params.id;

    return (
        <div className="container my-5">
            <div className="row">
                <div className="col-sm-3">
                    <Host />
                </div>
                <div className="col-sm-9">
                    <div style={{maxWidth:600, margin:"auto"}}>
                        <EventCard data={eventList[2]} />
                        <div className="lang-th" style={{textAlign:"center"}}>
                            <button className="btn btn-success mt-2 me-3">เข้าร่วม</button>
                            <button className="btn btn-primary mt-2 me-3">จองพื้นที่</button>
                        </div>
                    </div>
                    <div className="row mt-5">
                        <div className="col-sm-8">
                            <Detail />
                        </div>
                        <div className="col-sm-4">
                            <MoreDetail />
                        </div>
                    </div>
                    <p>Event ID : {eventId}</p>
                </div>
            </div>
        </div>
    );
};

export default Event;