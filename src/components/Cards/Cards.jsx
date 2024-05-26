import React, { useEffect } from "react";
import "./Cards.css";

import { FiUsers, FiWind } from "react-icons/fi";
import { GiRadarSweep } from "react-icons/gi";
import { useNavigate } from "react-router-dom";
import { getAllAirCrafts, getAirCraftById } from "../../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import { extractKilometers, extractKilometersH } from "../../utils/extractkm";
import { aircraftOrder } from "../../utils/aircraftsOrder";

const Cards = () => {
  const dispatch = useDispatch();
  const allAircrafts = useSelector((state) => state.allAircrafts);
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getAllAirCrafts());
  }, [dispatch]);

  const handleOnClick = (id) => {
    dispatch(getAirCraftById(id));
    navigate(`/aircraft/${id}`);
  };

  const sortByOrder = (a, b) => {
    return aircraftOrder.indexOf(a.name) - aircraftOrder.indexOf(b.name);
  };

  const sortedAircrafts = allAircrafts.sort(sortByOrder);

  return (
    <div className="cards-container">
      {sortedAircrafts?.map((aircraft) => (
        <div className="card" key={aircraft.id}>
          <img
            src={aircraft.image}
            alt={aircraft.name}
            className="card-image"
            onClick={() => handleOnClick(aircraft.id)}
            loading="lazy"
          />
          <h2 className="card-title">{aircraft.name}</h2>
          <h4 className="card-type">{aircraft.type}</h4>
          <div className="radio-input2">
            <label>
              <input
                type="radio"
                id="value-1"
                name="value-radio"
                value="value-1"
              />
              <span>
                <FiUsers style={{ marginRight: "5px", fontSize: "20px" }} />
              </span>
              {aircraft.capacity}
            </label>
            <label>
              <input
                type="radio"
                id="value-2"
                name="value-radio"
                value="value-2"
              />
              <span>
                <GiRadarSweep
                  style={{ marginRight: "5px", fontSize: "20px" }}
                />
              </span>
              {extractKilometers(aircraft.range)}
            </label>
            <label>
              <input
                type="radio"
                id="value-3"
                name="value-radio"
                value="value-3"
              />
              <span>
                <FiWind style={{ marginRight: "5px", fontSize: "20px" }} />
              </span>
              {extractKilometersH(aircraft.speed)}
            </label>
            <span className="selection"></span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cards;
