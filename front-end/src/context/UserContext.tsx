import { createContext, useState } from "react";
import { IProviderProps, IValuesProps } from "../interfaces";

export const AuthContext = createContext<IValuesProps>({} as IValuesProps);

const UserContext = ({ children }: IProviderProps) => {
  const [isModalCreate, setModalCreate] = useState<boolean>(false);
  const [isModalEdit, setModalEdit] = useState<boolean>(false);
  const [pageDash, setPageDash] = useState<string>("RandomUser");
  const [inputName, setInputName] = useState<string>("");

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
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default UserContext;
