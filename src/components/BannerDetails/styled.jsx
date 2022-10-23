import styled from "styled-components";

export const ContainerBannerDetails = styled.div`
  width: 100%;
  height: 84vh;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid var(--background-mobile-menu);

  .content-datails {
    display: flex;
    flex-direction: row;
    width: 80%;

    .content-datails-items-image {
      display: block;
      min-width: 150px;
      width: 275px;
      height: 433px;
      border-radius: 2px;
      position: relative;
      top: 0;
      left: 0;
      background-color: blue;

      .image-details {
        height: 100%;
        width: 100%;
        display: flex;
        object-fit: cover;
      }
    }
    .content-datails-items {
      padding: 0px 20px;
      display: flex;
      margin-top: -16rem;
      align-items: center;
      color: #fff;
    }
  }
`;
