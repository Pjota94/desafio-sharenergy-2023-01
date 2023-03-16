import { useContext } from "react";
import Menu from "../../components/Menu";
import Navigation from "../../components/Navigation";
import RandomCats from "../../components/RandomCats";
import RandomDogs from "../../components/RandomDogs";
import RandomUsers from "../../components/RandomUsers";
import { AuthContext } from "../../context/UserContext";
import { Container } from "./styles";
import "animate.css";

const Dashboard = () => {
  const { pageDash } = useContext(AuthContext);

  return (
    <>
      <Container>
        <Navigation />
        <Menu />
        {pageDash === "RandomUser" ? <RandomUsers /> : <></>}
        {pageDash === "RandomCat" ? <RandomCats /> : <></>}
        {pageDash === "RandomDog" ? <RandomDogs /> : <></>}
      </Container>
    </>
  );
};

export default Dashboard;
