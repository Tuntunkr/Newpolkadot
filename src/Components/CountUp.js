import React from "react";
import "../Styles/Herosection.css";

import CountUp from 'react-countup';
function CountUps() {
  return (
    <div className="countup">
      <div className="Countup-contet">
        <div className="maincontent">
         
          <h1> <CountUp delay={2} end={110} /> +</h1>
          <p>Hackathon events organized online and offline.</p>
        </div>
        <div className="maincontent">
         
          
          <h1> <CountUp delay={2} end={1120} /> +</h1>
          <p>
            Users participated in our events and hackathons all over the globe
          </p>
        </div>
        <div className="maincontent">
          <h1>
          <CountUp delay={2} end={4} /> M</h1>
          <p>Bugs founded and reported from hackers and earned money</p>
        </div>
      </div>
    </div>
  );
}

export default CountUps;
