import React from "react";
import "../Styles/Footer.css";
import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";

import twitter from "../assets/ei_sc-twitter.svg"
import tiktok from "../assets/cib_tiktok.svg"
import telegram from "../assets/ei_sc-telegram.svg"
import facebook from "../assets/ci_facebook.svg"
import discord from "../assets/bxl_discord-alt.svg"
import yoytube from "../assets/youtube.svg"


function Footer() {
  return (
    <>
      <footer className="footer-section">
        <div className="container">
          <div className="footer-content pt-5 pb-5">
            <div className="row">
              <div className="col-xl-4 col-lg-4 mb-50">
                <div className="footer-widget">
                  <div className="footer-logo">
                    <h2>PolkadotEvent</h2>
                  </div>
                  <div className="footer-social-icon">
                    
                   <Link to="/" >
                    <img src={twitter} alt="twitter" />
                   </Link>
                   <Link to="/" >
                    <img src={tiktok} alt="twitter" />
                   </Link>
                   <Link to="/" >
                    <img src={telegram} alt="twitter" />
                   </Link>
                   <Link to="/" >
                    <img src={facebook} alt="twitter" />
                   </Link>
                   <Link to="/" >
                    <img src={discord} alt="twitter" />
                   </Link>
                   <Link to="/" >
                    <img src={yoytube} alt="twitter" />
                   </Link>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-lg-4 col-md-6 mb-20">
                <div classNameName="headerstart">
                  <Nav.Link href="/" classNameName="home">
                    Authors
                  </Nav.Link>
                  <Nav.Link href="blog" classNameName="home">
                    Collection
                  </Nav.Link>
                  <Nav.Link href="blog" classNameName="home">
                    Author Portfolio
                  </Nav.Link>
                  <Nav.Link href="blog" classNameName="home">
                    Create item
                  </Nav.Link>
                  <Nav.Link href="blog" classNameName="home">
                    Blog
                  </Nav.Link>
                </div>
                
              </div>
              <div className="col-xl-4 col-lg-4 col-md-6 mb-50">
                <div className="footer-widget">
                  <div className="footer-widget-heading">
                    <h3>Join Newsletter</h3>
                  </div>
                  <div className="footer-text mb-25">
                    <p>
                    Subscribe our newsletter to get more free design course and resource
                    </p>
                  </div>
                  <div className="subscribe-form">
                    <form action="#">
                      <input type="text" placeholder="Enter your email" />
                      <button>
                       {/* <img src={arrow} alt="arrow" /> */}
                       <span>></span>
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="copyright-area">
          <div className="container">
            <div className="row">
              <div >
                <div className="copyright-text">
                  <p>
                     &copy; 2022 NFT. All Rights Reserved. With love by polkadotevents
                  </p>
                </div>
              </div>
              
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
