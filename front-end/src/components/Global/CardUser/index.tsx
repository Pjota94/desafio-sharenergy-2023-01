import { Container } from "./styles";
import { ICardUSer } from "../../../interfaces";

const CardUser = ({ dob, email, name, login, picture }: ICardUSer) => {
  return (
    <Container>
      <img src={picture} alt="" />
      <div className="div-card-one">
        <p className="text-name">
          Name: <span className="span-name">{name}</span>
        </p>
        <p className="text-email">
          Email: <span className="span-email">{email}</span>
        </p>
      </div>
      <div className="div-card-second">
        <p className="text-username">
          Username: <span className="span-username">{login}</span>
        </p>
        <p className="text-age">
          Age: <span className="span-age">{dob}</span>
        </p>
      </div>
    </Container>
  );
};

export default CardUser;
