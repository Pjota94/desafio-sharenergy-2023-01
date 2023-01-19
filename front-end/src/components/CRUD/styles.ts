import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: #fcf7f7;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .btn-create {
    width: 55px;
    height: 58px;
    color: #ec6e74;
    border: transparent;
    background-color: transparent;
    font-size: 56px;
    margin-left: -12px;
  }

  .btn-create:hover {
    color: #cf2d35;
  }

  .box-cards {
    width: 782px;
    height: 539px;
    background: #fcf7f7;
    border: 1px solid #142234;
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 50px;
    overflow: scroll;
  }

  .box-cards::-webkit-scrollbar {
    height: 6px;
    width: 6px;
  }
  .box-cards::-webkit-scrollbar-thumb {
    background: #ec6e74;
    border-radius: 5px;
  }

  .div-btn {
    width: 782px;
  }

  @media (max-width: 1064px) {
    .box-cards {
      width: 540px;
    }

    .div-btn {
      width: 540px;
    }
  }

  @media (max-width: 614px) {
    .box-cards {
      width: 312px;
    }
    .div-btn {
      width: 312px;
    }
  }
`;
