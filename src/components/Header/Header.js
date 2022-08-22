import React, { useEffect, useState } from "react";

import { HeaderWrapper, HeaderContainer } from "./styled.js";

// router
import { Routes, Route, Link, useNavigate } from "react-router-dom";

function Header({ selectedCartFood }) {
  const [selectedCartFoods, setSelectedCartFoods] = useState(selectedCartFood);
  const [sidebar, setSidebar] = useState(false);
  const [selectedFoodToAdd, setSelectedFoodToAdd] = useState(selectedCartFoods);
  const [isNewHere, setIsNewHere] = useState(false);
  const [isAdm, setIsAdm] = useState(false);
  let navigate = useNavigate();

  let token = localStorage.getItem("token");
  let role = localStorage.getItem("role");

  useEffect(() => {
    token ? setIsNewHere(false) : setIsNewHere(true);
    role === "adm" ? setIsAdm(true) : setIsAdm(false);
  }, [role, token]);

  function handleLogout() {
    localStorage.removeItem("token");
    localStorage.removeItem("role");
    navigate("/login");
  }

  function handleNewfood() {
    if (isAdm !== true) {
      window.alert(
        "Você não pode adicionar um prato se não for Administrador!"
      );
    } else {
      navigate("/prato");
    }
  }

  return (
    <HeaderWrapper>
      <HeaderContainer>
        <div className="right-side">
          <Link to="/">
            <h1>MyFoods</h1>
          </Link>
        </div>
        <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
          <ul className="nav-menu-items">
            {isNewHere === true ? (
              <li className="nav-item">
                <Link to="/cadastrar" className="nav-link">
                  Cadastre-se!
                </Link>
              </li>
            ) : (
              <li className="nav-item"
                style={{ cursor: "initial" }}
              >
               Bem Vindo
              </li>
            )}
            <li className="nav-item">
              <Link to="/" className="nav-link">
                <span>Pratos disponíveis</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to={isNewHere === true ? `/cadastrar` : `/`}
                className="nav-link"
              >
                <span>Meus Pedidos</span>
              </Link>
            </li>
            <li className="nav-item">
              <span>Carrinho</span>
            </li>
            <li className="nav-item" onClick={handleNewfood}>
              <span
                style={{
                  color: isAdm === true ? "#fff" : "var(--admin-color)",
                }}
              >
                Adicionar Prato
              </span>
            </li>
            <li
              className="nav-item"
              onClick={() => {
                handleLogout();
              }}
            >
              <span>Sair</span>
            </li>
          </ul>
        </nav>
      </HeaderContainer>
    </HeaderWrapper>
  );
}

export default Header;
