import React, {  useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { BasketContext } from "../../store/BasketContext";
import BasketButton from "../basket/BasketButton";

const Header = ({ onShowBasket }) => {
  const { items } = useContext(BasketContext);
  const [animationClass, setAnimationClass] = useState("");

  const calculeteHandler = () => {
    const sum = items.reduce((s, item) => {
      return s + item.amout;
    }, 0);
    return sum;
  };

  useEffect(() => {
    setAnimationClass("bump");
    const id = setInterval(() => {
      setAnimationClass("");
    }, 300);
    return () => {
      clearTimeout(id);
    };
  }, [items]);

  return (
    <Container>
      <Logo>ReactMeals</Logo>
      <BasketButton
        className={animationClass}
        onClick={onShowBasket}
        count={calculeteHandler()}
      ></BasketButton>
    </Container>
  );
};

export default Header;

const Container = styled.header`
  width: 100%;
  height: 101px;
  position: fixed;
  top: 0;
  background-color: #8a2b06;
  display: flex;
  justify-content: space-between;
  padding: 0 120px;
  align-items: center;
  z-index: 1;

  .bump {
    animation: bump 300ms ease-out;
  }

  @keyframes bump {
    0% {
      transform: scale(1);
    }
    10% {
      transform: scale(0.9);
    }
    30% {
      transform: scale(1.1);
    }
    50% {
      transform: scale(1.15);
    }
    100% {
      transform: scale(1);
    }
  }
`;

const Logo = styled.p`
  font-weight: 600;
  font-size: 38px;
  line-height: 57px;
  color: #ffffff;
  margin: 0;
`;
