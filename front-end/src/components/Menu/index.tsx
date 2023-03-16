import { Container } from "./styles";
import { HiMenu } from "react-icons/hi";
import { useState } from "react";
import Sidebar from "../Sidebar";

const Menu = () => {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => {
    setSidebar(!sidebar);
  };

  return (
    <Container>
      <HiMenu onClick={showSidebar} />
      {sidebar && <Sidebar active={setSidebar} />}
    </Container>
  );
};

export default Menu;
