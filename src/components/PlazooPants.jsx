import React from "react";
import styled from "styled-components";
import PlazooPant from "../components/PlazooPant";
import { popularPlazooPants } from "../pages/data";

const Container = styled.div`
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`;

const PlazooPants = () => {
  return (
    <Container>
      {popularPlazooPants.map((item) => (
        <PlazooPant item={item} key={item.id} />
      ))}
    </Container>
  );
};

export default PlazooPants;