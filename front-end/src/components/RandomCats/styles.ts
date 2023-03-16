import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: #fcf7f7;

  .div-search {
    display: flex;
    justify-content: space-between;
    margin-bottom: 50px;
  }

  button {
    background-color: transparent;
    border: transparent;
    color: #ec6e74;
    font-size: 30px;
    margin-right: 29px;
    margin-top: -26px;
  }

  button:hover {
    color: #cf2d35;
  }

  .div-cat {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .img-cat-face {
    width: 556px;
  }

  .div-cat-init {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .img-cat-init {
    width: 363px;
  }

  @media (max-width: 617px) {
    .img-cat-face {
      width: 385px;
    }
  }

  @media (max-width: 510px) {
    .img-cat-face {
      width: 385px;
    }

    .img-cat-init {
      width: 363px;
    }
  }

  @media (max-width: 472px) {
    .img-cat-face {
      width: 275px;
    }
  }

  @media (max-width: 510px) {
    .img-cat-init {
      width: 251px;
    }
  }
`;
