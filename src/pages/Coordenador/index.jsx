import React from 'react'
import { Header } from '../../components/header/header';
import Layout from '../../components/layout';
import { Button } from '../../components/button';
import { Link, Outlet } from "react-router-dom";
import "./coorden.css";

export default function Coordenador() {
  return (
    <Layout>
      <Header title={"Adicionar Coordenador"} />
      <div className="cardP">
        <form className="form" action="">
          <div className='inputContainer'>
            <div className="left">
              <input type="text" placeholder='Username' />
              <input type="text" placeholder='Email' />
              <input type="password" placeholder='Senha' />
            </div>
            <div className="rigth">
              <input type="text" placeholder='Nome'/>
              <input type="text" placeholder='Numero ID'/>
              <input type="text" placeholder='Curso'/>
            </div>
          </div>
          <button id='submit'>Adicionar</button>
        </form>
      </div>
    </Layout>
  );
}
