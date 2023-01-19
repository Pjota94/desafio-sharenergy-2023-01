import { useContext } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { MdClose } from "react-icons/md";
import { AuthContext } from "../../context/UserContext";
import { ICardCrud } from "../../interfaces";
import api from "../../services/api";
import { Container } from "./styles";

const ModalEdit = () => {
  const { closeModalUpdate, idCard, setUserCrud, userCrud } =
    useContext(AuthContext);

  const { register, handleSubmit } = useForm<ICardCrud>();

  const updateUser = async (data: ICardCrud) => {
    try {
      const { data: newData } = await api.put(`api/clients/${idCard}`, data);
      setUserCrud([newData, ...userCrud]);
      toast.success("Successfully updated!");
      closeModalUpdate();
    } catch (error) {
      console.log(error);
      toast.error("Update failed!");
    }
  };

  return (
    <Container>
      <div className="div-card-create">
        <div className="div-text-close">
          <button className="btn-close" onClick={closeModalUpdate}>
            <MdClose />
          </button>
        </div>
        <p>Update</p>
        <form onSubmit={handleSubmit(updateUser)}>
          <label className="lb-name">Nome</label>
          <input type="text" {...register("name")} required />
          <label className="lb-email">Email</label>
          <input type="text" {...register("email")} required />
          <label className="lb-tel">Telefone</label>
          <input type="text" {...register("telephone")} required />
          <label className="lb-address">Endereço</label>
          <input type="text" {...register("address")} required />
          <label className="lb-cpf">Cpf</label>
          <input type="text" {...register("cpf")} required />
          <button className="btn-add" type="submit">
            Edit
          </button>
        </form>
      </div>
    </Container>
  );
};

export default ModalEdit;
