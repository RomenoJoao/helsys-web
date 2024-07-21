import React from 'react'
import Layout from '../../components/layout'
import { Header } from '../../components/header/header'
import { useForm } from 'react-hook-form'
import { useMutation, useQuery } from 'react-query'
import endpoints from '../../api/endpoints'
import { toast, Toaster } from 'react-hot-toast'

export default function AddSemestre() {

  const {
    register,
    handleSubmit,
    formState:{errors}
  }= useForm();
  const {mutateAsync}= useMutation(
    ({descricao, diff, ano})=>{
      endpoints.createSemestre({
        descricao,
        diff:Number(diff),
        ano:Number(ano)
      })
    }, {
      onSuccess:()=>{toast("Semestre Adicionado", {
        icon: "👏",
        duration: 3000,
      });},
      onError: (error)=>{
        console.log("Erro")
      }
    }
  )
  const onSubmit = async (data) => {
    console.log(data);
    await mutateAsync(data).catch((res) => {
      if (res.response.status === 200) {
      } else if (res.response.status === 500) {
        toast.error("Erro interno do servidor");
      }
    });
  };
  return (
    <Layout>
      <Header title={"Adicionar Novo Semestre"}></Header>
      <div className="card">
        <form className="form" onSubmit={handleSubmit(onSubmit)}>
          <div className="inputContainer">
            <div className="left">
              <input
                type="text"
                name="descricao"
                placeholder="Descricao"
                {...register("descricao")}
              />
              <input
                type="number"
                name="diff"
                placeholder="Etapa"
                {...register("diff")}
              />
              <input type="number" placeholder="ano" {...register("ano")} />
            </div>
          </div>
          <button id="submitCourse">Adicionar</button>
        </form>
      </div>
      <Toaster position="top-center" reverseOrder={false} />
    </Layout>
  );
}
