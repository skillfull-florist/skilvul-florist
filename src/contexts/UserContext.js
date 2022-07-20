import { useState, useEffect, createContext } from 'react';
import { CURRENT_USER } from './ContextConsts';

export const UserContext = createContext();

const UserContextProvider = (props) => {
  const [user, setUser] = useState({
    id: '',
    username: '',
    avatar: '',
    email: '',
    password: '',
  });

  useEffect(() => {
    let currentUser = null;
    const currentUserData = localStorage.getItem(CURRENT_USER);
    if (currentUserData !== 'undefined') {
      currentUser = JSON.parse(currentUserData);
    }
    if (currentUser !== null) {
      setUser(currentUser);
    }
  }, []);

  return <UserContext.Provider value={{ user }}>{props.children}</UserContext.Provider>;
};

export default UserContextProvider;
