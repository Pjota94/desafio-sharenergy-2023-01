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
    /* margin-top: 50px; */
  }

  .img-cat-face {
    /* border: 5px solid #ec6e74; */
    width: 556px;
  }

  .div-cat-init {
    display: flex;
    justify-content: center;
    align-items: center;
    /* margin-top: 50px; */
  }
`;
