import React from 'react' 
import './styles.css'
import { Button } from '../../components/button';
import { Link } from 'react-router-dom';
export default function Login() {
  return (
    <div className="login-container">
      <div className="login-left"></div>
      <div className="login-left1"></div>

      <div className="login-right">
        {/*
          <div className="logo">
            <img src="src/images/logo.png" alt="" />
          </div>
          */
        }
        <div>
          <h2 style={{ fontWeight: "600" }}>Bem-vindo</h2>
          <span style={{ marginBottom: "22px" }}>
            Faca Login para continuar
          </span>
          <span>Email</span>
          <input type="text" placeholder="Seu email" required />
          <span>Palavra-passe</span>
          <input type="password" placeholder="Sua palavra passe" required />
          <span
            style={{
              marginBottom: "22px",
              fontSize: "13px",
              fontWeight: "400",
              color: "#d8a518",
            }}
          >
            Recuperar credenciais
          </span>
          <Link to={"/"}>
            <Button
              style={{ width: "456px" }}
              label={"Iniciar Sessao"}
            ></Button>
          </Link>

          <div className="icons"></div>
        </div>
      </div>
    </div>
  );
}
