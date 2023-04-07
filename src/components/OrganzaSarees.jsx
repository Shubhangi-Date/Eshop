import React from "react";
import styled from "styled-components";
import OrganzaSaree from '../components/Saree';
import { popularOrganzaSarees } from "../pages/data";

const Container = styled.div`
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`;

const OrganzaSarees = () => {
  return (
    <Container>
      {popularOrganzaSarees.map((item) => (
        <OrganzaSaree item={item} key={item.id} />
      ))}
    </Container>
  );
};

export default OrganzaSarees;