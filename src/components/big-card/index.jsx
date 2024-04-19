import React from "react";
import { Link, Outlet } from "react-router-dom";
import { Button } from "../button";
import { ReadingManSVG } from "../svg";
import "./styles.css";

export const BigCard = () => {
  return (
    <div className="big-card">
      <div className="big-card_left">
        <img src="src/images/menino.png" alt="" />
      </div>
      <div className="big-card_middle">
        <h3>
          Alguém precisa <br /> de nós
        </h3>
      </div>
      <div className="big-card__right">
        <p className="big-card__right__p">
          Vamos <span> ajudar </span>
        </p>
        <Link to={"/analise"}>
          <Button label="Analise agora" variant="primary" />
        </Link>
      </div>
      <Outlet />
    </div>
  );
};
