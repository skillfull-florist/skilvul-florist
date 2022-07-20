import { useReducer, createContext } from 'react';
import {
  KERANJANG,
  ADD_KERANJANG,
  ADD_NEW_PRODUCT,
  ADD_PRODUCT,
  DELETE_PRODUCT,
} from './ContextConsts';
import { useEffect } from 'react';

export const KeranjangContext = createContext();

/* id: '', // id keranjang
  idUser: 'anon', // id user pemilik keranjang
  data: [
    // data produk di keranjang
    {
      idProduk: '', // id produk
      nama: '', // nama produk
      gambar: '', // url gambar
      jumlah: '', // jumlah produk
      harga: '', // harga produk
      tipe: '', // tipe produk, buket / tanamanhias
    },
  ], */
export const keranjangInitialState = {
  id: '',
  idUser: 'anon',
  data: [],
};

export const keranjangReducer = (state, action) => {
  switch (action.type) {
    case ADD_KERANJANG:
      return {
        ...action.payload,
      };
    case ADD_NEW_PRODUCT:
      const productFound = state.data.filter((item) => item.idProduk === action.payload.idProduk);

      if (productFound.length === 0) {
        const newKeranjang = {
          ...state,
          data: [
            ...state.data,
            {
              ...action.payload,
            },
          ],
        };
        localStorage.setItem(KERANJANG, JSON.stringify(newKeranjang));
        return { ...newKeranjang };
      }

      return {
        ...state,
      };
    case ADD_PRODUCT:
      console.log(state);
      console.log(action);
      return {
        ...state,
      };
    default:
      return state;
  }
};

const KeranjangContextProvider = (props) => {
  const [keranjang, dispatch] = useReducer(keranjangReducer, keranjangInitialState);

  useEffect(() => {
    const keranjangLocal = JSON.parse(localStorage.getItem(KERANJANG));

    if (keranjangLocal !== null) {
      dispatch({
        type: ADD_KERANJANG,
        payload: keranjangLocal,
      });
    }
  }, []);
  return (
    <KeranjangContext.Provider
      value={{
        keranjang,
        dispatch,
      }}
    >
      {props.children}
    </KeranjangContext.Provider>
  );
};

export default KeranjangContextProvider;
