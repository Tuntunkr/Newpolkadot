
import Container from "react-bootstrap/Container";

import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import "../Styles/Header.css";
import { Link } from "react-router-dom";

function NavScrollExample() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Link to="/" className="logo">
          Polkaevent
        </Link>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0 mainhead "
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <div className="headerstart">
              <Link to="/" className="home">
                Home
              </Link>
              <Link to="blog" className="home">
                Blog
              </Link>
            </div>

            <div className="headercenter">
              <Link to="bounties" className="menu">
                Bounties
              </Link>
              <Link to="hackathons" className="menu">
                hackathons
              </Link>
              <Link to="polkadotevents" className="menu">
                POlkadot events
              </Link>
            </div>
            <div className="left-header">
              <Link to="contact" className="contact">
                Contact Us
              </Link>
              <Link>

              <button className="primary-btn">Login/Signup</button>
              </Link>
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavScrollExample;
