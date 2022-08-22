import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";

import { useForm } from "react-hook-form";

import FoodService from "../../services/FoodService";

// Estilos
import { LoginWrapper, LoginContainer } from "./styled";

import backgroundLoginImage from "../../assets/img/stacked-peaks-haikei.svg";

function Login() {
  let navigate = useNavigate();
  const { register, handleSubmit } = useForm();
  const [dataToSubmit, setDataToSubmit] = useState({});

  const onSubmit = (data) => {
    FoodService.login(data).then((response) => {
      console.log(response);
      if (response.status === 401) {
        toast.error("Email ou senha incorretos!");
      } else {
        console.log(response);
        localStorage.setItem("token", response.data.token);
        localStorage.setItem("role", response.data.role);
        localStorage.setItem("id", response.data.idCliente);
        toast.success("Bem vindo(a) de volta!");
        navigate("/");
      }
    });
  };

  return (
    <LoginWrapper>
      <LoginContainer backgroundLoginImage={backgroundLoginImage}>
        <>
          <div className="left-side">
            <div className="login-form">
              <h1>MyFoods</h1>
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="input">
                  <label htmlFor="loginemail">email:</label>
                  <input
                    id="loginemail"
                    {...register("email")}
                    type="email"
                    placeholder="Usuário"
                  />
                </div>
                <div className="input">
                  <label htmlFor="loginsenha">Senha:</label>
                  <input
                    id="loginsenha"
                    {...register("senha")}
                    type="password"
                    placeholder="Senha"
                  />
                </div>
                <button type="submit">Entrar</button>
                <div className="register">
                  Não Possui conta?{" "}
                  <span>
                    <Link to="/cadastrar">cadastro</Link>
                  </span>
                </div>
              </form>
            </div>
          </div>
        </>
      </LoginContainer>
    </LoginWrapper>
  );
}

export default Login;
