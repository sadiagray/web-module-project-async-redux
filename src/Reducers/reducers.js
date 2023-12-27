import { data } from './../data/jokesData';

import { FETCH_START, FETCH_SUCCESS, FETCH_ERROR } from './../Actions/actions'

const initialState = {
    jokes: data,
    loading: false,
    error:""
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
                loading: true,
                jokes: "",
                error: "err: the joke went over your head",
            }
        default:
            return(state);
    }
}

export default reducer;