import { Container } from "./styles";
import { MdClose } from "react-icons/md";
import { useContext, useEffect } from "react";
import { AuthContext } from "../../context/UserContext";
import { useForm } from "react-hook-form";
import { ICardCrud } from "../../interfaces";
import api from "../../services/api";
import { toast } from "react-hot-toast";

const ModalCreate = () => {
  const { closeModalCreate, setUserCrud, userCrud } = useContext(AuthContext);
  const { register, handleSubmit } = useForm<ICardCrud>();

  const createUser = async (data: ICardCrud) => {
    try {
      const { data: newData } = await api.post("api/clients", data);
      setUserCrud([newData, ...userCrud]);
      closeModalCreate();
      toast.success("Successfully created!");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Container>
      <div className="div-card-create">
        <div className="div-text-close">
          <button className="btn-close" onClick={closeModalCreate}>
            <MdClose />
          </button>
        </div>
        <p>Create</p>
        <form onSubmit={handleSubmit(createUser)}>
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
            Add
          </button>
        </form>
      </div>
    </Container>
  );
};

export default ModalCreate;
