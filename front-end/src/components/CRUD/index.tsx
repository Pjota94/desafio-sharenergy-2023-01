import { Container } from "./styles";
import { BiPlus } from "react-icons/bi";
import CardUser from "../Global/CardUser";
import CardCrud from "../Global/CardCrud";
import { useContext } from "react";
import { AuthContext } from "../../context/UserContext";
import ModalCreate from "../ModalCreate";
import ModalEdit from "../ModalEdit";

const Crud = () => {
  const { isModalCreate, setModalCreate, isModalEdit, setModalEdit } =
    useContext(AuthContext);

  return (
    <>
      <Container>
        <div className="div-btn">
          <button className="btn-create">
            <BiPlus />
          </button>
        </div>
        <div className="box-cards">
          <CardCrud />
          <CardCrud />
          <CardCrud />
          <CardCrud />
          {/* <CardCrud />
        <CardCrud /> */}
        </div>
      </Container>
      {isModalCreate && <ModalCreate />}
      {isModalEdit && <ModalEdit />}
    </>
  );
};

export default Crud;
