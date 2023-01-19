import styled from "styled-components";

export const Container = styled.div`
  display: none;
  background-color: #fcf7f7;

  > svg {
    font-size: 35px;
    color: #ec6e74;
    margin-left: 7px;
    margin-top: 13px;
    cursor: pointer;
  }

  > svg:hover {
    color: #f0464e;
  }

  @media (max-width: 800px) {
    display: block;
  }
`;
