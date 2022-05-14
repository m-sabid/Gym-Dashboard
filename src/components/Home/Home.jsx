import React from "react";
import Feedback from "../Feedback/Feedback";
import FooterSec from "../Footer/FooterSec";
import Overview from "../Overview/Overview";
import "./Home.css";

const Home = () => {
  return (
    <>
      <div className="home">
        <Overview />
        <Feedback />
      </div>
    </>
  );
};

export default Home;
