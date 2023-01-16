import { Container } from "./styles";
import { AiOutlineSearch } from "react-icons/ai";
import { IPlaceholder } from "../../../interfaces";
import { useContext } from "react";
import { AuthContext } from "../../../context/UserContext";

const Input = ({ placeholder }: IPlaceholder) => {
  const { inputName, setInputName } = useContext(AuthContext);

  return (
    <Container>
      <AiOutlineSearch />
      <input
        type="text"
        placeholder={placeholder}
        value={inputName}
        onChange={(event) => setInputName(event.target.value)}
      />
    </Container>
  );
};

export default Input;
