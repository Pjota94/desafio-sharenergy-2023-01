import styled from "styled-components";

export const Container = styled.div`
  background: #8acbf4;
  position: fixed;
  height: 100%;
  left: 0;
  top: 0;
  width: 265px;
  z-index: 1;
  border-radius: 0px 10px 10px 0px;

  > svg {
    font-size: 40px;
    color: #ec6e74;
    margin-left: 7px;
    margin-top: 13px;
    cursor: pointer;
  }

  > svg:hover {
    color: #f0464e;
  }

  .btns-sidebar {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8px;
    margin-top: 37px;
  }
  .btn-user {
    width: 221px;
    height: 47px;
    background: #8acbf4;
    border: transparent;
    border-radius: 25px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #ec6e74;
    font-size: 17px;
    gap: 5px;
  }

  .btn-user:hover {
    box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.25);
    background: #7bc0eb;
    color: #f0464e;
  }

  .text-btn-user {
    color: black;
    font-weight: 400;
    font-size: 16px;
    width: 105px;
  }

  .btn-cat {
    width: 221px;
    height: 47px;
    background: #8acbf4;
    border: transparent;
    border-radius: 25px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #ec6e74;
    font-size: 17px;
    gap: 5px;
  }

  .btn-cat:hover {
    box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.25);
    background: #7bc0eb;
    color: #f0464e;
  }

  .text-btn-cat {
    color: black;
    font-weight: 400;
    font-size: 16px;
    width: 105px;
  }

  .btn-dog {
    width: 221px;
    height: 47px;
    background: #8acbf4;
    border: transparent;
    border-radius: 25px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #ec6e74;
    font-size: 17px;
    gap: 5px;
  }

  .btn-dog:hover {
    box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.25);
    background: #7bc0eb;
    color: #f0464e;
  }

  .text-btn-dog {
    color: black;
    font-weight: 400;
    font-size: 16px;
    width: 105px;
  }

  .btn-crud {
    width: 221px;
    height: 47px;
    background: #8acbf4;
    border: transparent;
    border-radius: 25px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #ec6e74;
    font-size: 17px;
  }

  .btn-crud:hover {
    box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.25);
    background: #7bc0eb;
    color: #f0464e;
  }

  .text-btn-crud {
    color: black;
    font-weight: 400;
    font-size: 16px;
    width: 105px;
  }
`;
