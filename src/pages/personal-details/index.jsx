import React from "react";
import { useState } from "react";
import { Button } from "../../components/button";
import Layout from "../../components/layout";
import { ProfileSVG } from "../../components/svg";
import "./styles.css";

export const PersonalDetails = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <Layout>
      <div className="personal-details">
        <div className="personal-details__photo">
          <ProfileSVG maxWidth="110px" maxHeight="110px" />
          <p>Mudar imagem</p>
        </div>
        <div className="personal-details__infos">
          <div>
            <p>Personal details</p>
            <div>
              <span>Nome</span>
              <span>Elber Pedro</span>
            </div>
            <div>
              <span>Contact no :</span>
              <span>98XXXXXXX9</span>
            </div>
            <div>
              <span>Email :</span>
              <span>xyz@gmal.com</span>
            </div>
            <div>
              <span>Nº Matricula :</span>
              <span>20192902</span>
            </div>
          </div>
          <div className="final-button">
            <Button
              label="Analise agora"
              onClick={() => setToggle(true)}
              variant="primary"
            />
          </div>
        </div>
        {toggle && (
          <div className="personal-details__infos">
            <p>Resultados da análise:</p>
            <p>
              Lörem ipsum sara dialören därför att bokstav teran är neostik
              laskapet autonöpuktig kroliga. Vapossade självka rantän
              pompekunskap carpa. Lörem ipsum sara dialören därför att bokstav
              teran är neostik laskapet autonöpuktig kroliga. Vapossade självka
              rantän pompekunskap carpa. Lörem ipsum sara dialören därför att
              bokstav teran är neostik laskapet autonöpuktig kroliga. Vapossade
              självka rantän pompekunskap carpa.{" "}
            </p>
          </div>
        )}
      </div>
    </Layout>
  );
};
