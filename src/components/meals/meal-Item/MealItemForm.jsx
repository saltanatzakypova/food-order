import React, { useContext, useState } from "react";
import styled from "styled-components";
import { ReactComponent as PlusIcon } from "../../../assets/icons/plusIcon.svg";
import { BasketContext } from "../../../store/BasketContext";
import Button from "../../UI/Button";

const MealItemForm = ({ id, title, price }) => {
  const { addToBasket } = useContext(BasketContext);
  const [amout, setAmout] = useState(1);

  const amoutChangeHandler = (e) => {
    setAmout(+e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();

    const basketItem = {
      id,
      price,
      title,
      amout
    };
    addToBasket(basketItem);
  };

  return (
    <StyledForm onSubmit={submitHandler}>
      <InputContainer>
        <label htmlFor={id}>Amount</label>
        <StyledInput
          value={amout}
          onChange={amoutChangeHandler}
          id={id}
          type="number"
          min={1}
          defaultValue={0}
        />
      </InputContainer>
      <Button>
        <StyledIcon></StyledIcon> add
      </Button>
    </StyledForm>
  );
};

export default MealItemForm;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

const InputContainer = styled.div`
  margin-bottom: 12px;
  label {
    font-weight: 600;
    font-size: 18px;
    line-height: 27px;
    color: #222222;
  }
`;

const StyledInput = styled.input`
  width: 60px;
  height: 32px;
  border: 1px solid #d6d6d6;
  border-radius: 6px;
  margin-left: 20px;
  outline: none;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  color: #222222;
  padding: 4px 12px;
`;

const StyledIcon = styled(PlusIcon)`
  margin-right: 12px;
`;
