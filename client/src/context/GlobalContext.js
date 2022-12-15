import { createContext, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { resetAuthDetails } from "../Slices/authSlice";

export const GlobalContext = createContext();

export const GlobalContextProvider = (props) => {
  const dispatch = useDispatch()

  const {role} = useSelector((state) => {
    return state.auth
  });

  const [search,setSearch]=useState()

  const setSearchQuery=(data)=>{
    setSearch(data)
  }

  const logout= () => {
    dispatch(resetAuthDetails())
  };

  return (
    <GlobalContext.Provider value={{search,setSearchQuery,role,logout }}>
      {props.children}
    </GlobalContext.Provider>
  );
};
