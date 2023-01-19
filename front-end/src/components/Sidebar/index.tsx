import { Container } from "./styles";
import { MdClose } from "react-icons/md";
import { AiOutlineUser } from "react-icons/ai";
import { FaCat } from "react-icons/fa";
import { FaDog } from "react-icons/fa";
import { IoIosCreate } from "react-icons/io";
import "animate.css";
import { useContext } from "react";
import { AuthContext } from "../../context/UserContext";

const Sidebar = ({ active, sidebar }: any) => {
  const closeSidebar = () => {
    active(false);
  };

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

  const btnCrud = () => {
    setPageDash("Crud");
  };

  return (
    <Container className="animate__animated animate__fadeInLeft">
      <MdClose onClick={closeSidebar} />
      <div className="btns-sidebar">
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
        <button className="btn-crud" onClick={btnCrud}>
          <IoIosCreate />
          <p className="text-btn-crud">CRUD</p>
        </button>
      </div>
    </Container>
  );
};

export default Sidebar;
