import { Header } from "../../components/header/header";
import Layout from "../../components/layout";
import { Tabela } from "./tabela";
export const InserirNotas = () => {
  return (
    <Layout>
      <Header title={"Notas e Frequencias"} />
      <Tabela lastHeader={"Frequencia"}></Tabela>
    </Layout>
  );
};
