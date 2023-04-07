import React from "react";
import styled from "styled-components";
import Pant from "./Pant"
import { popularPants } from "../pages/data";

const Container = styled.div`
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`;

const Pants = () => {
  return (
    <Container>
      {popularPants.map((item) => (
        <Pant item={item} key={item.id} />
      ))}
    </Container>
  );
};

export default Pants;