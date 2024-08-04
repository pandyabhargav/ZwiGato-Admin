// reducers.js

const initialState = {
    data: [],
    loading: false,
    error: null
  };
  
  const dataReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'FETCH_ALL_DATA_SUCCESS':
        return {
          ...state,
          data: action.payload,
          loading: false,
          error: null
        };
      case 'FETCH_ALL_DATA_ERROR':
        return {
          ...state,
          loading: false,
          error: action.payload
        };
      case 'ADD_DATA_SUCCESS':
        return {
          ...state,
          loading: false,
          error: null
        };
      case 'ADD_DATA_ERROR':
        return {
          ...state,
          loading: false,
          error: action.payload
        };
      // Add cases for update and delete actions
      default:
        return state;
    }
  };
  
  export default dataReducer;
  