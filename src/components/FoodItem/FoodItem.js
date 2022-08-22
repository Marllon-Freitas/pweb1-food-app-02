import React, { useEffect } from "react";

import FoodService from "../../services/FoodService.js";

import { FoodIndividualItem, ImageFoodContainer } from "./styled.js";

import { BsPlus } from "react-icons/bs";
import { Link, useNavigate } from "react-router-dom";
import { AiFillDelete, AiFillEdit } from "react-icons/ai";
import { useState } from "react";
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";
import Modal from "../Modal/Modal.js";

function FoodItem({ food, setSelectedFoods, selectedFoods }) {
  const [modalDelete, setModalDelete] = useState(false);
  const [isNewHere, setIsNewHere] = useState(true);
  let navigate = useNavigate();

  useEffect(() => {
    localStorage.getItem("token") ? setIsNewHere(false) : setIsNewHere(true);
  }, []);

  console.log(food);

  function handleDelete(id) {
    let answer = window.confirm("Tem certeza que deseja excluir o alimento?");
    if (answer) {
      FoodService.removeSingleFood(id)
        .then((response) => {
          if (response.status === 200) {
            setModalDelete(false);
            window.alert("Prato deletado com sucesso!");
            window.location.reload();
          }
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }

  function handleAddFoodToCart() {
    if (isNewHere === true) {
      var answer = window.confirm(
        "Você não esta cadastrado. Deseja cadastrar agora?"
      );
      if (answer) {
        navigate("/cadastrar");
      }
    } else {
      let selectFood = [...selectedFoods, food];
      setSelectedFoods(selectFood);
    }
  }

  return (
    <FoodIndividualItem>
      <ImageFoodContainer
        image={
          food.url_foto
            ? food.url_foto
            : "https://images.unsplash.com/photo-1571997478779-2adcbbe9ab2f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
        }
      />
      <div className="food">
        <div className="food-info">
          <h3 title={food.nome}>{food.nome}</h3>
          <p>{food.valor}</p>
        </div>
        <div className="food-action">
          <button
            className="add-food-to-cart"
            title={"Adicionar ao carrinho"}
            onClick={handleAddFoodToCart}
          >
            Adicionar
          </button>

          <div
            className="adm-food-actions"
            style={
              localStorage.getItem("role") === "adm"
                ? { display: "flex" }
                : { display: "none" }
            }
          >
            <button
              className="edit-food"
              title={"Editar prato"}
              onClick={() => {
                navigate(`/prato/${food.idPrato}`);
              }}
            >
              Editar
            </button>

            <button
              className="delete-food"
              title={"Deletar prato"}
              onClick={() => {
                handleDelete(food.idPrato);
              }}
            >
              Deletar
            </button>
          </div>
        </div>
      </div>
    </FoodIndividualItem>
  );
}

export default FoodItem;
