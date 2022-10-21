import styled from "styled-components";

export const ContainerFooter = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-content: center;
  border-top: 1px solid var(--background-mobile-menu);

  .icon-rede-social {
    display: flex;

    > a {
      font-size: 1rem ;
      color: var(--color-primary) ;
    }

    > ul {
      margin-top: -1rem ;
    }
  
  }
`;
export const ContentFooter = styled.div`
  height: 5rem;
  width: 60%;
  color: #fff;
  display: flex;
  justify-content: space-around;
  align-items: center;
  align-content: center;


 

  .list {
    flex-wrap: wrap;
  
  }
  a {
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: start;
    width: 100%;
    color: var(--text-color-secondary);
    text-decoration: none;

    font-size: 0.5rem;
    line-height: 1rem;

    &:hover {
      text-decoration: underline;
    }
  }
`;
