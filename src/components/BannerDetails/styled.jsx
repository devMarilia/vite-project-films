import styled from "styled-components";

export const ContainerBannerDetails = styled.div`
  width: 100%;
  height: 84vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid var(--background-mobile-menu);

  .content-datails {
    display: flex;
    flex-direction: row;
    width: 80%;

    .content-datails-items-image {
      display: block;
      min-width: 18rem;
      border-radius: 2px;
      position: relative;
      top: 0;
      left: 0;
      height: 29rem;

      .image-details {
        height: 31rem;
        width: 22rem;
        margin-left: -39px;
        margin-top: -23px;
        border-radius: 1rem;
        display: flex;
        object-fit: cover;
      }
    }

    .content-datails-items {
      padding: 0px 40px;
      display: flex;
      align-items: center;
      color: #fff;

      .items-datails {
        display: flex;
        flex-direction: column;
        justify-content: space-between;

        h3 {
          font-size: 2rem;
        }
        .cordoano {
          white-space: nowrap;
          color: #808080;
          margin-bottom: 3rem;
        }
        .sinopse {
          margin-bottom: 1rem;
          font-size: 1.5rem;
        }
        .artigo {
          color: #808080;
        }
      }
    }
  }

  @media (max-width: 700px) {
    height: 142vh;
    width: 100%;
    justify-content: center;
    display: flex;
    align-items: center;

    .content-datails {
      flex-direction: column;

      .content-datails-items {
        padding: 0;
        display: flex;
        justify-content: center;
        text-align: center;
        margin-top: 19px;
      }

      .content-datails-items-image {
        justify-content: center;
        display: flex;
        align-items: center;
        width: 22rem;
      }
    }
  }
  .content-datails-items .items-datails > h3 {
    font-size: 1rem;
  }
`;
