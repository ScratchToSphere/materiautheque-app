import React from "react";
import { NavLink } from "react-router-dom";
import Research from "../components/Research";

const Home = () => {
  return (
    <div>
      <div className="app-container">
        <div className="navbar-container">
          <div className="navbar">
            <ul>
              <li>Prépa Mat</li>
              <li>Prépa Filtres</li>
              <NavLink to="met-materiaux">
                <li>Met Mat</li>
              </NavLink>
              <li>Met Filtres</li>
            </ul>
          </div>
        </div>
        <div className="research-container">
          <Research />
        </div>
        <div className="body-container"></div>
      </div>
    </div>
  );
};

export default Home;
