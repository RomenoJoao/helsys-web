import React from 'react'
import { Header } from '../../components/header/header';
import Layout from '../../components/layout';
import { Button } from '../../components/button';
import { Link, Outlet } from "react-router-dom";
import "./coorden.css";
import { useQuery } from 'react-query';
import endpoints from '../../api/endpoints';
export default function Coordenador() {

 const { data, isLoading, isError, error } = useQuery(["getAllCursos"], () =>
   endpoints.getAllCursos()
 );
 if (isLoading) return <span>Carregando</span>;
 if (isError) return <span>erro{error.message}</span>;
 if (!data) return <span>Categoria Vazia</span>;

 console.log(data)


 
  /*
   const [cursos,setCursos]= useState([])
  const [error, setError] = useState(null);
  const [curso,setCurso] = useState(null)
  const [data,setData]=useState({
    Nome:"", email:"",numeroI:""
  })
   useEffect((e)=>{
    event.preventDefault(e)
    axios.get("http://localhost:1337/api/cursos").then(
      response=>{
          setCursos(response.data.data);
      }
    ).catch(error=>{
      setError(error)
    });
   },[])
    const handleChangeSelect = (e) => {
      setCurso(e.target.value);
    };
     const handleChange = (e) => {
          event.preventDefault(e);
          const { name, value } = e.target;
          setData((prevState) => ({
            ...prevState,
            [name]: value,
          }));
        
          console.log(data);
      };

     const handleSubmit = (e) => {    
      event.preventDefault(e);
      
      console.log(data);

        const postData = {
        data: data
        }

      axios
        .post("http://localhost:1337/api/coordenadors", postData)
        .then((response) => {

          console.log("Dados Enviados Com Sucesso", response.data);
          const idC = response.data.data.id;
          console.log(curso)

              axios
                .put("http://localhost:1337/api/coordenadors/" + idC, {
                  "data": {
                    "category": 8,
                  },
                })
                .then((response) => {
                  console.log("Curso Actualizado", response.data.data);
                });

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
    };*/
  return (
    <Layout>
      <Header title={"Adicionar Coordenador"} />
      <div className="cardP">
        <form className="form" action="">
          <div className="inputContainer">
            <div className="left">
              <input type="text" placeholder="Username" />
              <input
                type="text"
                
                name="Nome"
                value={data.Nome}
                placeholder="Nome"
              />
              <input type="password" placeholder="Senha" />
            </div>
            <div className="rigth">
              <input
                
                type="text"
                name="email"
                value={data.email}
                placeholder="Email"
              />
              <input
                type="text"
                
                name="numeroI"
                value={data.numeroI}
                placeholder="Numero ID"
              />
              <select className="selectCurso"   name="curso" id="">
                <option value="">Selecione um curso</option>
                {data.map((item, index) => (
                  <option key={index} value={item.id} selected={item.id}>
                    {" "}
                    {item.titulo}{" "}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <button id="submit">
            Adicionar
          </button>
        </form>
      </div>
    </Layout>
  );
}
