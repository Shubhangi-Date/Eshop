import React from "react";
import styled from "styled-components";
import PartySaree from "../components/PartySaree";
import { popularPartySarees } from "../pages/data";

const Container = styled.div`
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`;

const PartySarees = () => {
  return (
    <Container>
      {popularPartySarees.map((item) => (
        <PartySaree item={item} key={item.id} />
      ))}
    </Container>
  );
};

export default PartySarees;