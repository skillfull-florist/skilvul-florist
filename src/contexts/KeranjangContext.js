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
  DELETE_KERANJANG,
  DELETE_KERANJANG_LOCAL,
} from './ContextConsts';
import * as Helper from './../helpers/KeranjangHelper';

export const KeranjangContext = createContext();

/* id: '', // id keranjang
  idUser: '', // id user pemilik keranjang
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
              localStorage.setItem(KERANJANG, JSON.stringify(data));
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
              localStorage.setItem(KERANJANG, JSON.stringify(data));
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

          Helper.putKeranjangById(newKeranjang.id, newKeranjang)
            .then((data) => {
              localStorage.setItem(KERANJANG, JSON.stringify(data));
            })
            .catch((err) => {
              // keranjang tidak ditemukan
              console.error(err);
            });

          return newKeranjang;
        })(),
      };
    case DELETE_PRODUCT:
      return {
        ...(() => {
          const filteredProductData = state.data.filter(
            (item) => item.idProduk !== action.payload.idProduk,
          );

          if (filteredProductData.length > 0) {
            const newKeranjang = {
              ...state,
              data: filteredProductData,
            };

            Helper.putKeranjangById(newKeranjang.id, newKeranjang)
              .then((data) => {
                localStorage.setItem(KERANJANG, JSON.stringify(data));
              })
              .catch((err) => {
                // keranjang tidak ditemukan
                console.error(err);
              });

            localStorage.setItem(KERANJANG, JSON.stringify(newKeranjang));
            return newKeranjang;
          }
          return { ...state, data: [] };
        })(),
      };
    case DELETE_KERANJANG:
      return {
        ...(() => {
          console.log('delete');
          Helper.deleteKeranjangById(state.id)
            .then(() => {
              localStorage.removeItem(KERANJANG);
            })
            .catch((err) => {
              // keranjang tidak ditemukan
              console.error(err);
            });
          return { ...state, data: [] };
        })(),
      };
    case DELETE_KERANJANG_LOCAL:
      return {
        ...(() => {
          localStorage.removeItem(KERANJANG);
          return { ...state, data: [] };
        })(),
      };
    default:
      return state;
  }
};

export const validateKeranjangAPIByUserId = (id, dispatch, keranjang = null) => {
  Helper.getKeranjangByUserId(id)
    .then((data) => {
      const keranjangFromApi = data;
      console.log(data);
      localStorage.setItem(KERANJANG, JSON.stringify(keranjangFromApi));
      dispatch({
        type: ADD_KERANJANG,
        payload: keranjangFromApi,
      });
    })
    .catch((err) => {
      // keranjang tidak ditemukan
      const keranjangLocalToApi = JSON.parse(localStorage.getItem(KERANJANG));

      if (keranjangLocalToApi !== null) {
        keranjangLocalToApi.idUser = id;
        Helper.postKeranjang(keranjangLocalToApi).then((data) => {
          localStorage.setItem(KERANJANG, JSON.stringify(data));
          dispatch({
            type: ADD_KERANJANG,
            payload: data,
          });
        });
        return;
      }
      if (keranjangLocalToApi === null && keranjang !== null) {
        Helper.postKeranjang(keranjang).then((data) => {
          localStorage.setItem(KERANJANG, JSON.stringify(data));
          dispatch({
            type: ADD_KERANJANG,
            payload: data,
          });
        });
        return;
      }
      localStorage.removeItem(KERANJANG);
    });
};

const KeranjangContextProvider = (props) => {
  const [keranjang, dispatch] = useReducer(keranjangReducer, keranjangInitialState);

  useEffect(() => {
    const isAuthenticated = JSON.parse(localStorage.getItem(AUTHENTICATED));
    if (isAuthenticated) {
      const user = JSON.parse(localStorage.getItem(CURRENT_USER));
      validateKeranjangAPIByUserId(user.id, dispatch);
    } else {
      const keranjangLocal = JSON.parse(localStorage.getItem(KERANJANG));
      console.log(keranjangLocal);
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
