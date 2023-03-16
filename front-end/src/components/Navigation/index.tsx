import Logo from "../Global/Logo";
import { Container } from "./styles";
import { AiOutlineUser } from "react-icons/ai";
import { FaCat } from "react-icons/fa";
import { FaDog } from "react-icons/fa";
import { IoIosCreate } from "react-icons/io";
import { useContext } from "react";
import { AuthContext } from "../../context/UserContext";

const Navigation = () => {
  const { setPageDash } = useContext(AuthContext);

  const btnRandomUser = () => {
    setPageDash("RandomUser");
  };

  const btnRandomCat = () => {
    setPageDash("RandomCat");
  };

  const btnRandomDog = () => {
    setPageDash("RandomDog");
  };

  return (
    <Container>
      <Logo />
      <div className="btns-nav">
        <button className="btn-user" onClick={btnRandomUser}>
          <AiOutlineUser />
          <p className="text-btn-user">Random User</p>
        </button>
        <button className="btn-cat" onClick={btnRandomCat}>
          <FaCat />
          <p className="text-btn-cat">Random Cat</p>
        </button>
        <button className="btn-dog" onClick={btnRandomDog}>
          <FaDog />
          <p className="text-btn-dog">Random Dog</p>
        </button>
      </div>
    </Container>
  );
};

export default Navigation;
