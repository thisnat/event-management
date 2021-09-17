import useStore from '../store'
import { successAlertRedirect } from '../service/alert';

const Test = () => {
    const bears = useStore(state => state.bears);

    return (
        <div className="container my-5">
            <h4>testing</h4>
            <p>there are {bears} bear(s) i guess</p>
            <div className="mt-4">
                <button className="btn btn-success" onClick={() => successAlertRedirect("test")}>magic</button>
            </div>
        </div>
    );
};

export default Test;