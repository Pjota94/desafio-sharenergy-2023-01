import { Container } from "./styles";
import { MdClose } from "react-icons/md";

const ModalCreate = () => {
  return (
    <Container>
      <div className="div-card-create">
        <div className="div-text-close">
          <button className="btn-close">
            <MdClose />
          </button>
        </div>
        <p>Create</p>
        <form>
          <label className="lb-name">Nome</label>
          <input type="text" />
          <label className="lb-email">Email</label>
          <input type="text" />
          <label className="lb-tel">Telefone</label>
          <input type="text" />
          <label className="lb-address">Endereço</label>
          <input type="text" />
          <label className="lb-cpf">Cpf</label>
          <input type="text" />
          <button className="btn-add" type="submit">
            Add
          </button>
        </form>
      </div>
    </Container>
  );
};

export default ModalCreate;
