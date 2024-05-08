import React from "react"; 
import "./styles.css";
import { useQuery } from "@apollo/client";
import { GETALUNOS } from "../../graphql/alunos";


const DATA = [
  {
    nome: "Antonio ",
    matricula: "03953224",
    curso: "Engenharia Informatica",
    ano: "Nao abandona",
  },
  {
    nome: "Elber",
    matricula: "03953224",
    curso: "Engenharia Informatica",
    ano: "Abandona",
  },
  {
    nome: "Luis",
    matricula: "03953224",
    curso: "Engenharia Informatica",
    ano: "Nao abandona",
  },
  {
    nome: "Andre",
    matricula: "03953224",
    curso: "Engenharia Informatica",
    ano: "abandona",
  },
  {
    nome: "Gomes",
    matricula: "03953224",
    curso: "Engenharia Informatica",
    ano: "Abandona",
  },
  {
    nome: "Cleide",
    matricula: "03953224",
    curso: "Engenharia Informatica",
    ano: "Abandona",
  },
  {
    nome: "Ana",
    matricula: "03953224",
    curso: "Engenharia Informatica",
    ano: "Nao abandona",
  },
  {
    nome: "Loyde",
    matricula: "03953224",
    curso: "Engenharia Informatica",
    ano: "Nao abandona",
  },
  {
    nome: "Filomena",
    matricula: "03953224",
    curso: "Engenharia Informatica",
    ano: "Abandona",
  },
  {
    nome: "Felizarda",
    matricula: "03953224",
    curso: "Engenharia Informatica",
    ano: "Abandona",
  },
];

export const Tabela = (props) => {
  /* const [data, loading, error] = useQuery(GETALUNOS);

  const alunos = data.alunos;
  console.log(alunos)
  if (loading) return <p>loading</p>;
  if (error) return <p>Ocorreu um erro</p>;*/
  return (
    <div className="table-container">
      <table className="table-alunos">
        <tr style={{ color: "black", fontWeight: "200" }}>
          <th>Nome</th>
          <th>Matricula</th>
          <th>Curso</th>
          <th>{props.lastHeader}</th>
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
