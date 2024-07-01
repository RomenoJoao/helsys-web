import { Link, Outlet } from "react-router-dom";
import useAuth from "../../hooks/use-auth";
import { BarsSVG, ExitSVG, GroupSVG, HouseSVG, SearchUserSVG } from "../svg";
import "./menu.css";

export default function MenuLateral() {
  const { logout } = useAuth();
  return (
    <div className="container">
      <div className="corpoM">
        <div className="title">
          <img src="src/images/logotipo.png" alt="" />
        </div>
        <ul>
          <li>
            <HouseSVG maxHeight="30px" maxWidth="37px" primaryColor="#ffffff" />
            <Link to="/">
              {" "}
              <a> Home </a>
            </Link>
          </li>
          <li>
            <BarsSVG maxHeight="30px" maxWidth="37px" primaryColor="#ffffff" />
            <Link to="/analise">
              {" "}
              <a> Analise Geral</a>{" "}
            </Link>
          </li>
          <li>
            <BarsSVG maxHeight="30px" maxWidth="37px" primaryColor="#ffffff" />
            <Link to="/personal">
              {" "}
              <a> Analise Personalizada</a>{" "}
            </Link>
          </li>
          <li>
            <SearchUserSVG
              maxHeight="30px"
              maxWidth="37px"
              primaryColor="#ffffff"
            />
            <Link to={"/inserir"}>
              {" "}
              <a> Inserir Notas </a>
            </Link>
          </li>
          <li>
            <SearchUserSVG
              maxHeight="30px"
              maxWidth="37px"
              primaryColor="#ffffff"
            />
            <Link to={"/addCoordenador"}>
              {" "}
              <a> Adicionar Coordenador </a>
            </Link>
          </li>
          <li>
            <SearchUserSVG
              maxHeight="30px"
              maxWidth="37px"
              primaryColor="#ffffff"
            />
            <Link to={"/addCurso"}>
              {" "}
              <a> Adicionar Curso </a>
            </Link>
          </li>
          <li style={{ marginBottom: "61%" }}>
            <GroupSVG maxHeight="30px" maxWidth="37px" primaryColor="#ffffff" />
            <Link to="/estudantes">
              {" "}
              <a>Estudantes</a>
            </Link>
          </li>
          <li className="last-item">
            <div className="user-control">
              <p>
                Sra.<span style={{ fontWeight: "700" }}>António Pedro</span>
              </p>

              <div>
                <button
                  style={{ backgroundColor: "#9099a0", border: "none" }}
                  onClick={logout}
                >
                  <ExitSVG maxHeight="30px" maxWidth="37px" />
                </button>
              </div>
            </div>
          </li>
        </ul>
      </div>
      <Outlet />
    </div>
  );
}
