import { Container } from "./styles";
import Face from "../../../assets/19.jpg";
import { MdEdit } from "react-icons/md";
import { FaTrash } from "react-icons/fa";
import { ICardCrud } from "../../../interfaces";
import { useContext } from "react";
import { AuthContext } from "../../../context/UserContext";
import api from "../../../services/api";
import { toast } from "react-hot-toast";

const CardCrud = ({ name, email, address, telephone, _id }: ICardCrud) => {
  const { openModalUpdate, setIdCard, idCard } = useContext(AuthContext);

  const openModal = (event: any) => {
    setIdCard(event.currentTarget.id);
    openModalUpdate();
  };

  const deleteUser = async (event: any) => {
    const id = event.currentTarget.id;

    try {
      await api.delete(`api/clients/${id}`);
      toast.success("Successfully deleted!");
    } catch (error) {
      console.log(error);
      toast.error("Failed to delete!");
    }
  };

  return (
    <Container>
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
          Telefone: <span className="span-username">{telephone}</span>
        </p>
        <p className="text-age">
          Endereço: <span className="span-age">{address}</span>
        </p>
      </div>
      <div className="card-btns">
        <button onClick={openModal} id={_id}>
          <MdEdit />
        </button>
        <button onClick={deleteUser} id={_id}>
          <FaTrash />
        </button>
      </div>
    </Container>
  );
};

export default CardCrud;
