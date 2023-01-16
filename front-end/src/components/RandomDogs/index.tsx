import { Container } from "./styles";
import { useState } from "react";

const RandomDogs = () => {
  const [imgDog, setImgDog] = useState(
    "https://random.dog/18852d7b-2501-4edb-ad21-fe46c12cf65b.jpeg"
  );

  const refresh = () => {
    fetch("https://random.dog/woof.json")
      .then((response) => response.json())
      .then((response) => setImgDog(response.url))
      .catch((err) => console.log(err));
  };

  return (
    <Container>
      <div className="div-dog">
        <img className="img-dog" src={imgDog} alt="" />
      </div>
      <button onClick={refresh} className="btn-refresh">
        Refresh
      </button>
    </Container>
  );
};

export default RandomDogs;
