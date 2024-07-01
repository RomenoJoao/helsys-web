import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/layout";
import MenuLateral from "./components/menu/MenuLateral";
import { Analise } from "./pages/analise";
import { Estudantes } from "./pages/estudantes";
import Predicao from "./pages/predicao";
import InserirDocs from "./pages/inserirPDF";
import Home from "./pages/home/Home";
import Login from "./pages/login";
import Coordenador from "./pages/Coordenador";
import Curso from "./pages/Curso";
import Personal from "./pages/AnaliseUnica"
import { PersonalDetails } from "./pages/personal-details";
import useAuth from "./hooks/use-auth";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
const client = new ApolloClient({
  uri: "https://api-us-east-1-shared-usea1-02.hygraph.com/v2/clu9y3rbx042907w7jphaef00/master",
  cache: new InMemoryCache(),
  headers: {
    Authorization:
      "Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6ImdjbXMtbWFpbi1wcm9kdWN0aW9uIn0.eyJ2ZXJzaW9uIjozLCJpYXQiOjE3MTE1NjA5MTgsImF1ZCI6WyJodHRwczovL2FwaS11cy1lYXN0LTEtc2hhcmVkLXVzZWExLTAyLmh5Z3JhcGguY29tL3YyL2NsdTl5M3JieDA0MjkwN3c3anBoYWVmMDAvbWFzdGVyIiwibWFuYWdlbWVudC1uZXh0LmdyYXBoY21zLmNvbSJdLCJpc3MiOiJodHRwczovL21hbmFnZW1lbnQtdXMtZWFzdC0xLXNoYXJlZC11c2VhMS0wMi5oeWdyYXBoLmNvbS8iLCJzdWIiOiJkMGJmNTFiZC05NzlhLTRiNWYtOTM3ZS1kMWEyMWZlZjU5NmIiLCJqdGkiOiJjbHVhMzZnbjkwMnBrMDdsbWZ5MDdkMzVjIn0.TP47rZUEew74eEuMFTRN9Y1LNpBQ0VAn_7CtAs1GvaCN8GsL2n55ni77PlHX00GhJX8fF5Sh-m5lZl5ZnfHKiSoSBO8UEouKxo1MZjYcyjF6pq996t3cwv68joyCq_Uwr__qgHwvHNzieuFUJ7sQX2e4W9tPiNQnI9FEOKYdMy5AI_OlMSPakHqpizyisqlBjf_E7qCmBfO4xF6mTPLQBU2LCEGfJKC4XRiJFNSQyN7kVwoBMhqbe3Xrst-HhqxAS-84JaWJAZ-7PCe1d6KMmcn5ol63BXZhQPUPSKglZPn3uZqChAU2RAVmB_wb6nrFiLMyy-c3O1sOioDNTogb4HyZK2gt5Z2WqxNR9T2kv_ZZStKIdy15TcgSGlQqEPC0oCdClitctfRanYMT_5zJZGp9c26CgRB30MZDUXLncWJMJ2RYGL1_f3omOZaKQ3vVelbtTZ5Re4EQqVuVbSrDgzifyVbLAxc2ZNUbj0aKA28stp3RRLMhOT1YlqoFrYjopLWml3zE6HvCAIa2o6hkApSUJXnAITYQUGVTvhVqyALOKJ4CZ_v581GBW18eS9DdEorI8-vTJR27T_fL6ei0KQx9MvV2ioXemrLAWhK3HHghBG1SkIRuQNRXTId8pG1cWZ_ubtmCVdvIzd9lLM52TtIWqfEeANk_Khcl3AWSuvI",
  },
});

export default function App() {
  const { user } = useAuth();
  return (
    <ApolloProvider client={client}>
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
              <Route path="addCoordenador" element={<Coordenador />} />
              <Route path="addCurso" element={<Curso />} />
              <Route path="personal" element={<Personal />} />
              <Route path="*" element={<>Nenhuma pagina encontrada</>} />
            </Route>
          )}
        </Routes>
      </BrowserRouter>
    </ApolloProvider>
  );
}
