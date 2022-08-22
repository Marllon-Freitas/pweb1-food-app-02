import styled from "styled-components";

export const LoginWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100vw;
  overflow: hidden;
  background-color: #001829;
`;

export const LoginContainer = styled.div`
  display: flex;
  height: 80%;
  width: 80%;
  max-width: 90rem;
  max-height: 50rem;
  transition: all 0.3s ease-in-out;
  position: relative;
  border-radius: var(--border-radius);
  background-image: url(${(props) => props.backgroundLoginImage});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;

  .new-client {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    border-radius: var(--border-radius);
    position: relative;
  }

  .input {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: start;
  }

  label {
    color: #fff;
    font-size: 1.2rem;
    margin-bottom: 0.5rem;
  }


  button.back-button {
    position: absolute;
    top: 0;
    left: 0;
    margin: 1.5rem;
    cursor: pointer;
    background-color: transparent;
    border: none;
    color: #fff;
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
      color: #fff;
    }

    form {
      width: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
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
      border: 1px solid #fff;
      font-size: var(--text-font-size);
      color: #fff;
      background-color: var(--main-color);
      cursor: pointer;
    }
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
    .row,
    .three {
      grid-template-columns: 1fr;
      gap: 0;
    }

    .register-form input {
      font-size: var(--text-font-size-small);
      padding: 0.5rem;
      height: 2rem;
      margin-bottom: 0.5rem;
    }
  }
`;
