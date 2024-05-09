import { Header } from "../../components/header/header";
import Layout from "../../components/layout";
import { Tabela } from "./tabela";
export const Estudantes = () => {
  return (
    <Layout>
      <Header title={"Estudantes"} />
      <Tabela lastHeader={"Frequencia"}></Tabela>
    </Layout>
  );
};
