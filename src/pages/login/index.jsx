import React, { useState } from "react";
import "./styles.css";

import { Button } from "../../components/button";
import { Link } from "react-router-dom";
import useAuth from "../../hooks/use-auth";

export default function Login() {
  const { login, loading } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    if (name === "email") setEmail(value);
    if (name === "password") setPassword(value);
  };

  return (
    <div className="login-container">
      <div className="login-left"></div>
      <div className="login-left1"></div>

      <div className="login-right">
        {/*
          <div className="logo">
            <img src="src/images/logo.png" alt="" />
          </div>
          */}
        <div>
          <h2 style={{ fontWeight: "600" }}>Bem-vindo</h2>
          <span style={{ marginBottom: "22px" }}>
            Faca Login para continuar
          </span>
          <span>Email</span>
          <input
            type="text"
            placeholder="Seu email"
            onChange={handleInputChange}
            value={email}
            name="email"
            required
          />
          <span>Palavra-passe</span>
          <input
            type="password"
            placeholder="Sua palavra passe"
            onChange={handleInputChange}
            value={password}
            name="password"
            required
          />
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

          <Button className='test'
            onClick={() => login(email, password)}
            style={{ width: "456px" }}
            label={"Iniciar Sessao"}
          ></Button>

          <div className="icons"></div>
        </div>
      </div>
    </div>
  );
}
