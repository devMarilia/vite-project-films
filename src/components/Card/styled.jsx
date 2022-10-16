import styled from "styled-components";

export const ContainerCard = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;

export const Cards = styled.div`
  display: flex;

  .image {
    background: #fff;
    border-radius: 10px;
    -webkit-transition: all 0.3s ease-out;
    transition: all 0.3s ease-out;
    background: center;
    margin: 2px;
    max-height: 128px;
  }

  .image:hover {
    transform: translateY(-20px);
    cursor: pointer;
  }
`;
