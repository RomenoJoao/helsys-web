import React from 'react'
import Layout from '../../components/layout'
import { Header } from '../../components/header/header';
import "./unica.css"
export default function Personal() {
  return (
    <Layout>
      <Header title={"Analise Personalizada"} />
      <div className="card">
        <form action="">
          <div className="inputs">
            <div className="lineOne">
              <input type="text" placeholder="Nome" className="inputT" />
              <input type="number" placeholder="Idade" className="inputT" />
              <select name="gender" id="gender" className="selects">
                <option value="">Genero</option>
                <option value="1">Masculino</option>
                <option value="0">Feminino</option>
              </select>
              <select name="year" id="year" className="selects">
                <option value="">Ano Curricular</option>
                <option value="1">1º Ano</option>
                <option value="2">2º Ano</option>
                <option value="3">3º Ano</option>
                <option value="4">4º Ano</option>
                <option value="5">5º Ano</option>
              </select>
            </div>
            <div className="lineTwo">
              <select name="course" id="course" className="selects">
                <option value="">Curso</option>
                <option value="1">Engenharia Informática</option>
                <option value="2">Gestão Empresarial</option>
                <option value="3">Contabilidade</option>
              </select>
              <select name="satisfacao" id="satisfacao" className="selects">
                <option value="">Satisfação com o Curso</option>
                <option value="1">Sim</option>
                <option value="0">Não</option>
              </select>
              <input type="numbem" placeholder="Media" className="inputT" />
              <select name="frequency" id="frequency" className="selects">
                <option value="">Frequencia</option>
                <option value="1">A cima de 6</option>
                <option value="0">A baixo de 6</option>
              </select>
            </div>
            <div className="lineThree">
              <select name="repetente" id="repetente" className="selects">
                <option value="">Repetiu Cadeiras</option>
                <option value="1">Sim</option>
                <option value="0">Não</option>
              </select>
              <select name="Stress" id="Stress" className="selects">
                <option value="">Stress nas provas</option>
                <option value="1">Bom</option>
                <option value="0">Mal</option>
              </select>
              <select name="pressao" id="pressao" className="selects">
                <option value="">Pressão nas provas</option>
                <option value="1">Sim</option>
                <option value="0">Não</option>
              </select>
              <select name="motionHelp" id="motionHelp" className="selects">
                <option value="">Apoio Emocional</option>
                <option value="1">Sim</option>
                <option value="0">Não</option>
              </select>
            </div>
            <div className="lineFour">
              <select name="financeHelp" id="financeHelp" className="selects">
                <option value="">Apoio Financeiro</option>
                <option value="1">Sim</option>
                <option value="0">Não</option>
              </select>
              <select name="financeDif" id="financeDif" className="selects">
                <option value="">Dificuldades Financeiras</option>
                <option value="1">Sim</option>
                <option value="0">Não</option>
              </select>
              <select name="emprego" id="emprego" className="selects">
                <option value="">Emprego</option>
                <option value="1">Sim</option>
                <option value="0">Não</option>
              </select>
              <select name="homeDistance" id="homeDistance" className="selects">
                <option value="">Distancia de Morada</option>
                <option value="1">Sim</option>
                <option value="0">Não</option>
              </select>
            </div>
          </div>
          <button id="submitData" type="submit">
            Enviar
          </button>
        </form>
      </div>
      <div className="card">
        <div>
          <h2 id="resultado">Resultado</h2>
        </div>
        <div className="resName">
          <h2 className="nResult">
            Celso Rodrigues:  <span className="situation">Desistente</span>{" "}
          </h2>
        </div>
      </div>
    </Layout>
  );
}
