import { useReducer, createContext } from 'react';
import { AUTHENTICATED, CURRENT_USER, LOGIN, LOGOUT, KERANJANG } from './ContextConsts';
import { useEffect } from 'react';

export const AuthContext = createContext();

export const authInitialState = {
  isAuthenticated: false,
  user: null,
};

export const authReducer = (state, action) => {
  switch (action.type) {
    case LOGIN:
      localStorage.setItem(CURRENT_USER, JSON.stringify(action.payload));
      localStorage.setItem(AUTHENTICATED, true);
      return {
        isAuthenticated: true,
        user: action.payload,
      };
    case LOGOUT:
      localStorage.removeItem(CURRENT_USER);
      localStorage.removeItem(KERANJANG);
      localStorage.setItem(AUTHENTICATED, false);
      return {
        isAuthenticated: false,
        user: null,
      };
    default:
      return state;
  }
};

const AuthContextProvider = (props) => {
  const [auth, dispatch] = useReducer(authReducer, authInitialState);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem(CURRENT_USER));
    const isAuthenticated = JSON.parse(localStorage.getItem(AUTHENTICATED));
    if (isAuthenticated) {
      dispatch({
        type: LOGIN,
        payload: user,
      });
    }

    if (!isAuthenticated) {
      dispatch({
        type: LOGOUT,
        payload: null,
      });
    }
  }, []);
  return (
    <AuthContext.Provider
      value={{
        auth,
        dispatch,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
