import { createContext, useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { ICardCrud, IProviderProps, IValuesProps } from "../interfaces";
import api from "../services/api";

export const AuthContext = createContext<IValuesProps>({} as IValuesProps);

const UserContext = ({ children }: IProviderProps) => {
  const [isModalCreate, setModalCreate] = useState<boolean>(false);
  const [isModalEdit, setModalEdit] = useState<boolean>(false);
  const [pageDash, setPageDash] = useState<string>("RandomUser");
  const [inputName, setInputName] = useState<string>("");
  const [userCrud, setUserCrud] = useState<ICardCrud[]>([]);
  const [idCard, setIdCard] = useState("");

  useEffect(() => {
    const loadUser = async () => {
      try {
        const { data } = await api.get("/api/clients");
        setUserCrud(data);
      } catch (error) {
        console.log(error);
      }
    };

    loadUser();
  }, [userCrud]);

  const navigate = useNavigate();

  const logout = () => {
    navigate("/", { replace: true });
  };

  const openModalCreate = () => {
    setModalCreate(true);
  };

  const closeModalCreate = () => {
    setModalCreate(false);
  };

  const openModalUpdate = () => {
    setModalEdit(true);
  };

  const closeModalUpdate = () => {
    setModalEdit(false);
  };

  return (
    <AuthContext.Provider
      value={{
        isModalCreate,
        setModalCreate,
        isModalEdit,
        setModalEdit,
        pageDash,
        setPageDash,
        inputName,
        setInputName,
        logout,
        userCrud,
        setUserCrud,
        openModalCreate,
        closeModalCreate,
        openModalUpdate,
        closeModalUpdate,
        idCard,
        setIdCard,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default UserContext;
