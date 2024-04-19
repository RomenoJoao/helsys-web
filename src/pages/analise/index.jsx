import React from "react";
import Layout from "../../components/layout";
import { Header } from "../../components/header/header";
import { Link, Outlet } from "react-router-dom";
import './analise.css'
import { Button } from "../../components/button";
export const Analise = () => {
  return (
    <Layout>
      <Header title={'Analise Preditiva'} />
      <>
        <div className="analise-card">
          <div className="analise-card-i">
            <img src="src/images/engrenagem.png" alt="" />
          </div>
          <Link to={'/predicao'}>
            <Button label="Realizar analise" variant="primary"></Button>
          </Link>
        </div>
      </>
    </Layout>
  );
};
