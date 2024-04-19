import React from "react"; 
import "./styles.css";

const DATA = [
  {
    nome: "Antonio ",
    matricula: "03953224",
    curso: "Engenharia Informatica",
    ano: "3",
  },
  {
    nome: "Elber",
    matricula: "03953224",
    curso: "Engenharia Informatica",
    ano: "3",
  },
  {
    nome: "Luis",
    matricula: "03953224",
    curso: "Engenharia Informatica",
    ano: "3",
  },
  {
    nome: "Andre",
    matricula: "03953224",
    curso: "Engenharia Informatica",
    ano: "3",
  },
  {
    nome: "Gomes",
    matricula: "03953224",
    curso: "Engenharia Informatica",
    ano: "3",
  },
  {
    nome: "Cleide",
    matricula: "03953224",
    curso: "Engenharia Informatica",
    ano: "3",
  },
  {
    nome: "Ana",
    matricula: "03953224",
    curso: "Engenharia Informatica",
    ano: "3",
  },
  {
    nome: "Loyde",
    matricula: "03953224",
    curso: "Engenharia Informatica",
    ano: "3",
  },
  {
    nome: "Filomena",
    matricula: "03953224",
    curso: "Engenharia Informatica",
    ano: "3",
  },
  {
    nome: "Felizarda",
    matricula: "03953224",
    curso: "Engenharia Informatica",
    ano: "3",
  },
];

export const Tabela = (props) => {
  return (
    <div className="table-container">
      <table className="table-alunos">
        <tr style={{ color: "black",fontWeight:'200' }}>
          <th>Nome</th>
          <th>Matricula</th>
          <th>Curso</th>
          <th >{props.lastHeader}</th>
        </tr>
        {DATA.map((item, index) => (
          <tr style={{ color: "black" }} key={index}>
            <td style={{ color: "black" }}>{item.nome}</td>
            <td style={{ color: "black" }}>{item.matricula}</td>
            <td style={{ color: "black" }}>{item.curso}</td>
            <td style={{ color: "black" }}>{item.ano}</td>
          </tr>
        ))}
      </table>
    </div>
  );
};
