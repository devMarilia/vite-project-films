import styled from "styled-components";

export const ContainerFooter = styled.div`
  height: 10rem;
  width: 100%;
  display: flex;
  flex-direction: column ;
  justify-content: center;
  align-items: center;
  align-content: center;
  border-top: 1px solid var(--background-mobile-menu);
`;
export const ContentFooter = styled.div`
  height: 5rem;
  width: 90%;
  color: #fff;
  display: flex;
  justify-content: space-around;
  align-items: center;
  align-content: center;

  > h2 {
    font-size: 1rem;
    font-weight: bold;
    text-align: center;
  }
  .list {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
  }
   a {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    color: #fff;
    text-decoration: none;
    &:hover {
        text-decoration: underline ;
    }

  }
`;
