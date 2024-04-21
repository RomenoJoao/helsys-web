import { Link, Outlet } from "react-router-dom";
import { BarsSVG, ExitSVG, GroupSVG, HouseSVG, SearchUserSVG } from "../svg";
import "./menu.css";

export default function MenuLateral() {
  return (
    <div className="container">
      <div className="corpoM">
        <div className="title">
          <img src="src/images/logo.png" alt="" />
        </div>
        <ul>
          <li>
            <HouseSVG maxHeight="30px" maxWidth="37px" primaryColor="#FFC423" />
            <Link to="/">
              {" "}
              <a> Home </a>
            </Link>
          </li>
          <li>
            <BarsSVG maxHeight="30px" maxWidth="37px" primaryColor="#FFC423" />
            <Link to="/analise">
              {" "}
              <a> Analise</a>{" "}
            </Link>
          </li>
          <li>
            <SearchUserSVG
              maxHeight="30px"
              maxWidth="37px"
              primaryColor="#FFC423"
            />
            <Link to={"/inserir"}>
              {" "}
              <a> Inserir Notas </a>
            </Link>
          </li>
          <li style={{ marginBottom: "61%" }}>
            <GroupSVG maxHeight="30px" maxWidth="37px" primaryColor="#FFC423" />
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
                <Link to={'/auth/'}>
                  {" "}
                  <ExitSVG maxHeight="30px" maxWidth="37px" />
                </Link>
              </div>
            </div>
          </li>
        </ul>
      </div>
      <Outlet />
    </div>
  );
}
