import axios from 'axios';
import store from '../store';

const fetchingUser = () => {
    return {
        type : 'FETCHING_USER'
    }
}

const fetchedUser = ( data ) => {
    return {
        type : 'FETCHED_USER',
        payload : data
    }
}

const fetchErrorUser = () => {
    return {
        type : 'FETCHING_ERROR_USER'
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