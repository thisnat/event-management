import { FETCHING_USER, FETCHED_USER, FETCH_ERROR_USER} from '../constant/actionTypes'

const initialState = {
    userData : {},
    isFetching : false,
    isError : false
}

const UserReducer = (state = initialState,action) => {
    switch(action.type) {
        case FETCHING_USER :
            return Object.assign({},state,{
                isFetching : true,
            })
        case FETCHED_USER :
            return Object.assign({},state,{
                userData : action.payload,
                isFetching : false,
            })
        case FETCH_ERROR_USER :
            return Object.assign({},state,{
                isError : true,
                isFetching : false
            })        
        default :
            return state;    
    }
}

export default UserReducer;