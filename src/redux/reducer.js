import {
GET_AIRCRAFTS
} from "./Actions";

const initialState = {
    allAircrafts: [],
    
  };
  
  const rootReducer = (state = initialState, action) => {
  
    switch (action.type) {
        case GET_AIRCRAFTS:
        return {
            ...state,
            allAircrafts: action.payload,
        };

      default:
        return {
          ...state,
        };
    }
  };
  
  export default rootReducer;
  