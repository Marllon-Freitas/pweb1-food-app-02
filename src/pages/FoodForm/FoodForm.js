import React, { useEffect } from "react";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Header from "../../components/Header/Header.js";
import "react-toastify/dist/ReactToastify.css";
import { useForm } from "react-hook-form";
import backgroundLoginImage from "../../assets/img/stacked-peaks-haikei.svg";

import { FoodFormWrapper, FoodFormContainer, ImagePreview } from "./styled.js";
import FoodService from "../../services/FoodService.js";
function FoodForm() {
  const [foodDescription, setFoodDescription] = useState("");
  const [image, setImage] = useState();
  const [imagePreview, setImagePreview] = useState(false);
  const [modal, setModal] = useState(false);
  const { id } = useParams();
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();

  const idCliente = localStorage.getItem("id");

  useEffect(() => {
    if (id !== undefined) {
      FoodService.getSingleFood(id)
        .then((response) => {
          console.log(response);
          setFoodDescription(response.data);
          setImage(response.data.image);
          setImagePreview(true);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, []);

  const onSubmit = (data) => {
    if (id !== undefined) {
      const dataToSend = {
        nome: data.nome,
        valor: data.valor,
        idCliente: idCliente,
        url_foto: image,
      };
      FoodService.updateFood(id, dataToSend)
        .then((response) => {
          if (response.status === 200) {
            window.alert("Alimento atualizado com sucesso!");
            navigate("/");
          } else {
            window.alert(response.data.message);
          }
        })
        .catch((error) => {
          window.alert(error.message);
        });
    } else {
      const dataToSend = {
        nome: data.nome,
        idCliente: idCliente,
        valor: data.valor,
        url_foto: image,
      };
      console.log(dataToSend);
      FoodService.createFood(dataToSend)
        .then((response) => {
          console.log(response);
          if (response.status >= 200 && response.status <= 300) {
            window.alert("Cadastro de prato realizado com sucesso!");
            navigate("/");
          } else {
            window.alert(response.data.message);
          }
        })
        .catch((error) => {
          window.alert(error.message);
        });
    }
  };

  function handleFile(event) {
    const file = event.target.files[0];
    setImage(file);

    const reader = new FileReader();
    reader.onload = (event) => {
      setImage(event.target.result);
    };
    reader.readAsDataURL(file);
  }

  function currencyMask(e) {
    let value = e.target.value;
    value = value.replace(/\D/g, "");
    value = value.replace(/(\d)(\d{2})$/, "$1,$2");
    value = value.replace(/(?=(\d{3})+(\D))\B/g, ".");
    e.target.value = value;
    return e;
  }
  return (
    <>
      <Header />
      <FoodFormWrapper>
        <FoodFormContainer image={backgroundLoginImage}>
          <h1>{id ? "Edição" : "Criação"} de pratos:</h1>
          <form encType="multipart/form-data" onSubmit={handleSubmit(onSubmit)}>
            <div className="row">
              <div className="input">
                <label htmlFor="foodname">Nome do Prato:</label>
                <input
                  type="text"
                  id="foodname"
                  {...register("nome")}
                  defaultValue={id ? foodDescription.nome : ""}
                  placeholder="Nome do prato"
                  required
                />
              </div>
              <div className="input">
                <label htmlFor="foodprice">Valor do Prato:</label>
                <input
                  id="foodprice"
                  type="text"
                  {...register("valor")}
                  placeholder="R$ 0,00"
                  defaultValue={id ? foodDescription.valor : ""}
                  onChange={(e) => currencyMask(e)}
                  required
                />
              </div>
            </div>
            <label className="fileInput" htmlFor="upload-input">
              Selecione uma imagem
            </label>
            <input
              id="upload-input"
              accept="image/*"
              name="image"
              type="file"
              onChange={handleFile}
            />
            <button type="submit" value={"Adicionar"}>
              Adicionar
            </button>
          </form>
        </FoodFormContainer>
      </FoodFormWrapper>
    </>
  );
}

export default FoodForm;
