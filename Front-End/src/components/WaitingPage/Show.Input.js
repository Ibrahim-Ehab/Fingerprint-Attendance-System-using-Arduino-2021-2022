
import "../css/Waiting_card.css";

import '../css/coponent-input.css';
import '../css/addation.css';

import WavePng from '../img/wave.png';
import Waiting_illustration from '../img/UserData.png';
import { useNavigate } from "react-router-dom";

function Show_id({ id }) {
    const Navigate = useNavigate();
  return (
    <div className="Show_id">
      <img className="wave" src={WavePng} />

      <div className="Register-form">
        <form className="Form-Data" onSubmit={() => Navigate("/")}>
          {/* flex direction col */}
          <div className="main-div">
            {/* flex direct row */}
            <div className="img-container">
              <div className="img">
                <img src={Waiting_illustration} />
              </div>
            </div>
            <div className="employee-part py-2">
              <div className="Form_Container">
                <div className="label_conatiner">
                  <h2>ID</h2>
                  <p>Take your ID and Register with it in the FingerPrint Device</p>
                </div>
                <div className="Input_container">
                      <div >
                        <div className="group">
                          <input
                            placeholder=" "
                            type="text"
                            required="required"
                            value={id}
                          />
                          <span className="highlight"></span>
                          <span className="bar"></span>
                          <label>ID</label>
                        </div>
                      </div>
                
                </div>
                
              </div>
              <div className="Form-Submit">
                <button type="submit" className="Form-btn">
                  Go To Home
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Show_id;
