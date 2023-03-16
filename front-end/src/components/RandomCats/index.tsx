import Input from "../Global/Input";
import { Container } from "./styles";
import { FiLogOut } from "react-icons/fi";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../context/UserContext";
import CatInit from "../../assets/catInit.png";

const RandomCats = () => {
  const { inputName, logout } = useContext(AuthContext);
  const [imgCat, setImgCat] = useState("https://http.cat/200");

  useEffect(() => {
    setImgCat(`https://http.cat/${inputName}`);
  }, [inputName]);

  return (
    <Container>
      <div className="div-search">
        <Input placeholder={"Status Code"} />
        <button onClick={logout}>
          <FiLogOut />
        </button>
      </div>
      {inputName === "" ? (
        <div className="div-cat-init">
          <img className="img-cat-init" src={CatInit} alt="" />
        </div>
      ) : (
        <div className="div-cat">
          <img className="img-cat-face" src={imgCat} alt="" />
        </div>
      )}
    </Container>
  );
};

export default RandomCats;
