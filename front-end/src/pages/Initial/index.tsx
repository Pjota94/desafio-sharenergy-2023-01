import { useNavigate } from "react-router-dom";
import Random from "../../components/Animation/Random";
import { Container } from "./styles";

const Initial = () => {
  const navigate = useNavigate();

  return (
    <Container>
      <Random />
      <button onClick={() => navigate("/home")}>Randomize</button>
    </Container>
  );
};

export default Initial;
