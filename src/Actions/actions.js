import axios from "axios";

export const FETCH_START = "FETCH_START";
export const FETCH_SUCCESS = "FETCH_SUCCESS";
export const FETCH_ERROR = "FETCH_ERROR";
export const SEARCH_SUBMITTED = "SEARCH_SUBMITTED";

export const getJokes = (searchTerm) => {
    return (dispatch => {
      dispatch(fetchStart());
      axios.get(`https://official-joke-api.appspot.com/jokes/${searchTerm}/random`)
        .then(res => {
          console.log('Response:', res);
          dispatch(fetchSuccess(res.data));
        })
        .catch(err => {
          console.log('Error:', err);
          dispatch(fetchError())
        });
    });
  }

  export const getRandomJoke = () => {
    return async dispatch => {
      dispatch(fetchStart());
      try {
        const res = await axios.get('https://official-joke-api.appspot.com/jokes/random');
        dispatch(fetchSuccess([res.data]));
      } catch (err) {
        dispatch(fetchError());
      }
    };
  };

export const fetchStart = () => {
    return ({ type: FETCH_START });
}

export const fetchSuccess = jokes => {
    return ({ type: FETCH_SUCCESS, payload: jokes });
}

export const fetchError = () => {
    return ({
        type:FETCH_ERROR,
    });
}

export const searchSubmitted = () => {
    return ({type: SEARCH_SUBMITTED })
}