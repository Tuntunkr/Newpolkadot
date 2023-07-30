import React from "react";
import shareicons from "../assets/shareIcons.svg";
import { bounties } from "../api/BountieData";
import Button from "react-bootstrap/Button";

function Bounties() {
  return (
    <>
      <section className="container-fluid">
        <div className="container">
          <div className="maincard-row">
            {bounties.map((bounties, i) => (
              <div key={i} className="mainCard">
                {/* 1st div */}
                <div className="divA">
                  <div className="hd-box">
                    <h3>Horizon 2022</h3>
                    <h6>Hackathon</h6>
                  </div>
                  <span className="link-box">
                    <img src={shareicons} alt="" />
                  </span>
                </div>
                {/* 2nd div */}
                <div className="divB ">
                  <div className="hd-box">
                    <h6>Horizon 2022</h6>
                    <button className="No-btn">No Restrictions</button>
                  </div>
                  <div className="img-box">
                    <img src="" /> <p>+300 participated</p>
                  </div>
                </div>

                {/* 3rd div */}
                <div className="divC">
                  <div className="box-l">
                    <button size="sm">Online</button>
                    <button size="sm">Open</button>
                    <button size="sm">starts on 1st jan</button>
                  </div>
                  <div className="box-r">
                    <Button variant="primary">Apply now</Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Bounties;
