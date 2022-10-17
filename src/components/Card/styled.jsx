import styled from "styled-components";

export const ContainerCard = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;

export const Cards = styled.div`
  display: flex;

  .card {
    display: flex;
    overflow-x: auto;
    scroll-behavior: smooth;
  }

  .card::-webkit-scrollbar {
    display: none;
  }

  .image {
    background: #fff;
    border-radius: 3px;
    object-fit: cover;
    background: center;
    margin: 7px;
    margin-left: -1px;
    max-height: 180px;
    margin-bottom: 15px;
    transition: 0.3s all ease-in-out;
  }

  .image:hover {
    cursor: pointer;
    transform: scale(1.2);
  }
`;

export const Scroll = styled.div`
  .arrow {
    background-color: transparent;
    color: #fff;
    cursor: pointer;
    height: 2rem;
    width: 25px;
    position: absolute;
    z-index: 999;
  }

  .arrow:hover {
    background-color: #fff;
    color: #777;
  }

  .next {
    top: 89%;
    right: 1.5rem;
  }

  .prev {
    top: 89%;
    left: 0.5rem;
  }
`;
