import styled from "styled-components";

export const FoodListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin-top: 5rem;
  background-color: #001829;
  padding: 2rem;
  color: #fff;
  
  h1 {
    font-size: var(--title-font-size);
    margin-bottom: 2rem;
    align-self: flex-start;
    color: #fff;
  }
`;
export const FoodListContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(30rem, 1fr));
  gap: 2rem;
  align-items: center;
  justify-items: center;
  width: 100%;
  max-width: 100rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;
