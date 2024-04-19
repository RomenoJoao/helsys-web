import React from "react";
import { Link, Outlet } from "react-router-dom";

import { BigCard } from "../../components/big-card/index.jsx";
import { Button } from "../../components/button/index.jsx";
import { Card } from "../../components/card/index.jsx";
import { Header } from "../../components/header/header.jsx";
import Layout from "../../components/layout/index.jsx";
import { BarsSVG, GroupSVG } from "../../components/svg/index.js";
import "./home.css";

export default function Home() {
  return (
    <Layout>
      <Header title={'Tela Inicial'} />
      <div className="cards-container">
        <Card
          headerLeft={
            <GroupSVG maxWidth="80px" maxHeight="80px" primaryColor="#FFD155" />
          }
          headerRight={
            <Link to={"/estudantes"}>
              <Button label="Visualizar" onClick={() => {}} />
            </Link>
          }
          bodyContent={
            <div>
              <p
                style={{
                  fontSize: "3rem",
                  color: "#FFD155",
                  fontWeight: "900",
                  lineHeight: "0.6",
                  marginTop: "0",
                  marginBottom: "0",
                }}
              >
                {" "}
                12.385{" "}
              </p>
              <p
                style={{
                  fontSize: "2rem",
                  color: "#000",
                  fontWeight: "800",
                  marginTop: "0",
                  marginBottom: "0",
                }}
              >
                {" "}
                Estudantes{" "}
              </p>
            </div>
          }
          bodyDescription={<>ESTUDANTES</>}
        />
        <Card
          headerLeft={
            <BarsSVG maxWidth="80px" maxHeight="80px" primaryColor="#FFD155" />
          }
          headerRight={
            <div
              style={{ display: "flex", flexDirection: "column", gap: "1rem" }}
            >
              <Button label="238 em risco" variant="secondary" />
              <Button label="102 solucionados" variant="terciary" />
            </div>
          }
          bodyContent={
            <>
              <p
                style={{
                  fontSize: "3rem",
                  color: "#FFD155",
                  fontWeight: "800",
                  lineHeight: "0.6",
                }}
              >
                2.385
              </p>
              <p
                style={{
                  fontSize: "2rem",
                  color: "#000",
                  fontWeight: "800",
                  marginTop: "0",
                  marginBottom: "0",
                }}
              >
                Analisados
              </p>
            </>
          }
          bodyDescription={<>ANALISADOS</>}
        />
      </div>
      <BigCard />
    </Layout>
  );
}
