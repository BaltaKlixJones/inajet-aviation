import {
GET_AIRCRAFTS,
GET_AIRCRAFTS_BYID,
GET_LOCATIONS
} from "./Actions";

const initialState = {
    allAircrafts: [],
    aircraft : [],
    locations: []
  };
  
  const rootReducer = (state = initialState, action) => {
  
    switch (action.type) {
        case GET_AIRCRAFTS:
        return {
            ...state,
            allAircrafts: action.payload,
        };
        case GET_AIRCRAFTS_BYID:
        return {
            ...state,
            aircraft: action.payload,
        };
        case GET_LOCATIONS:
          return {
            ...state,
            locations: action.payload
          }

      default:
        return {
          ...state,
        };
    }
  };
  
  export default rootReducer;
  