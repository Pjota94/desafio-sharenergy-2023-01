import { Dispatch, ReactNode, SetStateAction } from "react";

//Input

export interface IPlaceholder {
  placeholder: string;
}

//CardUser

export interface ICardUSer {
  name: any;
  email: string;
  login: any;
  dob: any;
  picture: any;
}

//CardCrud

export interface ICardCrud {
  name: string;
  email: string;
  telephone: string;
  cpf?: string;
  address: string;
  _id: string;
}

//Login

export interface ILogin {
  username: string;
  password: string;
}

//Context - UserContext

export interface IProviderProps {
  children: ReactNode;
}

export interface IValuesProps {
  isModalCreate: boolean;
  setModalCreate: Dispatch<SetStateAction<boolean>>;
  isModalEdit: boolean;
  setModalEdit: Dispatch<SetStateAction<boolean>>;
  pageDash: string;
  setPageDash: Dispatch<SetStateAction<string>>;
  inputName: string;
  setInputName: Dispatch<SetStateAction<string>>;
  logout: () => void;
  userCrud: ICardCrud[];
  setUserCrud: Dispatch<SetStateAction<ICardCrud[]>>;
  openModalCreate: () => void;
  closeModalCreate: () => void;
  openModalUpdate: () => void;
  closeModalUpdate: () => void;
  idCard: string;
  setIdCard: Dispatch<SetStateAction<string>>;
}
