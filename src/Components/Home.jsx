import React from "react";
import vdo from "../Components/vdo.mp4";
import "./Home.css";
export default function Home() {
  return (
    <div id="Home">
      <div id="VideoCard">
        <video autoPlay muted src={vdo}></video>
      </div>

      <div id="Content">
        <h2>Welcome To This Website</h2>
        <p>The Sale Is On Until 5 Of December</p>
        <p>Get The Best Out Of It</p>
        <span>
         
          <button>See More</button>
          <button>Get Now</button>
        </span>
      </div>
    </div>
  );
}
