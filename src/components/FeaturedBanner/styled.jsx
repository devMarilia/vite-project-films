import styled from "styled-components";

export const ContainerFeaturedBanner = styled.div`
  width: 100%;
  height: 70vh;
  display: flex;
  justify-content: center;
  align-items: center;

  div > {
    width: 63%;
    height: 73vh;
    background-color: white;
    border-radius: 5px;
    
  }

  img {
    width: 100rem;
    height: 100%;
    object-fit: contain;
    object-position: center;
  }

  @media (max-width: 700px) {
    height: 23vh;

    img {
      width: 34rem;
    }
  }
`;
