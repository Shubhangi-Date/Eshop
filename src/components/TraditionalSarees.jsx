import React from "react";
import styled from "styled-components";
import TraditionalSaree from "./TraditionalSaree";
import { popularTraditionalSarees } from "../pages/data";

const Container = styled.div`
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`;

const TraditionalSarees = () => {
  return (
    <Container>
      {popularTraditionalSarees.map((item) => (
        <TraditionalSaree item={item} key={item.id} />
      ))}
    </Container>
  );
};

export default TraditionalSarees;