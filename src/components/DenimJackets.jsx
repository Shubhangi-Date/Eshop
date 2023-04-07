import React from "react";
import styled from "styled-components";
import DenimJacket from "../components/DenimJacket";
import { popularDenimJackets } from "../pages/data";

const Container = styled.div`
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`;

const DenimJackets = () => {
  return (
    <Container>
      {popularDenimJackets.map((item) => (
        <DenimJacket item={item} key={item.id} />
      ))}
    </Container>
  );
};

export default DenimJackets;