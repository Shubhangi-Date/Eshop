import React from "react";
import styled from "styled-components";
import LeatherJacket from "../components/LeatherJacket";
import { popularLeatherJackets } from "../pages/data";

const Container = styled.div`
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`;

const LeatherJackets = () => {
  return (
    <Container>
      {popularLeatherJackets.map((item) => (
        <LeatherJacket item={item} key={item.id} />
      ))}
    </Container>
  );
};

export default LeatherJackets;