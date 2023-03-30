import React, { useState } from "react";
import styled from "styled-components";
import Basket from "./components/basket/Basket";
import Header from "./components/header/Header";
import Meals from "./components/meals/Meals";
import Summary from "./components/summary/Summary";
import { BasketProvider } from "./store/BasketContext";

const App = () => {
  const [isBasketVisible, setisBasketVisible] = useState(false);

  const showBasketHandler = () => {
    setisBasketVisible((prevState) => !prevState);
  };

  return (
    <BasketProvider>
      <Header onShowBasket={showBasketHandler}></Header>
      <Content>
        <Summary></Summary>
        <Meals></Meals>
        {isBasketVisible ? <Basket onClose={showBasketHandler}></Basket> : null}
      </Content>
    </BasketProvider>
  );
};

export default App;

const Content = styled.div`
  margin-top: 101px;
`;
