import React from "react";
import ComapnyNameCard from "../Component/ComapnyNameCard";
import "./LeftSection.css";

const LeftSections = () => {
  return (
    <div className="main-left-section">
      <div className="main-left-section-head">
        <div className="client">
          <div className="client-creation-time">
            <div className="Clients">Clients</div>
            <div className="creationTime"></div>
          </div>
          <div className="AddButton"></div>
        </div>
        <div className="searchSection">
          <input
            type="text"
            className="search"
            placeholder="Company, Entity, User, Domain, Service, Location"
          />
          <div className="searchButton"></div>
        </div>
      </div>
      <div className="Selection">
      </div>
      <div className="ComapnyCardDiv">
        <ComapnyNameCard active={true} />
        {Array(8)
          .fill(" ")
          .map(() => (
            <ComapnyNameCard />
          ))}
      </div>
    </div>
  );
};

export default LeftSections;
