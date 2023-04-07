import React from "react";
import styled from "styled-components";
import JeansPant from "./JeansPant"
import { popularJeansPants } from "../pages/data";

const Container = styled.div`
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`;

const JeansPants = () => {
  return (
    <Container>
      {popularJeansPants.map((item) => (
        <JeansPant item={item} key={item.id} />
      ))}
    </Container>
  );
};

export default JeansPants;