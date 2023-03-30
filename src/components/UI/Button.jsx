import React from "react";
import styled from "styled-components";

const Button = ({
  children,
  variant = "contened",
  borderStyle = "rounded",
  onClose,
}) => {
  return (
    <StyledButton variant={variant} borderStyle={borderStyle} onClick={onClose}>
      {children}
    </StyledButton>
  );
};

export default Button;

const getBacrounColor = (props) => {
  return props.variant === "contened" ? "#8a2b06" : "#fff";
};

const getBorder = (props) => {
  return props.variant === "contened" ? "none" : "1px solid #8A2B06";
};

const getColor = (props) => {
  return props.variant === "contened" ? "#fff" : "#8A2B06";
};

const getBorderRadius = (props) => {
  return props.borderStyle === "rounded" ? "20px" : "6px";
};

const StyledButton = styled.button`
  background: ${getBacrounColor};
  border-radius: ${getBorderRadius};
  padding: 10px 32px;
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  color: ${getColor};
  border: ${getBorder};

  cursor: pointer;
  :hover {
    background: #7e2a0a;
    color: #ffffff;
  }
  :active {
    background: #993108;
  }
`;

//  #8a2b06;
