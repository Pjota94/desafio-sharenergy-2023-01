import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  button {
    background: #ec6e74;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 8px;
    border: none;
    width: 192px;
    height: 46px;
    font-family: "Lexend";
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 25px;
    color: #fcf7f7;
  }

  button:hover {
    -webkit-transform: scale(1.5);
    -ms-transform: scale(1.5);
    transform: scale(1.2);
    transition: 300ms linear;
  }
`;
