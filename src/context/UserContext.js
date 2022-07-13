import { useState, useEffect, createContext } from "react";

export const UserContext = createContext();

export const CURRENT_USER = "currentUser";

const UserContextProvider = (props) => {
  const [user, setUser] = useState({
    id: -1,
    username: "",
    avatar: "",
    email: "",
    password: "",
    isLogin: false,
  });

  useEffect(() => {
    const currentUser = JSON.parse(localStorage.getItem(CURRENT_USER));
    setUser(currentUser);
  }, []);

  return <UserContext.Provider value={{ user }}>{props.children}</UserContext.Provider>;
};

export default UserContextProvider;
