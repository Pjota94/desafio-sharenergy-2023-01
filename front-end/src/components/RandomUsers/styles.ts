import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: #fcf7f7;

  .div-search-logout {
    display: flex;
    justify-content: space-between;
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

  .div-cards {
    margin-top: 44px;
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow: scroll;
    height: 484px;
  }

  .div-cards::-webkit-scrollbar {
    height: 6px;
    width: 6px;
  }
  .div-cards::-webkit-scrollbar-thumb {
    background: #ec6e74;
    border-radius: 5px;
  }

  .div-btn-pages {
    display: flex;
    justify-content: center;
  }
`;
