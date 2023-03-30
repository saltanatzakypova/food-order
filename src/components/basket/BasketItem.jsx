import React from "react";
import styled from "styled-components";
import Button from "../UI/Button";

const BasketItem = ({ title, price, amout }) => {
  return (
    <Container>
      <Title>{title}</Title>

      <Content>
        <PriceAndAmoutContaibner>
          <Price>${price}</Price>
          <Amout>{amout}</Amout>
        </PriceAndAmoutContaibner>

        <CounterCantainer>
          <Button borderStyle="squared" variant="outlined">
            -
          </Button>
          <Button borderStyle="squared" variant="outlined">
            +
          </Button>
        </CounterCantainer>
      </Content>
    </Container>
  );
};

export default BasketItem;

const Container = styled.div`
  padding: 24px 0;
  width: 100%;
`;

const Title = styled.p`
  font-weight: 600;
  font-size: 20px;
  line-height: 30px;
  color: #222222;
  margin: 0 0 12px 0;
`;

const Price = styled.p`
  font-weight: 600;
  font-size: 18px;
  line-height: 27px;
  color: #ad5502;
`;

const Amout = styled.span`
  border: 1px solid #d6d6d6;
  border-radius: 6px;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  color: #222222;
  padding: 6px 14px;
  /* display: inline; */
  display: block;
`;

const PriceAndAmoutContaibner = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 153px;
`;

const CounterCantainer = styled.div`
  display: flex;
  gap: 14px;
`;

const Content = styled.div`
  display: flex;
  justify-content: space-between;
  /* justify-content: center; */
  align-items: center;
`;
