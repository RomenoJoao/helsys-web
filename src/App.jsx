import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/layout";
import MenuLateral from "./components/menu/MenuLateral";
import { Analise } from "./pages/analise";
import { Estudantes } from "./pages/estudantes";
import Predicao from "./pages/predicao";
import InserirDocs from "./pages/inserirPDF";
import Home from "./pages/home/Home";
import Login from "./pages/login";
import { PersonalDetails } from "./pages/personal-details";
import useAuth from "./hooks/use-auth";

export default function App() {
  const { user } = useAuth();
  return (
    <BrowserRouter>
      <Routes>
        {!user ? (
          <Route index element={<Login />} />
        ) : (
          <Route path="/" element={<MenuLateral />}>
            <Route index element={<Home />} />
            <Route path="analise" element={<Analise />} />
            <Route path="estudantes" element={<Estudantes />} />
            <Route path="predicao" element={<Predicao />} />
            <Route path="inserir" element={<InserirDocs />} />
            <Route path="*" element={<>Nenhuma pagina encontrada</>} />
          </Route>
        )}
      </Routes>
    </BrowserRouter>
  );
}
