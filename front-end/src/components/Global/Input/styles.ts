import styled from "styled-components";

export const Container = styled.div`
  width: 233px;
  height: 48px;
  background: #fcf7f7;
  border: 1px solid #142234;
  border-radius: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #ec6e74;
  font-size: 20px;
  margin-top: 52px;
  margin-left: 58px;

  input {
    background-color: transparent;
    border: transparent;
    margin-left: 8px;
  }

  input::placeholder {
    font-style: normal;
    font-weight: 200;
    font-size: 16px;
    line-height: 20px;
    color: #142234;
  }

  @media (max-width: 484px) {
    width: 205px;
    height: 39px;
    margin-top: 50px;
    margin-left: 66px;

    input::placeholder {
      font-size: 13px;
    }
  }
`;
