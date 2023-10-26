import axios from "axios";

// Exportaciones 
export const GET_AIRCRAFTS = "GET_AIRCRAFTS";
export const GET_AIRCRAFTS_BYID = "GET_AIRCRAFTS_BYID";
export const GET_LOCATIONS = "GET_LOCATIONS"

// Functions
export const getAllAirCrafts = () => {
    return async function (dispatch) {
      const bdInfo = await axios.get("/aircraft");
      const plane = bdInfo.data;
      dispatch({ type: GET_AIRCRAFTS, payload: plane });
    };
  };

  export const getAirCraftById = (id) => {
    return async function (dispatch) {
      const bdInfo = await axios.get(`/aircraft/${id}`);
      const plane = bdInfo.data;
      dispatch({ type: GET_AIRCRAFTS_BYID, payload: plane });
    };
  }

  export const getAllLocations = () => {
    return async function (dispatch) {
      const locationsBd = await axios.get("/locations")
      const locations = locationsBd.data
      dispatch({type: GET_LOCATIONS, payload: locations})
    }
  }