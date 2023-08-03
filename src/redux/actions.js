export const GET_AIRCRAFTS = "GET_AIRCRAFTS";
export const GET_AIRCRAFTS_BYID = "GET_AIRCRAFTS_BYID";
import axios from "axios";

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