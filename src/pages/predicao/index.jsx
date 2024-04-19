import React from 'react'
import { Tabela } from '../estudantes/tabela'
import { Header } from '../../components/header/header'
import Layout from '../../components/layout'
import './styles.css'
export default function Predicao() {
  return (
    <Layout>
      <Header title={'Resultados da Analise'} />
      <Tabela lastHeader={"Situacao"} />
    </Layout>
  );
}
