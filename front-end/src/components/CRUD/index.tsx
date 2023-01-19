import { Container } from "./styles";
import { BiPlus } from "react-icons/bi";
import CardCrud from "../Global/CardCrud";
import { useContext } from "react";
import { AuthContext } from "../../context/UserContext";
import ModalCreate from "../ModalCreate";
import ModalEdit from "../ModalEdit";

const Crud = () => {
  const {
    isModalCreate,
    setModalCreate,
    isModalEdit,
    setModalEdit,
    setUserCrud,
    userCrud,
    openModalCreate,
  } = useContext(AuthContext);

  return (
    <>
      <Container>
        <div className="div-btn">
          <button className="btn-create" onClick={openModalCreate}>
            <BiPlus />
          </button>
        </div>
        <div className="box-cards">
          {userCrud.map((elem, index) => (
            <CardCrud
              key={index}
              name={elem.name}
              email={elem.email}
              telephone={elem.telephone}
              address={elem.address}
              _id={elem._id}
            />
          ))}
        </div>
      </Container>
      {isModalCreate && <ModalCreate />}
      {isModalEdit && <ModalEdit />}
    </>
  );
};

export default Crud;
