import styled from "styled-components";

export const MovieRow = styled.div`
  margin-bottom: 12px;

  .movieRow-listarea {
    overflow-x: hidden;
    padding-left: 30px;
  }

  .movieRow-list {
    transition: all ease 0.2s;
  }

  .movieRow-item {
    display: inline-block;
    width: 150px;
    cursor: pointer;
    margin-left: -8px;
  }

  .movieRow-item img {
    width: 100%;
    height: 13rem;
    transform: scale(0.9);
    transition: all ease 0.2s;
    border-radius: 4px;
  }

  .movieRow-item img:hover {
    transform: scale(1);
  }

  .movieRow-left,
  .movieRow-right {
    position: absolute;
    width: 43px;
    height: 196px;
    background-color: rgb(70 65 65 / 60%);
    z-index: 99;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    cursor: pointer;
    opacity: 0;
    transition: all ease 0.2s;
  }

  .movieRow-left {
    left: 0;
  }

  .movieRow-right {
    right: 0;
  }

  .movieRow:hover .movieRow-left,
  .movieRow:hover .movieRow-right {
    opacity: 1;
  }

  .loading {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 99;
    background-color: #191f26;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  @media (max-width: 760px) {
    .movieRow-listarea {
      overflow-x: hidden;
      padding-left: 30px;
    }

    .movieRow-list {
      transition: all ease 0.2s;
    }

    .movieRow-item {
      display: inline-block;
      width: 150px;
      cursor: pointer;
      margin-left: -8px;
    }

    .movieRow-item img {
      width: 100%;
      height: 13rem;
      transform: scale(0.5);
      transition: all ease 0.2s;
      border-radius: 4px;
    }

    .movieRow-item img:hover {
      transform: scale(8);
    }
    .movieRow-left,
    .movieRow-right {
      position: absolute;
      width: 43px;
      height: 196px;
      background-color: rgb(70 65 65 / 60%);
      z-index: 99;
      display: flex;
      align-items: center;
      justify-content: center;
      overflow: hidden;
      cursor: pointer;
      opacity: 0.4;
      transition: all ease 0.2s;
    }

    .movieRow-item img:hover {
      transform: scale(1);
    }

    .movieRow-item img {
      width: 100%;
      height: 13rem;
      transform: scale(0.9);
      transition: all ease 0.2s;
      border-radius: 4px;
    }
  }
`;
