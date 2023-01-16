import styled from "styled-components";

export const Container = styled.div`
  width: 692px;
  height: 90px;
  background: #fcf7f7;
  border: 1px solid #142234;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  margin-bottom: 20px;
  padding: 5px;

  img {
    width: 69px;
    height: 67px;
    border: 1px solid #142234;
    border-radius: 100px;
  }

  .div-card-one {
    display: flex;
    flex-direction: column;
  }

  .div-card-second {
    display: flex;
    flex-direction: column;
  }

  .text-name {
    font-weight: 300;
    font-size: 16px;
    line-height: 20px;
  }

  .span-name {
    font-weight: 200;
    font-size: 16px;
    line-height: 20px;
  }

  .text-email {
    font-weight: 300;
    font-size: 16px;
    line-height: 20px;
  }

  .span-email {
    font-weight: 200;
    font-size: 16px;
    line-height: 20px;
  }

  .text-username {
    font-weight: 300;
    font-size: 16px;
    line-height: 20px;
  }

  .span-username {
    font-weight: 200;
    font-size: 16px;
    line-height: 20px;
  }

  .text-age {
    font-weight: 300;
    font-size: 16px;
    line-height: 20px;
  }

  .span-age {
    font-weight: 200;
    font-size: 16px;
    line-height: 20px;
  }

  button {
    width: 15px;
    height: 17px;
    color: #ec6e74;
    border: transparent;
    background-color: transparent;
    font-size: 20px;
    margin-right: 20px;
  }

  button:hover {
    color: #cf2d35;
  }
`;
