import React from "react";
import "../../Css/Contact.css";

const Contact: React.FC = () => {
  const background = require("../../asset/Contact/img_contact_banner.webp");
  return (
    <div className="Contact">
      <div
        className="SubImage"
        style={{ backgroundImage: `url(${background})` }}
      >
        <div>
          <strong>Our</strong>
          <span>DOORS ARE ALWAYS OPEN</span>
        </div>
      </div>
      <div className="InfoBack">
        <div>
          <div className="InfoBox">
            <span>HOURS</span>
            <span>09.00-17.00 (PST) MON - FRI</span>
          </div>
          <div className="InfoBox">
            <span>EMAIL</span>
            <span>rimuse0207@naver.com</span>
          </div>
          <div className="InfoBox">
            <span>PHONE</span>
            <span>010-1111-2222</span>
          </div>
        </div>
      </div>
      <div className="Map">
        <div>
          <div className="left">
            FARM FACILITIES
            <p>
              Foodly Inc 10 Brandt Street Steinbach Manitoba, R5G 1Y2 Canada
            </p>
            <span>Check on Map</span>
          </div>
          <div className="right">
            GROCERY STORE
            <p>
              Foodly Inc Suite 109 273 – 3000 High Way Whistler, BC, V0N 2B5
              Canada
            </p>
            <span>Check on Map</span>
          </div>
        </div>
      </div>
      <div className="Chat">
        <h2>LET'S HAVE A CHAT</h2>
        <form>
          <textarea></textarea>
          <input></input>
          <input></input>
          <button>SEND MY MESSAGE</button>
        </form>
      </div>
    </div>
  );
};
export default Contact;
