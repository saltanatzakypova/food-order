import React from "react";
import styled from "styled-components";
import BackgroundImg from "../../assets/images/summary-bacround.jpg";
import SummaryInfo from "./SummaryInfo";

const Summary = () => {
  return (
    <Container>
      <StyledImg src={BackgroundImg} alt="" />
      <SummaryInfo></SummaryInfo>
    </Container>
  );
};

export default Summary;

const Container = styled.div`
  height: 527px;

`;

const StyledImg = styled.img`
  height: 432px;
  width: 100%;
`;
