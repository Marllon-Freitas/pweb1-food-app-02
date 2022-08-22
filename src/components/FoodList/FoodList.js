import { FoodListWrapper, FoodListContainer } from "./styled.js";
import FoodItem from "../FoodItem/FoodItem.js";
import React, { useState, useEffect, useCallback } from "react";
// fake data
import { fakeData } from "../../fakeData.js";

import FoodService from "../../services/FoodService.js";

function FoodList({ setSelectedCartFood }) {
  const [foods, setFoods] = useState([]);
  const [selectedFood, setSelectedFood] = useState([]);

  useEffect(() => {
    FoodService.getAllFood()
      .then((response) => {
        setFoods(response.data);
      }).catch((error) => {
        console.log(error);
      }
      );
  }
  , [  ]);

  useEffect(() => {
    setSelectedCartFood(selectedFood);
  }, [selectedFood]);

  return (
    <FoodListWrapper>
      <FoodListContainer>
        {foods.map((food) => (
          <FoodItem
            key={food.id}
            food={food}
            setSelectedFoods={setSelectedFood}
            selectedFoods={selectedFood}
          />
        ))}
      </FoodListContainer>
    </FoodListWrapper>
  );
}

export default FoodList;
