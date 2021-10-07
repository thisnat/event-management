import { useState } from 'react';
import axios from 'axios';

import useStore from '../store'
import { successAlertRedirect, successToast } from '../service/alert';

const Test = () => {
    const bears = useStore(state => state.bears);
    const [file, setFile] = useState([]);

    const config = {
        headers: { 'content-type': 'multipart/form-data' }
    }

    const onUpload = () => {
        let test = new FormData();
        test.append("content", file);
        test.append("data", "test");

        axios.post("http://localhost:2626/api/upload", test, config)
            .then(response => {
                console.log(response);
            })
            .catch(error => {
                console.log(error);
            });
    }

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
            <div className="mt-4">
                <input type="file" className="form-control" accept="image/png, image/jpeg" onChange={
                    (e) => setFile(e.target.files[0])
                } />
                <button className="btn btn-primary" onClick={onUpload}>upload</button>
            </div>
        </div>
    );
};

export default Test;