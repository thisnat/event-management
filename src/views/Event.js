import Host from '../components/event/Host';
import EventCard from '../components/card/EventCard';
import Detail from '../components/event/Detail';
import MoreDetail from '../components/event/MoreDetail';

import { eventList } from '../constant/EventMock'

const Event = (props) => {
    const eventId = props.match.params.id;

    const dummy = {
        isOrg : false,
        name : "Jane",
        lastName : "Doe",
        username : "jane",
        pic : "https://source.boringavatars.com/marble/120/Maria%20Mitchell?colors=264653,2a9d8f,e9c46a,f4a261,e76f51"
    }

    return (
        <div className="container my-5">
            <div className="row">
                <div className="col-sm-3">
                    <Host user={dummy}/>
                </div>
                <div className="col-sm-9">
                    <div style={{maxWidth:600, margin:"auto"}}>
                        <EventCard data={eventList[2]} />
                        <div className="lang-th" style={{textAlign:"center"}}>
                            <button className="btn btn-success mt-4 me-3">เข้าร่วม</button>
                            <button className="btn btn-primary mt-4 me-3">จองพื้นที่</button>
                        </div>
                    </div>
                    <div className="row mt-5">
                        <div className="col-sm-8">
                            <Detail />
                        </div>
                        <div className="col-sm-4 border-start">
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