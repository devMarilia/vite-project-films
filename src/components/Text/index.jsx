import React from "react";
import { ContainerText } from "./styled";
const Text = ({children}) => {
  return (
    <ContainerText>
      <h2>{children}</h2>
    </ContainerText>
  );
};

export default Text;
