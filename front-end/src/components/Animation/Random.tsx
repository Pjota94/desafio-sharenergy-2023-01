import animation from "../../assets/lotties/Random.json";
import Lottie from "react-lottie";
import { Container } from "./styles";

const Random = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <Container>
      <Lottie options={defaultOptions} />
    </Container>
  );
};

export default Random;
