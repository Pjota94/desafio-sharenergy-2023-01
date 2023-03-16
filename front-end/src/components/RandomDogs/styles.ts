import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: #fcf7f7;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .div-dog {
    width: 643px;
    height: 459px;
    background: #ede8e8;
    border: 1px solid #142234;
    border-radius: 8px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .btn-refresh {
    width: 192px;
    height: 46px;
    background: #ec6e74;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 8px;
    margin-top: 51px;
    border: transparent;
    color: #fcf7f7;
  }

  .btn-refresh:hover {
    background: #cf2d35;
  }

  .img-dog {
    width: 433px;
    height: 398px;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
    border-radius: 8px;
  }

  @media (max-width: 924px) {
    .div-dog {
      width: 519px;
    }
  }

  @media (max-width: 600px) {
    .div-dog {
      width: 411px;
      height: 378px;
    }

    .img-dog {
      width: 349px;
      height: 314px;
    }
  }

  @media (max-width: 480px) {
    .div-dog {
      width: 291px;
      height: 284px;
    }

    .img-dog {
      width: 261px;
      height: 245px;
    }
  }
`;
