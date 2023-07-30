import React from "react";
import horizon2 from "../../assets/horizon2.png";
import "../../pages/Hackathons/Overview.css";

function Overview() {
  return (
    <>
      <section className="container-fluid ">
        <div className="container">
          <div className="overviews-section">
            <img src={horizon2} alt="img" />
            <div className="Right-side-card">
              <p>Runs From</p>
              <h2>Dec 2 - 29,2022</h2>
              <p>Happening</p>
              <h2>Online</h2>
              <span className="second-card">
                <h2>Applications close in </h2>
                <h3>0d:9h:4m</h3>
                <button>Apply Now</button>
              </span>
            </div>
          </div>
            <div className="horizon-content secGap">
              <p>
                Horizon is a hackathon where developers will come together in
                teams <br/> of 1-4 members to work on software projects. ACM-JUIT has
                always been <br/> one of the pioneers when it comes to promoting
                technical creativity.
              </p>
              <p>
              This is a online only hackathon.
              </p>
              <p>contact us at info@polkadotevents.in for any queries.</p>
              <span>Rules</span>
              <p>Follow the Code of Conduct.</p>
            </div>
        </div>
      </section>
    </>
  );
}

export default Overview;
