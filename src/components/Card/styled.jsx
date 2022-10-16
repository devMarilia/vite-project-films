import styled from "styled-components";

export const Cards = styled.div`
  display: flex;



  .image {
    background: #fff;
    border-radius: 10px;
    -webkit-transition: all 0.3s ease-out;
    transition: all 0.3s ease-out;
    background: center;

    margin: 10px;
    max-height: 184px;
  }

  .image:hover {
    transform: translateY(-20px);
    cursor: pointer;
  }
`;
