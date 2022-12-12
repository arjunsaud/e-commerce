import { createContext, useState } from "react";

export const GlobalContext = createContext();

export const GlobalContextProvider = (props) => {
  const [userRole,setUserRole]=useState("")
  const [isLoggedIn,setIsLoggedIn]=useState(false)

  const loggedIn=()=>{
    setIsLoggedIn(!isLoggedIn)
  }
  const setUser=(role)=>{
    setUserRole(role)
  }

  return (
  <GlobalContext.Provider value={{isLoggedIn,loggedIn,setUser,userRole}}>
    {props.children}
  </GlobalContext.Provider>)
};
