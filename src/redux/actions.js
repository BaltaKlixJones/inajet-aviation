export const GET_AIRCRAFTS = "GET_AIRCRAFTS";
import axios from "axios";

export const getAllAirCrafts = () => {
    return async function (dispatch) {
      const bdInfo = await axios.get("/aircraft");
      const plane = bdInfo.data;
      dispatch({ type: GET_AIRCRAFTS, payload: plane });
    };
  };