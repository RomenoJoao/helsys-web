import React from 'react'
import Layout from '../../components/layout'
import { Header } from '../../components/header/header'
import { Button } from '../../components/button'
import './styles.css'
export default function InserirDocs() {
  return (
    <Layout>
      <Header title={"Inserir PDFs"} />
      <div className="insert-card">
        <div className="inputs">
          <h3>Pauta de notas</h3>
          <input type="file" />
          <h3>Pauta de presencas</h3>
          <input type="file" className='file2' />
          <Button label={'Salvar'}></Button>
        </div>
        <div className="imagem">
            <p style={{color:'white'}}>empurra</p>
          <img src="src/images/ficheiro.png" alt="" />
        </div>
      </div>
    </Layout>
  );
}
