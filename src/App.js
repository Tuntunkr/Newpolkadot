import React from "react";
import './App.css';
// import "./Gelements.css"
import Header from "./Components/Header";
import 'bootstrap/dist/css/bootstrap.min.css';
import HeroSec from "./Components/HeroSec";
import CountUp from "./Components/CountUp";
import TagCard from "./Components/TagCard";
import { Routes, Route } from "react-router-dom";
import Blog from "./pages/Blog";
import Home from "./pages/Home";
import Bounties from "./pages/Bounties";
import Hackathons from "./pages/Hackathons";
import PolkadotEvent from "./pages/PolkadotEvent";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Footer from "./Components/Footer";
import Overview from "./pages/Hackathons/Overview";



function App() {
  return (
    <div>
      <Header />
      {/* <HeroSec /> */}
      {/* <CountUp />
      <TagCard /> */}

      <Routes>
				<Route path="/" element={<HeroSec/>} />
				<Route path= "/blog" element={<Blog />} />
				<Route path= "/bounties" element={<Bounties/>} />
				<Route path="/hackathons" element={<Hackathons/>} />
				<Route path="/polkadotevents" element={<PolkadotEvent/>} />
				<Route path="/contact" element={<Contact/>} />
				<Route path="/login" element={<Login/>} />
				<Route path="/signup" element={<SignUp/>} /> 
        {/* tab */}
        <Route path="/overview" element={Overview} />
				
			</Routes>
      <Footer />
    </div>
  );
}

export default App;
