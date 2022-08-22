import styled from "styled-components";

export const LoginWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #001829;
  width: 100vw;
  overflow: hidden;
`;

export const LoginContainer = styled.div`
 background-image: url(${(props) => props.backgroundLoginImage});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  display: flex;
  height: 80%;
  width: 80%;
  max-width: 90rem;
  max-height: 50rem;
  transition: all 0.3s ease-in-out;
  position: relative;
  border-radius: var(--border-radius);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .left-side {
    height: 100%;
    width: 60%;
    display: flex;
    justify-content: center;
    border-radius: 0 var(--border-radius) var(--border-radius) 0;

    .login-form {
      width: 90%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      padding: 2rem;
      color: #fff;

      h1 {
        font-size: var(--title-font-size);
        color: #fff;
        margin-bottom: 4rem;
      }
    }

    form {
      width: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      z-index: 10;

      input {
        width: 100%;
        height: 3rem;
        border-radius: var(--border-radius);
        border: 1px solid var(--main-color);
        padding: 0.5rem;
        font-size: var(--text-font-size);
        padding: 1.5rem;
        margin-bottom: 1.5rem;
      }

      button {
        width: 80%;
        height: 3rem;
        border-radius: var(--border-radius);
        border: 1px solid var(--main-color);
        border: none;
        padding: 0.5rem;
        margin-bottom: 1.5rem;
        font-size: var(--text-font-size);
        border: 1px solid #fff;
        color: #fff;
        background-color: var(--main-color);
        cursor: pointer;
      }
    }

    .register span {
      a {
        color: #fff;
      }
      color: #fff;
      cursor: pointer;
    }
  }
  .new-client {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    border-radius: var(--border-radius);
    background-color: #fff;
    position: relative;
  }

  .new-client button.back-to-login {
    position: absolute;
    bottom: 0;
    left: 0;
    margin: 1.5rem;
    cursor: pointer;
    background-color: #fff;
    border: none;
    color: var(--main-color);
    font-size: var(--text-font-size-medium);
    font-weight: bold;
  }

  .register-form {
    width: 90%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 2rem;

    h1 {
      margin-bottom: 3rem;
    }

    form {
      width: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      z-index: 10;

      input {
        width: 100%;
        height: 3rem;
        border-radius: var(--border-radius);
        border: 1px solid var(--main-color);
        padding: 0 0.5rem;
        font-size: var(--text-font-size);
        margin-bottom: 1.5rem;
      }

      button {
        width: 100%;
        height: 3rem;
        border-radius: var(--border-radius);
        border: 1px solid var(--main-color);
        border: none;
        padding: 0.5rem;
        margin-bottom: 1.5rem;
        font-size: var(--text-font-size);
        color: #fff;
        border: 1px solid #fff;
        background-color: var(--main-color);
        cursor: pointer;
      }
    }
  }

  .input {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  label {
    color: #fff;
    font-size: 1.2rem;
    margin-bottom: 0.5rem;
  }

  input[type="date"]:placeholder {
    color: var(--gray-text-color);
  }

  .row {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1rem;
    width: 100%;
    align-items: center;
  }

  .three {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 1rem;
    width: 100%;
    align-items: center;
  }

  @media (max-width: 850px) {
    flex-direction: column-reverse;
    width: 95%;
    scale: 1;
    box-shadow: none;
    &:hover {
      box-shadow: none;
      scale: none;
    }
    .right-side {
      display: none;
    }
    .left-side {
      border-radius: var(--border-radius);
      margin: 0;
      padding: 0;
      width: 100%;
    }
    .row, .three {
      grid-template-columns: 1fr;
      gap: 0;
    }

    .register-form form input {
      font-size: var(--text-font-size-small);
      padding: 0.5rem;
      width: 100%;
      height: 2rem;
      margin-bottom: 0.5rem;
    }
  }
`;
