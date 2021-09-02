import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { fetchUser } from '../actions/UserAction';

const Home = () => {

    const dispatch = useDispatch();
    const userData = useSelector((state) => state.UserReducer.userData)

    useEffect(() => {
        dispatch(fetchUser());
    },[dispatch])

    return (
        <div>
            <h1>hello</h1>
            {
                console.log(userData)
            }
        </div>
    );
};

export default Home;