import styled from "styled-components";

export const FoodFormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
  margin-top: 5rem;
  background-color: #001829;
`;

export const FoodFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 80%;
  max-width: 50rem;
  background-color: #fff;
  border-radius: var(--border-radius);
  margin: 2rem 0;
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.1);
  padding: 2rem;
  background-image: url(${(props) => props.image});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;

  h1 {
    margin-bottom: 1rem;
    color: #fff;
    font-size: var(--title-font-size);
  }

  /* form */

  form {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

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

  & button,
  label.fileInput {
    margin: 0.5rem 0;
    min-height: 2rem;
    background-color: #fff;
    color: var(--main-color);
    border: 1px solid var(--main-color);
    border: none;
    border-radius: 0.5rem;
    font-size: clamp(0.7rem, 2.5vw, 1rem);
    cursor: pointer;
    transition: all 0.3s ease-in-out;
    border: 1px solid var(--main-color);
    font-weight: 500;
  }


  label.fileInput {
    display: flex;
    align-items: center;
    justify-content: center;
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

  .row {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1rem;
    width: 100%;
    align-items: center;
  }

  & input[type="file"] {
    display: none;
  }

  @media (max-width: 768px) {
    .row,
    .three {
      grid-template-columns: 1fr;
      gap: 0;
    }
  }
`;
