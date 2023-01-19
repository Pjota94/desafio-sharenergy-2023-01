import { Container } from "./styles";
import { useState } from "react";
import { apiDogs } from "../../services/api";

const RandomDogs = () => {
  const [imgDog, setImgDog] = useState(
    "https://random.dog/18852d7b-2501-4edb-ad21-fe46c12cf65b.jpeg"
  );

  const refresh = async () => {
    const response = await apiDogs.get<any>("/woof.json?filter=mp4,gif");
    setImgDog(response.data.url);
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
