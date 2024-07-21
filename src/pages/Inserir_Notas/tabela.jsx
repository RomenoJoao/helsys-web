import "./styles.css";
import { useQuery } from "@apollo/client";
import { GETALUNOS } from "../../graphql/alunos";

export const Tabela = (props) => {
  const { data, loading, error } = useQuery(GETALUNOS);
  if (loading) return <p>loading</p>;
  if (error) return <p>Ocorreu um erro</p>;


  
  const alunos = data.alunos;
  console.log(alunos);
  return (
    <div className="table-container">
      <table className="table-alunos">
        <tr style={{ color: "black", fontWeight: "200" }}>
          <th>Nome</th>
          <th>Matricula</th>
          <th>Curso</th>
          {/* eslint-disable-next-line react/prop-types */}
          <th>{props.lastHeader}</th>
        </tr>
        {alunos.map((item, index) => (
          
          <tr style={{ color: "black" }} key={index}>
            <td style={{ color: "black" }}>{item.name}</td>
            <td style={{ color: "black" }}>{item.matricula}</td>
            <td style={{ color: "black" }}>{item.curso && item.curso.nome}</td>
            <td style={{ color: "black" }}>{item.anoAcademico}</td>
          </tr>
            
        ))}
      </table>
    </div>
  );
};
