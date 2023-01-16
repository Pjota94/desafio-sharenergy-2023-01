import Input from "../Global/Input";
import { Container } from "./styles";
import { FiLogOut } from "react-icons/fi";
import CardUser from "../Global/CardUser";
import { useContext, useEffect, useState } from "react";
import { ICardUSer } from "../../interfaces";
import { AuthContext } from "../../context/UserContext";

const RandomUsers = () => {
  const [usersList, setUsersList] = useState<ICardUSer[]>([]);
  const [userFilter, setUserFilter] = useState<ICardUSer[]>([]);
  const [page, setPage] = useState(1);
  const { inputName, setInputName } = useContext(AuthContext);

  const changePage1 = () => {
    setPage(1);
  };

  const changePage2 = () => {
    setPage(2);
  };

  const changePage3 = () => {
    setPage(3);
  };

  useEffect(() => {
    fetch(`https://randomuser.me/api/?page={page}&results=4`)
      .then((response) => response.json())
      .then((response) => {
        setUsersList(response.results);
        setUserFilter(response.results);
      })
      .catch((err) => console.log(err));
  }, [page]);

  // const filtroNome = userFilter.filter(
  //   (elem) =>
  //     inputName.toLocaleLowerCase() === elem.name.first.toLocaleLowerCase().includes()
  // );
  // console.log(filtroNome);
  // useEffect(() => {
  //   setUserFilter(filtroNome);
  // }, []);

  return (
    <Container>
      <div className="div-search-logout">
        <Input placeholder={"Search"} />
        <button>
          <FiLogOut />
        </button>
      </div>
      <div className="div-cards">
        {usersList
          .filter((elem) =>
            elem.name.first.toLowerCase().includes(inputName.toLowerCase())
          )
          .map((elem, index) => (
            <CardUser
              picture={elem.picture.large}
              dob={elem.dob.age}
              email={elem.email}
              name={elem.name.first}
              login={elem.login.username}
              key={index}
            />
          ))}
      </div>
      <div className="div-btn-pages">
        <button onClick={changePage1}>1</button>
        <button onClick={changePage2}>2</button>
        <button onClick={changePage3}>3</button>
      </div>
    </Container>
  );
};

export default RandomUsers;
