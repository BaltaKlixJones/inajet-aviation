import React from "react";
import "./Cards.css";
import avion1 from "../../assets/images/aircraft/avion1.jpg";
import avion2 from "../../assets/images/aircraft/avion2.jpg";
import avion3 from "../../assets/images/aircraft/avion3.jpg";
import avion4 from "../../assets/images/aircraft/avion4.jpg";
import avion5 from "../../assets/images/aircraft/avion5.jpg";
import avion6 from "../../assets/images/aircraft/avion6.jpg";
import avion7 from "../../assets/images/aircraft/avion7.jpg";
import avion8 from "../../assets/images/aircraft/avion8.png";
import {FiUsers, FiMapPin, FiWind} from "react-icons/fi";
import {GiRadarSweep} from "react-icons/gi";

const Cards = () => {
  return (
    <div className="cards-container">
      <div className="card">
        <img src={avion1} alt="Card 1" className="card-image" />
        <h2 className="card-title">Tecnam P2021</h2>
        <div class="radio-input">
          <label>
            <input
              type="radio"
              id="value-1"
              name="value-radio"
              value="value-1"
            />
            <span><FiUsers style={{marginRight:"5px", fontSize:"20px"}}/></span>9
          </label>
          <label>
            <input
              type="radio"
              id="value-2"
              name="value-radio"
              value="value-2"
            />
            <span><GiRadarSweep style={{marginRight:"5px", fontSize:"20px"}}/></span>1778 km
          </label>
          <label>
            <input
              type="radio"
              id="value-3"
              name="value-radio"
              value="value-3"
            />
            <span><FiWind style={{marginRight:"5px", fontSize:"20px"}}/></span>565 km/h
          </label>
          <span class="selection"></span>
        </div>
      </div>
      <div className="card">
        <img src={avion2} alt="Card 2" className="card-image" />
        <h2 className="card-title">Piper PA-46R-350T Matrix</h2>
        <div class="radio-input">
          <label>
            <input
              type="radio"
              id="value-1"
              name="value-radio"
              value="value-1"
            />
             <span><FiUsers style={{marginRight:"5px", fontSize:"20px"}}/></span>4
          </label>
          <label>
            <input
              type="radio"
              id="value-2"
              name="value-radio"
              value="value-2"
            />
           <span><GiRadarSweep style={{marginRight:"5px", fontSize:"20px"}}/></span>1611 km
          </label>
          <label>
            <input
              type="radio"
              id="value-3"
              name="value-radio"
              value="value-3"
            />
            <span><FiWind style={{marginRight:"5px", fontSize:"20px"}}/></span> 361 km/h
          </label>
          <span class="selection"></span>
        </div>
      </div>
      <div className="card">
        <img src={avion3} alt="Card 3" className="card-image" />
        <h2 className="card-title">Learjet 60</h2>
        <div class="radio-input">
          <label>
            <input
              type="radio"
              id="value-1"
              name="value-radio"
              value="value-1"
            />
             <span><FiUsers style={{marginRight:"5px", fontSize:"20px"}}/></span>6
          </label>
          <label>
            <input
              type="radio"
              id="value-2"
              name="value-radio"
              value="value-2"
            />
             <span><GiRadarSweep style={{marginRight:"5px", fontSize:"20px"}}/></span> 1611 km
          </label>
          <label>
            <input
              type="radio"
              id="value-3"
              name="value-radio"
              value="value-3"
            />
            <span><FiWind style={{marginRight:"5px", fontSize:"20px"}}/></span> 361 km/h
          </label>
          <span class="selection"></span>
        </div>
      </div>
      <div className="card">
        <img src={avion4} alt="Card 3" className="card-image" />
        <h2 className="card-title">Hawker-800XP</h2>
        <div class="radio-input">
          <label>
            <input
              type="radio"
              id="value-1"
              name="value-radio"
              value="value-1"
            />
             <span><FiUsers style={{marginRight:"5px", fontSize:"20px"}}/></span>6
          </label>
          <label>
            <input
              type="radio"
              id="value-2"
              name="value-radio"
              value="value-2"
            />
            <span><GiRadarSweep style={{marginRight:"5px", fontSize:"20px"}}/></span> 1611 km
          </label>
          <label>
            <input
              type="radio"
              id="value-3"
              name="value-radio"
              value="value-3"
            />
           <span><FiWind style={{marginRight:"5px", fontSize:"20px"}}/></span> 361 km/h
          </label>
          <span class="selection"></span>
        </div>
      </div>
      <div className="card">
        <img src={avion5} alt="Card 3" className="card-image" />
        <h2 className="card-title">Gulfstream V</h2>
        <div class="radio-input">
          <label>
            <input
              type="radio"
              id="value-1"
              name="value-radio"
              value="value-1"
            />
            <span><FiUsers style={{marginRight:"5px", fontSize:"20px"}}/></span>6
          </label>
          <label>
            <input
              type="radio"
              id="value-2"
              name="value-radio"
              value="value-2"
            />
             <span><GiRadarSweep style={{marginRight:"5px", fontSize:"20px"}}/></span> 1611 km
          </label>
          <label>
            <input
              type="radio"
              id="value-3"
              name="value-radio"
              value="value-3"
            />
            <span><FiWind style={{marginRight:"5px", fontSize:"20px"}}/></span> 361 km/h
          </label>
          <span class="selection"></span>
        </div>
      </div>
      <div className="card">
        <img src={avion6} alt="Card 3" className="card-image" />
        <h2 className="card-title">Gulfstream IVSP</h2>
        <div class="radio-input">
          <label>
            <input
              type="radio"
              id="value-1"
              name="value-radio"
              value="value-1"
            />
             <span><FiUsers style={{marginRight:"5px", fontSize:"20px"}}/></span>6
          </label>
          <label>
            <input
              type="radio"
              id="value-2"
              name="value-radio"
              value="value-2"
            />
            <span><GiRadarSweep style={{marginRight:"5px", fontSize:"20px"}}/></span> 1611 km
          </label>
          <label>
            <input
              type="radio"
              id="value-3"
              name="value-radio"
              value="value-3"
            />
           <span><FiWind style={{marginRight:"5px", fontSize:"20px"}}/></span> 361 km/h
          </label>
          <span class="selection"></span>
        </div>
      </div>
      <div className="card">
        <img src={avion7} alt="Card 3" className="card-image" />
        <h2 className="card-title">Cj 525</h2>
        <div class="radio-input">
          <label>
            <input
              type="radio"
              id="value-1"
              name="value-radio"
              value="value-1"
            />
             <span><FiUsers style={{marginRight:"5px", fontSize:"20px"}}/></span>6
          </label>
          <label>
            <input
              type="radio"
              id="value-2"
              name="value-radio"
              value="value-2"
            />
            <span><GiRadarSweep style={{marginRight:"5px", fontSize:"20px"}}/></span> 1611 km
          </label>
          <label>
            <input
              type="radio"
              id="value-3"
              name="value-radio"
              value="value-3"
            />
            <span><FiWind style={{marginRight:"5px", fontSize:"20px"}}/></span> 361 km/h
          </label>
          <span class="selection"></span>
        </div>
      </div>
      <div className="card">
        <img src={avion8} alt="Card 3" className="card-image" />
        <h2 className="card-title">Beechcraft King Air</h2>
        <div class="radio-input">
          <label>
            <input
              type="radio"
              id="value-1"
              name="value-radio"
              value="value-1"
            />
             <span><FiUsers style={{marginRight:"5px", fontSize:"20px"}}/></span>6
          </label>
          <label>
            <input
              type="radio"
              id="value-2"
              name="value-radio"
              value="value-2"
            />
             <span><GiRadarSweep style={{marginRight:"5px", fontSize:"20px"}}/></span> 1611 km
          </label>
          <label>
            <input
              type="radio"
              id="value-3"
              name="value-radio"
              value="value-3"
            />
           <span><FiWind style={{marginRight:"5px", fontSize:"20px"}}/></span> 361 km/h
          </label>
          <span class="selection"></span>
        </div>
      </div>
    </div>
  );
};

export default Cards;
