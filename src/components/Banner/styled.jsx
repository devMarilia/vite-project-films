import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 67vh;
  position: relative;
  overflow: hidden;

  .imageSlide {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
    background-color: rgba(0, 0, 0, 0.5);
  }
  .slide {
    position: absolute;
    top: -5;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
    transform: translateX(-0%);
    transition: all 60s ease;
  }
  @media screen and (min-width: 600px) {
    .slide img {
      width: 100%;
      height: 100%;
    }
  }

  .slide img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
  }

  .current {
    opacity: 1;
    transform: translateX(0);
  }

  .content {
    position: absolute;
    margin-top: -5rem;
    left: 5rem;
    width: 20%;
    opacity: 0;

    color: #fff;

    animation: slide-up 1s ease 0.5s;
    animation-delay: 1s;
    animation-fill-mode: forwards;
    visibility: hidden;
  }

  @keyframes slide-up {
    0% {
      visibility: visible;
      top: 23rem;
    }
    100% {
      visibility: visible;
      top: 17rem;
    }
  }

  @media screen and (max-width: 600px) {
    .content {
      width: 80%;
    }
  }

  .content > * {
    color: #fff;
    margin-bottom: 1rem;
  }

  .current .content {
    opacity: 1;
    transform: translateX(0);
    transition: all 0.5s ease;
  }

  .arrow {
    border: 2px solid white;
    background-color: transparent;
    color: #fff;
    cursor: pointer;
    height: 2rem;
    width: 2rem;
    border-radius: 50%;
    position: absolute;
    z-index: 999;
  }
  .arrow:hover {
    background-color: #fff;
    color: #777;
  }

  .next {
    top: 35%;
    right: 1.5rem;
  }
  .prev {
    top: 35%;
    left: 1.5rem;
  }

  hr {
    height: 2px;
    background: white;
    width: 50%;
  }
`;
