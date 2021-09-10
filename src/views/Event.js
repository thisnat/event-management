import Host from '../components/event/Host';
import EventCard from '../components/card/EventCard';
import Detail from '../components/event/Detail';
import Action from '../components/event/Action';

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
                    </div>
                    <div className="row mt-5">
                        <div className="col-sm-8">
                            <Detail />
                        </div>
                        <div className="col-sm-4">
                            <Action />
                        </div>
                    </div>
                    <p>eventID = {eventId}</p>
                </div>
            </div>
        </div>
    );
};

export default Event;