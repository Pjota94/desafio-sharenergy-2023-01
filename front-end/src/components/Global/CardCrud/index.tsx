import { Container } from "./styles";
import Face from "../../../assets/19.jpg";
import { MdEdit } from "react-icons/md";
import { FaTrash } from "react-icons/fa";

const CardCrud = () => {
  return (
    <Container>
      <img src={Face} alt="" />
      <div className="div-card-one">
        <p className="text-name">
          Name: <span className="span-name">Ana Julia de Sousa Paiva</span>
        </p>
        <p className="text-email">
          Email: <span className="span-email">anajulia@gmail.com</span>
        </p>
      </div>
      <div className="div-card-second">
        <p className="text-username">
          Username: <span className="span-username">aninha</span>
        </p>
        <p className="text-age">
          Age: <span className="span-age">24</span>
        </p>
      </div>
      <div className="card-btns">
        <button>
          <MdEdit />
        </button>
        <button>
          <FaTrash />
        </button>
      </div>
    </Container>
  );
};

export default CardCrud;
