import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { LoginContainer, LoginWrapper } from "./styled";
import "react-toastify/dist/ReactToastify.css";

import { toast } from "react-toastify";

import FoodService from "../../services/FoodService";

import { BiArrowBack } from "react-icons/bi";

import backgroundLoginImage from "../../assets/img/stacked-peaks-haikei.svg";
import { useNavigate, useParams } from "react-router-dom";

function ClientForm() {
  const navigate = useNavigate();
  const [dataToSubmit, setDataToSubmit] = useState({});
  const [allFields, setAllFields] = useState(false);
  const { register, handleSubmit } = useForm();
  const { id } = useParams();

  // submit data
  async function onSubmit(data) {
    const dataToSend = {
      name: data.name,
      email: data.email,
      senha: data.senha,
      cpf: data.cpf,
      telefone: "1111111",
      nascimento: data.nascimento,
      endereco: {
        rua: data.clientAddress,
        cidade: data.clientCity,
        bairro: data.clientDistrict,
      },
    };

    if (id) {
      FoodService.updateClient(id, dataToSend).then((response) => {
        if (response.status === 200) {
          window.alert("Cliente atualizado com sucesso!");
          navigate("/");
        } else {
          window.alert(response.data.message);
        }
      });
    } else {
      try {
        await FoodService.createClient(dataToSend).then((response) => {
          if (response.status === 200) {
            window.alert("Cadastro de cliente realizado com sucesso!");
            localStorage.setItem("token", response.data.token);
            localStorage.setItem("role", response.data.role);
            localStorage.setItem("id", response.data.idCliente);
            navigate("/");
          } else {
            console.log(response);
            window.alert(response);
          }
        });
      } catch (error) {
        window.alert("email ou cpf já cadastrados");
        window.alert(error);
        console.log(error);
      }
    }
  }

  function formatCpf(e) {
    let cpf = e.target.value;
    cpf = cpf.replace(/\D/g, "");
    cpf = cpf.replace(/(\d{3})(\d)/, "$1.$2");
    cpf = cpf.replace(/(\d{3})(\d)/, "$1.$2");
    cpf = cpf.replace(/(\d{3})(\d{1,2})$/, "$1-$2");
    e.target.value = cpf;
    return e;
  }

  return (
    <LoginWrapper>
      <LoginContainer backgroundLoginImage={backgroundLoginImage}>
        <div className="new-client">
          <form className="register-form" onSubmit={handleSubmit(onSubmit)}>
            <h1>Cadastre-se</h1>
            <div className="row">
              <div className="input">
                <label htmlFor="nome">Nome:</label>
                <input {...register("name")} placeholder="nome" id="nome" />
              </div>
              <div className="input">
                <label htmlFor="email">Email:</label>
                <input
                  type="email"
                  id="email"
                  {...register("email")}
                  placeholder="email@exemple.com"
                />
              </div>
            </div>
            <div className="row">
              <div className="input">
                <label htmlFor="cpf">Cpf:</label>
                <input
                  type="text"
                  maxLength={14}
                  {...register("cpf")}
                  placeholder="cpf"
                  id="cpf"
                  onChange={(e) => formatCpf(e)}
                />
              </div>
              <div className="input">
                <label htmlFor="date">Data de Nascimento:</label>
                <input
                  type="date"
                  id="date"
                  {...register("nascimento")}
                  placeholder="data de nascimento"
                />
              </div>
            </div>
            <div className="row">
              <div className="input">
                <label htmlFor="address">Endereço:</label>

                <input
                  id="address"
                  type="text"
                  {...register("clientAddress")}
                  placeholder="endereço"
                />
              </div>
              <div className="input">
                <label htmlFor="bairro">Bairro:</label>

                <input
                  type="text"
                  id="bairro"
                  {...register("clientDistrict")}
                  placeholder="bairro"
                />
              </div>
            </div>

            <div className="row">
              <div className="input">
                <label htmlFor="senha">Senha:</label>

                <input
                  id="senha"
                  type="password"
                  {...register("senha")}
                  placeholder="senha"
                />
              </div>
              <div className="input">
                <label htmlFor="cidade">Cidade:</label>
                <input
                  id="cidade"
                  type="text"
                  {...register("clientCity")}
                  placeholder="cidade"
                />
              </div>
            </div>
            <button type="submit">Cadastrar</button>
          </form>
        </div>
        <button className="back-button" onClick={() => navigate(-1)}>
          <BiArrowBack size={20} />
        </button>
      </LoginContainer>
    </LoginWrapper>
  );
}

export default ClientForm;
