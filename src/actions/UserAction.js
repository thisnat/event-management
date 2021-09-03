import axios from 'axios';
import store from '../store';

import { FETCHING_USER, FETCHED_USER, FETCH_ERROR_USER} from '../constant/actionTypes'

const fetchingUser = () => {
    return {
        type : FETCHING_USER
    }
}

const fetchedUser = ( data ) => {
    return {
        type : FETCHED_USER,
        payload : data
    }
}

const fetchErrorUser = () => {
    return {
        type : FETCH_ERROR_USER
    }
}

export const fetchUser = () => {
    store.dispatch(fetchingUser());

    return (dispatch, getState) => {
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(( res ) => {
            dispatch(fetchedUser(res.data));
        })
        .catch(( err ) => {
            dispatch(fetchErrorUser());
        });
    }
}