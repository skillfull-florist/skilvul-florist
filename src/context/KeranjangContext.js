import { useReducer, createContext } from 'react';
import {
  AUTHENTICATED,
  CURRENT_USER,
  KERANJANG,
  ADD_KERANJANG,
  ADD_NEW_PRODUCT,
  DELETE_PRODUCT,
  INCREASE_PRODUCT,
  DECREASE_PRODUCT,
  SET_PRODUCT_COUNT,
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
      sisa: '', // sisa produk
      harga: '', // harga produk
      tipe: '', // tipe produk, buket / tanamanhias
    },
  ], */
export const keranjangInitialState = {
  id: '',
  idUser: '',
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
        const user = JSON.parse(localStorage.getItem(CURRENT_USER));
        const isAuthenticated = JSON.parse(localStorage.getItem(AUTHENTICATED));

        const newKeranjang = {
          ...state,
          data: [
            ...state.data,
            {
              ...action.payload,
              jumlah: 1,
            },
          ],
        };

        if (isAuthenticated) {
          newKeranjang.idUser = user.id;
        }

        localStorage.setItem(KERANJANG, JSON.stringify(newKeranjang));
        return { ...newKeranjang };
      }

      return {
        ...state,
      };
    case INCREASE_PRODUCT:
      return {
        ...(() => {
          const newProductData = state.data.map((item) => {
            if (item.idProduk === action.payload.idProduk) {
              return {
                ...item,
                jumlah: item.jumlah + 1,
              };
            }
            return item;
          });
          const newKeranjang = {
            ...state,
            data: newProductData,
          };

          localStorage.setItem(KERANJANG, JSON.stringify(newKeranjang));
          return newKeranjang;
        })(),
      };
    case DECREASE_PRODUCT:
      return {
        ...(() => {
          const newProductData = state.data.map((item) => {
            if (item.idProduk === action.payload.idProduk) {
              if (item.jumlah > 1) {
                return {
                  ...item,
                  jumlah: item.jumlah - 1,
                };
              }
            }
            return item;
          });
          const newKeranjang = {
            ...state,
            data: newProductData,
          };

          localStorage.setItem(KERANJANG, JSON.stringify(newKeranjang));
          return newKeranjang;
        })(),
      };
    case SET_PRODUCT_COUNT:
      return {
        ...(() => {
          const newProductData = state.data.map((item) => {
            if (item.idProduk === action.payload.idProduk) {
              if (action.payload.jumlah > 0 && item.jumlah !== action.payload.jumlah) {
                return {
                  ...item,
                  jumlah: action.payload.jumlah,
                };
              }
            }
            return item;
          });
          const newKeranjang = {
            ...state,
            data: newProductData,
          };

          localStorage.setItem(KERANJANG, JSON.stringify(newKeranjang));
          return newKeranjang;
        })(),
      };
    case DELETE_PRODUCT:
      return {
        ...(() => {
          const filteredProductData = state.data.filter(
            (item) => item.idProduk !== action.payload.idProduk,
          );

          const newKeranjang = {
            ...state,
            data: filteredProductData,
          };

          localStorage.setItem(KERANJANG, JSON.stringify(newKeranjang));
          return newKeranjang;
        })(),
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
      const user = JSON.parse(localStorage.getItem(CURRENT_USER));
      const isAuthenticated = JSON.parse(localStorage.getItem(AUTHENTICATED));

      if (isAuthenticated) {
        keranjangLocal.idUser = user.id;
        localStorage.setItem(KERANJANG, JSON.stringify(keranjangLocal));
      }

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
