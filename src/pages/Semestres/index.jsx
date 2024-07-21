import React from 'react'
import Layout from '../../components/layout'
import { Header } from '../../components/header/header'
import { Card } from '../../components/card'
import { Link } from 'react-router-dom'
import { useQuery } from 'react-query'
import './styles.css'
import endpoints from '../../api/endpoints'

export default function Semestres() {

  const { data, isLoading,isError, error } = useQuery(["getAllSemestres"], ()=>(endpoints.getAllSemestres()) );
  if (isLoading) return <span>Carregando</span>;
  if (isError) return <span>erro{error.message}</span>;
  if (!data) return <span>Categoria Vazia</span>;
  return (
    <Layout>
      <Header title={"Gestao de Semestres"} />

      <div className="cardS">
        <Link to={"/addSemestre"}>
          <div className="addButton">
            <img className="plus" src="src/images/Group 36plus.png" alt="" />
            <p>Adicionar</p>
          </div>
        </Link>
        {data.map((semestre) => (
          <Link to={"/inserirNotas"}>
            <div className="semestre">
              <img className="vect" src="src/images/Vector 1.png"></img>
              <div className="infoS">
                <h3>Semestre</h3>
                <h4>
                  {" "}
                  <span>{semestre.ano}</span>/<span>{semestre.diff}</span>
                </h4>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </Layout>
  );
}
