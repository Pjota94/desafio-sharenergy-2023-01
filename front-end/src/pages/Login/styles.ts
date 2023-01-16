import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;

  .card {
    width: 411px;
    height: 418px;
    background: #fcf7f7;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 8px;
    margin-top: 50px;
  }

  p {
    font-weight: 500;
    color: #142234;
    font-size: 32px;
    line-height: 40px;
    text-align: center;
    margin-top: 20px;
    margin-bottom: 40px;
  }

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  label {
    font-weight: 500;
    font-size: 12px;
    line-height: 15px;
    color: #142234;
    margin-bottom: 8px;
    margin-left: -270px;
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

  button {
    background: #ec6e74;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 8px;
    width: 169px;
    height: 38px;
    font-weight: 500;
    font-size: 13px;
    line-height: 16px;
    color: #fcf7f7;
    border: transparent;
    margin-top: 13px;
  }

  button:hover {
    background-color: #cf2d35;
  }

  .div-checkbox {
    display: flex;
  }

  span {
    font-weight: 500;
    font-size: 12px;
    line-height: 15px;
    color: #142234;
    margin-left: -165px;
  }

  .ipt-checkbox {
    width: 15px;
    margin-left: 6px;
    margin-top: -13px;
  }
`;
