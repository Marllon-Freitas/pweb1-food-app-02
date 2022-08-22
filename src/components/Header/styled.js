import styled from "styled-components";

export const HeaderWrapper = styled.div`
  width: 100%;
  height: 5rem;
  display: flex;
  justify-content: space-around;
  align-items: center;
  box-shadow: 0 0.25rem 0.5rem rgba(0, 0, 0, 0.1);
  z-index: 10;
  position: fixed;
  padding: 0 1rem;
  top: 0;
  left: 0;
  right: 0;
  transition: all 0.3s ease-in-out;
  border-bottom: 1px solid #e6e6e6;
  background-color: #001829;
`;

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 100%;
  padding: 0 1rem;
  max-width: 100%;
  position: relative;

  nav {
    display: flex;
    margin-left: 1rem;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 100%;
    max-width: 100%;
    position: relative;
  }

  nav ul {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 100%;
    max-width: 100%;
    position: relative;
  }

  nav ul li {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    max-width: 100%;
    position: relative;
    color: #fff;
  }

  a {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0;
    list-style: none;
    color: #fff;
  }

  .nav-item {
    width: 100%;
    height: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0;
    list-style: none;
    transition: all 0.3s ease-in-out;
    cursor: pointer;
    color: #fff;
    span {
      font-size: 1rem;
      margin-right: 0.3rem;
      color: #fff;
    }
  }

  span {
    font-size: var(--text-font-size-small);
    color: var(--gray-text-color);
  }

  h1 {
    font-size: var(--title-font-size);
    color: #fff;
  }
`;
