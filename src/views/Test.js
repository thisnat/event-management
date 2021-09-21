import useStore from '../store'
import { successAlertRedirect, successToast } from '../service/alert';

const Test = () => {
    const bears = useStore(state => state.bears);

    return (
        <div className="container my-5">
            <h4>testing</h4>
            <p>there are {bears} bear(s) i guess</p>
            <div className="mt-4">
                <div>
                    <button className="btn btn-success" onClick={() => successAlertRedirect("test")}>magic</button>
                </div>
                <div>
                    <button className="btn btn-success mt-3" onClick={() => successToast("test")}>magic 2.0</button>
                </div>
            </div>
        </div>
    );
};

export default Test;