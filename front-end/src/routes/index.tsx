import { Route, Routes } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import Initial from "../pages/Initial";

const RoutesMain = () => {
  return (
    <Routes>
      <Route path="/home" element={<Dashboard />} />
      <Route path="/" element={<Initial />} />
    </Routes>
  );
};

export default RoutesMain;
