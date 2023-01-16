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
}
