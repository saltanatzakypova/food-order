import React, { useContext } from "react";
import styled from "styled-components";
import { BasketContext } from "../../store/BasketContext";
import Modal from "../UI/Modal";
import BasketItem from "./BasketItem";
import TotalAmout from "./TotalAmout";

const Basket = ({ onClose }) => {
  const { items } = useContext(BasketContext);

  const getPriceAmout = () => {
    return items.reduce((sum, { price, amout }) => sum + price * amout, 0);
  };

  return (
    <Modal onClose={() => {}}>
      <Content>
        {items.length ? (
          <FisedHeightContainer>
            {items.map((item) => {
              return (
                <BasketItem
                  key={item.id}
                  title={item.title}
                  price={item.price}
                  amout={item.amout}
                ></BasketItem>
              );
            })}
          </FisedHeightContainer>
        ) : null}
        <TotalAmout
          price={getPriceAmout()}
          onClose={onClose}
          onOrder={() => {}}
        ></TotalAmout>
      </Content>
    </Modal>
  );
};

export default Basket;

const Content = styled.div`
  width: 100%;
  height: 100%;
  padding: 0 1rem 1.5rem 1rem;
`;

const FisedHeightContainer = styled.div`
  max-height: 228px;
  overflow-y: scroll;
`;
