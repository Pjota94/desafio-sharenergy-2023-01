import styled from "styled-components";

export const Container = styled.div`
  width: 690px;
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
    margin-left: -22px;
  }

  .div-card-one {
    display: flex;
    flex-direction: column;
    margin-left: -33px;
    width: 310px;
  }

  .div-card-second {
    display: flex;
    flex-direction: column;
    margin-left: -39px;
    width: 230px;
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

  @media (max-width: 980px) {
    width: 535px;

    .div-card-one {
      width: 226px;
    }

    .div-card-second {
      width: 178px;
    }

    img {
      width: 55px;
      height: 55px;
    }

    .text-name {
      font-size: 13px;
    }

    .span-name {
      font-size: 13px;
    }

    .text-email {
      font-size: 13px;
    }

    .span-email {
      font-size: 13px;
    }

    .text-username {
      font-size: 13px;
    }

    .span-username {
      font-size: 13px;
    }

    .text-age {
      font-size: 13px;
    }

    .span-age {
      font-size: 13px;
    }
  }

  @media (max-width: 590px) {
    width: 428px;

    .div-card-one {
      width: 181px;
    }

    .div-card-second {
      width: 124px;
    }

    img {
      width: 45px;
      height: 45px;
    }

    .text-name {
      font-size: 10px;
    }

    .span-name {
      font-size: 10px;
    }

    .text-email {
      font-size: 10px;
    }

    .span-email {
      font-size: 10px;
    }

    .text-username {
      font-size: 10px;
    }

    .span-username {
      font-size: 10px;
    }

    .text-age {
      font-size: 10px;
    }

    .span-age {
      font-size: 10px;
    }
  }

  @media (max-width: 484px) {
    width: 232px;
    height: 96px;
    flex-direction: column;

    .div-card-one {
      width: 183px;
    }

    .div-card-second {
      width: 176px;
    }

    img {
      display: none;
    }
  }
`;
