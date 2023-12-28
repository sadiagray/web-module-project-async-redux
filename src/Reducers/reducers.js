import { data } from './../data/jokesData';

import { FETCH_START, FETCH_SUCCESS, FETCH_ERROR, SEARCH_SUBMITTED } from './../Actions/actions'

const initialState = {
    jokes: data,
    loading: false,
    error:"",
    hasSearched: false
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case FETCH_START:
            return {
                ...state,
                loading: true,
                error: ""
            }
        case FETCH_SUCCESS:
            return {
                ...state,
                loading: false,
                jokes: action.payload,
                error:""
            }
        case FETCH_ERROR:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        case SEARCH_SUBMITTED:
            return {
                ...state,
                hasSearched: true
            }
        default:
            return(state);
    }
}

export default reducer;