import React from "react";
import { GroupSVG } from "../svg";
import "./styles.css";

export const Card = ({
  headerLeft,
  headerRight,
  bodyContent,
  bodyDescription,
}) => {
  return (
    <div className="card">
      <div className="card__header">
        <div>{headerLeft}</div>
        {headerRight}
      </div>
      <div className="card__body">
        <div>{bodyContent}</div>
        <div>{bodyDescription}</div>
      </div>
    </div>
  );
};
