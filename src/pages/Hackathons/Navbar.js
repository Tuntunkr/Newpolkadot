import React from "react";
import Horizon from "../../assets/horizon.png";
import "./Hackathon.css";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <section className="hackathon-section">
        <div className="conatiner heading-title">
          <img src={Horizon} alt="img" />
          <h2>Horizon 2022</h2>
        </div>
      </section>
      <div className=" ">
        <div className=" tagCard-nav">
          <div className="tabnavbar">
            <Link to="/overview" className="overview-menu active">
            Overview
            </Link>
            <Link to="/prize" className="overview-menu">
            Prizes
            </Link>
            <Link to="/schedule" className="overview-menu">
            Schedule
            </Link>
            <Link to="/project" className="overview-menu">
            Projects
            </Link>
          </div>
        </div>
      </div>
      {/* tab */}
    </>
  );
}

export default Navbar;
