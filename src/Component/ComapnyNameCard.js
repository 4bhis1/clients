import React from "react";
import "./CompanyNameCard.css";

const ComapnyNameCard = ({ active = false }) => {
  return (
    <div
      className={active ? "company-card company-card-active" : "company-card"}
    >
      <div
        className={
          active
            ? "copanyNameSection copanyNameSection-active"
            : "copanyNameSection"
        }
      >
        <div
          className={active ? "companyName companyName-active" : "companyName"}
        >
          Company Name
        </div>
        <div>CCDE</div>
      </div>
      <div className="userSection">
        <div>8 Entities</div>
        <div>64 Users</div>
      </div>
    </div>
  );
};

export default ComapnyNameCard;
