import React from "react";
import styled from "styled-components";
import Jacket from "./Jacket"
import { popularJackets } from "../pages/data";

const Container = styled.div`
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`;

const Jackets = () => {
  return (
    <Container>
      {popularJackets.map((item) => (
        <Jacket item={item} key={item.id} />
      ))}
    </Container>
  );
};

export default Jackets;