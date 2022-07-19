import { useEffect, useReducer, createContext } from 'react';
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
import * as Helper from './../helpers/KeranjangHelper';

export const KeranjangContext = createContext();

/* id: '', // id keranjang
  idUser: 'anon', // id user pemilik keranjang
  remainingProducts: [],
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
      const productFound = state.data.filter(
        (item) => item.idProduk === action.payload.idProduk && item.tipe === action.payload.tipe,
      );

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
            if (item.idProduk === action.payload.idProduk && item.tipe === action.payload.tipe) {
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

          Helper.putKeranjangById(newKeranjang.id, newKeranjang)
            .then((data) => {
              const newKeranjangFromApi = data;
              localStorage.setItem(KERANJANG, JSON.stringify(newKeranjangFromApi));
            })
            .catch((err) => {
              // keranjang tidak ditemukan
              console.error(err);
            });

          return newKeranjang;
        })(),
      };
    case DECREASE_PRODUCT:
      return {
        ...(() => {
          const newProductData = state.data.map((item) => {
            if (item.idProduk === action.payload.idProduk && item.tipe === action.payload.tipe) {
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

          Helper.putKeranjangById(newKeranjang.id, newKeranjang)
            .then((data) => {
              const newKeranjangFromApi = data;
              localStorage.setItem(KERANJANG, JSON.stringify(newKeranjangFromApi));
            })
            .catch((err) => {
              // keranjang tidak ditemukan
              console.error(err);
            });

          return newKeranjang;
        })(),
      };
    case SET_PRODUCT_COUNT:
      return {
        ...(() => {
          const newProductData = state.data.map((item) => {
            if (item.idProduk === action.payload.idProduk && item.tipe === action.payload.tipe) {
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
    const isAuthenticated = JSON.parse(localStorage.getItem(AUTHENTICATED));
    if (isAuthenticated) {
      const user = JSON.parse(localStorage.getItem(CURRENT_USER));
      Helper.getKeranjangByUserId(user.id)
        .then((data) => {
          const keranjangFromApi = data;
          localStorage.setItem(KERANJANG, JSON.stringify(keranjangFromApi));

          dispatch({
            type: ADD_KERANJANG,
            payload: keranjangFromApi,
          });
        })
        .catch((err) => {
          // keranjang tidak ditemukan
          if (err.response.status === 500) {
            const keranjangLocalToApi = JSON.parse(localStorage.getItem(KERANJANG));

            if (keranjangLocalToApi !== null) {
              keranjangLocalToApi.idUser = user.id;
              Helper.postKeranjang(keranjangLocalToApi).then((data) => {
                localStorage.setItem(KERANJANG, JSON.stringify(data));
                dispatch({
                  type: ADD_KERANJANG,
                  payload: data,
                });
              });
            }
          }
        });
    } else {
      const keranjangLocal = JSON.parse(localStorage.getItem(KERANJANG));

      if (keranjangLocal !== null) {
        dispatch({
          type: ADD_KERANJANG,
          payload: keranjangLocal,
        });
      }
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
