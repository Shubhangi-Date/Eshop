import React from "react";
import styled from "styled-components";
import Saree from '../components/Saree';
import { popularSarees } from "../pages/data";

const Container = styled.div`
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`;

const Sarees = () => {
  return (
    <Container>
      {popularSarees.map((item) => (
        <Saree item={item} key={item.id} />
      ))}
    </Container>
  );
};

export default Sarees;