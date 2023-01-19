import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  z-index: 1;
  position: fixed;
  background-color: rgba(89, 86, 86, 0.2);
  display: flex;
  justify-content: center;
  align-items: center;

  .div-card-create {
    width: 395px;
    height: 551px;
    background: #fcf7f7;
    border: 1px solid #142234;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 8px;
  }

  .div-text-close {
    text-align: end;
    margin-right: 9px;
  }

  p {
    font-style: normal;
    font-weight: 500;
    font-size: 32px;
    line-height: 40px;
    color: #142234;
    text-align: center;
  }

  .btn-close {
    color: #ec6e74;
    background-color: transparent;
    border: transparent;
    font-size: 46px;
  }

  .btn-close:hover {
    color: #cf2d35;
  }

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  input {
    width: 329px;
    height: 45px;
    background: #fcf7f7;
    border: 1px solid #142234;
    border-radius: 8px;
    margin-bottom: 8px;
    padding-left: 10px;
  }

  .btn-add {
    background: #ec6e74;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 8px;
    width: 169px;
    height: 38px;
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 25px;
    color: #fcf7f7;
    border: transparent;
    margin-top: 13px;
  }

  .btn-add:hover {
    background-color: #cf2d35;
  }

  .lb-name {
    font-weight: 500;
    font-size: 12px;
    line-height: 15px;
    color: #142234;
    margin-bottom: 8px;
    margin-left: -294px;
  }
  .lb-email {
    font-weight: 500;
    font-size: 12px;
    line-height: 15px;
    color: #142234;
    margin-bottom: 8px;
    margin-left: -294px;
  }
  .lb-tel {
    font-weight: 500;
    font-size: 12px;
    line-height: 15px;
    color: #142234;
    margin-bottom: 8px;
    margin-left: -279px;
  }
  .lb-address {
    font-weight: 500;
    font-size: 12px;
    line-height: 15px;
    color: #142234;
    margin-bottom: 8px;
    margin-left: -270px;
  }
  .lb-cpf {
    font-weight: 500;
    font-size: 12px;
    line-height: 15px;
    color: #142234;
    margin-bottom: 8px;
    margin-left: -308px;
  }

  @media (max-width: 430px) {
    .div-card-create {
      width: 327px;
    }

    input {
      width: 271px;
    }

    .lb-name {
      margin-left: -236px;
    }
    .lb-email {
      margin-left: -238px;
    }
    .lb-tel {
      margin-left: -222px;
    }
    .lb-address {
      margin-left: -217px;
    }
    .lb-cpf {
      margin-left: -252px;
    }
  }
`;
