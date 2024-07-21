import React from 'react'
import Layout from '../../components/layout'
import "./curso.css" 
import { Link, Outlet } from "react-router-dom";
import { Header } from '../../components/header/header'
import axios from 'axios';
import { useState } from 'react';
import toast from "react-hot-toast";
export default function Curso() {

  const notify =()=>{
    toast("Curso Adicionado com Sucesso", {
      icon: "👏",
      duration: 3000,
    });
  }

  const [named,setNome]=useState({
  
  })

  const [error, setError] = useState(null);

   const handleChange = (e) => {
    event.preventDefault(e)
    const { name, value } = e.target;
    setNome(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit=(e) =>{
    event.preventDefault(e);
     const postData = {
       data:  named,
     };
     console.log(postData)

     // Requisição POST para enviar dados para a API do Strapi
    axios
      .post("http://localhost:1337/api/cursos", 
        postData
      )
      .then((response) => {
        notify();
        console.log("Dados enviados com sucesso:", response.data);
        
        // Atualiza os dados após o envio bem-sucedido
      })
      .catch((error) => {
        setError(error);
        console.error("Erro ao enviar dados:", error);
        if (error.response) {
          // O servidor respondeu com um código de status fora do intervalo 2xx
          console.error("Erro ao enviar dados:", error.response.data);
          setError(
            new Error(
              `Erro ${error.response.status}: ${
                error.response.data.message || error.response.statusText
              }`
            )
          );
        } else if (error.request) {
          // A requisição foi feita, mas nenhuma resposta foi recebida
          console.error(
            "Erro ao enviar dados: Nenhuma resposta recebida",
            error.request
          );
          setError(new Error("Erro: Nenhuma resposta recebida do servidor"));
        } else {
          // Alguma coisa aconteceu ao configurar a requisição que acionou um erro
          console.error("Erro ao enviar dados:", error.message);
          setError(error);
        }
      });
  }
   
  return (
    <Layout>
      <Header title={"Adicionar Curso"} />
      <div className="cardCourse">
        <form className="form" action="">
          <div className="inputContainer">
            <div className="left">
              <input
                type="text"
                name="nome"
                onChange={handleChange}
                placeholder="Nome"
              />
              <input type="text" placeholder="Coordenador" />
            </div>
          </div>
          <button id="submitCourse" onClick={handleSubmit}>
            Adicionar
          </button>
        </form>
      </div>
    </Layout>
  );
}
