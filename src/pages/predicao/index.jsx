import React from 'react'
import { Tabela } from '../estudantes/tabela'
import { Header } from '../../components/header/header'
import Layout from '../../components/layout'
import './styles.css'
import axios from 'axios'
import { useState, useEffect } from 'react'
export default function Predicao() {
  const [data,setData]= useState([])
  const [error,setError] =useState(null)
  useEffect(()=>{
    //Requisicao GET
    axios.get("http://localhost:1337/api/estudantes").then(
      response => {
        setData(response.data.data)}
    ).catch(error =>{
        setError(error)
    });
  },[]);
  console.log(data)
   return (
     <Layout>
       <Header title={"Resultados da Analise"} />
       {/*<Tabela lastHeader={"Situacao"} />*/}
       <div className="card">
         {
           <table className="table-alunos">
             <tr style={{ color: "black", fontWeight: "200" }}>
               <th>Nome</th>
               <th>Matricula</th>
               <th>Curso</th>
               {/* eslint-disable-next-line react/prop-types */}
               <th>Teste</th>
             </tr>
             {data.map((item, index) => (
               <tr style={{ color: "black" }} key={index}>
                 <td style={{ color: "black" }}>{item.attributes.Nome}</td>
                 <td style={{ color: "black" }}>{item.attributes.email}</td>
                 <td style={{ color: "black" }}>{item.attributes.matricula}</td>
                 <td style={{ color: "black" }}>
                   {item.attributes.anoAcademico}
                 </td>
               </tr>
             ))}
           </table>
         }
       </div>
     </Layout>
   );
}
