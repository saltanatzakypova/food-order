import React from "react";
import styled from "styled-components";
import Button from "../UI/Button";

const TotalAmout = ({ price, onClose, onOrder }) => {
  const orderButton =
    price > 0 ? <Button onClick={onOrder}>Order</Button> : null;

  // const fisedPrice = price.toFixed(2);

  return (
    <Container>
      <InfoContainer>
        <Label>Total Amout </Label>
        <Price>${price}</Price>
      </InfoContainer>
      <ActionButtonsContainer>
        <Button variant="outlined" onClose={onClose}>
          Close
        </Button>
        {orderButton}
      </ActionButtonsContainer>
    </Container>
  );
};

export default TotalAmout;

const Label = styled.p`
  font-weight: 700;
  font-size: 20px;
  line-height: 30px;
  text-align: center;
  color: #222222;
  margin: 0;
`;

const Price = styled.p`
  font-weight: 600;
  font-size: 18px;
  line-height: 27px;
  color: #ad5502;
  margin: 0;
`;

const InfoContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ActionButtonsContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 24px;
  gap: 1rem;
`;

const Container = styled.div`
  padding-top: 30px;
`;
