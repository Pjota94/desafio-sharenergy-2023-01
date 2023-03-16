import Input from "../Global/Input";
import { Container } from "./styles";
import { FiLogOut } from "react-icons/fi";
import CardUser from "../Global/CardUser";
import { useContext, useEffect, useState } from "react";
import { ICardUSer } from "../../interfaces";
import { AuthContext } from "../../context/UserContext";
import { MdNavigateNext } from "react-icons/md";
import { MdNavigateBefore } from "react-icons/md";

const RandomUsers = () => {
  const [usersList, setUsersList] = useState<ICardUSer[]>([]);
  const [page, setPage] = useState(1);

  const { inputName, logout } = useContext(AuthContext);

  const changePage1 = () => {
    if (page >= 1) {
      setPage(page - 1);
    }
  };

  const changePage2 = () => {
    setPage(page + 1);
  };

  useEffect(() => {
    fetch(`https://randomuser.me/api/?page={page}&results=4`)
      .then((response) => response.json())
      .then((response) => {
        setUsersList(response.results);
      })
      .catch((err) => console.log(err));
  }, [page]);

  return (
    <Container>
      <div className="div-search-logout">
        <Input placeholder={"Search"} />
        <button onClick={logout}>
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
        <button className="before" onClick={changePage1}>
          <MdNavigateBefore />
        </button>
        <button className="next" onClick={changePage2}>
          <MdNavigateNext />
        </button>
      </div>
    </Container>
  );
};

export default RandomUsers;
