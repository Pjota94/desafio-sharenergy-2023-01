import { Container } from "./styles";
import logo from "../../../assets/logo.png";
import { useContext } from "react";
import { AuthContext } from "../../../context/UserContext";

const Logo = () => {
  const { logout } = useContext(AuthContext);
  return (
    <Container>
      <img onClick={logout} src={logo} alt="" />
    </Container>
  );
};

export default Logo;
