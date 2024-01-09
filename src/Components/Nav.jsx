import React from "react";
import "./Nav.css";
import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <nav className="Nav">
      <h2>Logo</h2>

      <ul>
        <li style={{"--i":"0.5"}}>
          <Link className="Link" to="">Home</Link>
        </li>
        <li style={{"--i":"0.7s"}}>
          <Link className="Link" to="/Service">Service</Link>
        </li>
        <li style={{"--i":"0.9s"}}>
          <Link className="Link" to="/About">About</Link>
        </li>
        <li style={{"--i":"1.1s"}}>
          <Link className="Link" to="/Contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
}
