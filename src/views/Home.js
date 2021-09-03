import EventShowcase from "../components/card/EventShowcase";
import AllEvent from "../components/AllEvent";

const Home = () => {
    return (
        <div className="my-4">
            <EventShowcase />
            <AllEvent />
        </div>
    );
};

export default Home;