import React, { useState } from "react";
import FoodList from "../../components/FoodList/FoodList";

// components
import Header from "../../components/Header/Header";

function Home() {
  const [selectedCartFood, setSelectedCartFood] = useState([])
  return (
    <>
      <Header selectedCartFood={selectedCartFood} />
      <FoodList  setSelectedCartFood={setSelectedCartFood}/>
    </>
  );
}

export default Home;
