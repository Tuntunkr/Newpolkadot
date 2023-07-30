import React from "react";

import heroimg from "../assets/heroimg.png";
import heroimg1 from "../assets/herosecimage.png";
import "../Styles/Herosection.css";
import CountUp from "./CountUp";
import TagCard from "./TagCard";
import ExploreBy from "../pages/ExploreBy";
import ExplorePopular from "../pages/ExplorePopular";

function HeroSec() {
  return (
    <section className="hero-section first-div-padding">
      <div className="container">
        <div className="row first-div-padding">
          <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-xs-12">
            <div className="heroleftside">
              <img src={heroimg} alt="heroimg" />
            </div>
            <div className="hero-heading">
              <h3>Find your next tech conference in the polkadot ecosystem</h3>
            </div>
            <p className="heropara">
              A curated list of high school hackathons with 574 events in 26
              states + 24 <br /> countries, Bug bounties and polkadot events
              find all the exciting events on our <br /> website and win amazing
              prizes.
            </p>
          </div>
          <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-xs-12">
            <div className="hero-img">
              <img
                src={heroimg1}
                alt=""
                className="width-of-first-img mid-dev-size"
              />
            </div>
          </div>
        </div>
      </div>
      <CountUp />
      <TagCard />
      <ExploreBy/>
      <ExplorePopular />
    </section>
  );
}

export default HeroSec;
