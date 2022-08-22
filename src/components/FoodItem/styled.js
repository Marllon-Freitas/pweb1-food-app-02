import styled from "styled-components";

export const FoodIndividualItem = styled.div`
  display: flex;
  justify-content: center;
  max-width: 30rem;
  width: 100%;
  height: 17rem;
  border-radius: var(--border-radius);
  background-color: #fff;
  position: relative;

  .modal-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    padding: 2rem;
  }

  .modal-buttons {
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1rem;
    margin-top: 1rem;
  }

  .modal-buttons button {
    width: 100%;
    height: 3rem;
    border-radius: var(--border-radius);
    border: 1px solid var(--main-color);
    border: none;
    padding: 0.5rem;
    font-size: var(--text-font-size);
    color: #fff;
    background-color: var(--main-color);
    cursor: pointer;
  }

  a {
    width: 100%;
    height: 100%;
  }

  .food {
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: space-around;
  }

  .food-image {
    height: 100%;
    width: 100%;
    border-radius: var(--border-radius) var(--border-radius) 0 0;
    overflow: hidden;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .food-info {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: right;
    min-width: 14rem;
    padding: 0.5rem;
    border-radius: 0 0 var(--border-radius) var(--border-radius);

    h3 {
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      font-size: var(--text-font-size);
      font-weight: bold;
      color: var(--gray-text-color);
    }
    p {
      font-size: var(--text-font-size-small);
      color: var(--gray-text-color);
    }
  }

  .food-action {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    border-radius: 0 0 var(--border-radius) var(--border-radius);
    background-color: #fff;
    padding: 0.5rem 1rem;
    font-size: var(--text-font-size-small);
    cursor: pointer;
    transition: all 0.3s ease-in-out;
  }

  .adm-food-actions {
    display: flex;
    flex-direction: column;
    width: 100%;
  }

  .adm-food-actions button {
    margin-top: 0.5rem;
  }

  .add-food-to-cart {
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: var(--border-radius);
    padding: 0.5rem 1rem;
    background-color: var(--main-color);
    color: #fff;
    font-size: 1.2rem;
    border: none;
    transition: all 0.3s ease-in-out;
    width: 100%;
    cursor: pointer;
    transition: all 0.3s ease-in-out;
  }

  .edit-food {
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: var(--border-radius);
    padding: 0.5rem 1rem;

    background-color: var(--admin-color);
    color: #fff;
    font-size: 1.2rem;
    border: none;
    transition: all 0.3s ease-in-out;
    cursor: pointer;
    transition: all 0.3s ease-in-out;
  }

  .delete-food {
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: var(--border-radius);
    background-color: red;
    color: #fff;
    padding: 0.5rem 1rem;

    font-size: 1.2rem;
    border: none;
    transition: all 0.3s ease-in-out;
    cursor: pointer;
    transition: all 0.3s ease-in-out;
  }

  @media (max-width: 768px) {
    .food-info {
      min-width: 0;
    }
  }
`;

export const ImageFoodContainer = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 0.5rem;
  overflow: hidden;
  background-image: url(${(props) => props.image});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  img {
    width: 100%;
    height: 100%;
  }
`;
