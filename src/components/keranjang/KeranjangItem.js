import { useContext, useState, useEffect } from 'react';
import { Button } from 'react-bootstrap';
import Counter from './Counter';
import { KeranjangContext } from './../../contexts/KeranjangContext';
import {
  INCREASE_PRODUCT,
  DECREASE_PRODUCT,
  SET_PRODUCT_COUNT,
  DELETE_PRODUCT,
} from './../../contexts/ContextConsts';

const KeranjangItem = ({ produk }) => {
  const { keranjang, dispatch } = useContext(KeranjangContext);
  const [jumlah, setJumlah] = useState(0);

  useEffect(() => {
    const selectedProduk = keranjang.data.filter(
      (item) => item.idProduk === produk.idProduk && item.tipe === produk.tipe,
    );
    if (selectedProduk.length === 1) {
      setJumlah(selectedProduk[0].jumlah);
    }
  }, [keranjang.data, produk.idProduk, produk.tipe]);

  const handleIncrement = () => {
    setJumlah(jumlah + 1);
    dispatch({
      type: INCREASE_PRODUCT,
      payload: produk,
    });
  };

  const handleDecrement = () => {
    if (jumlah > 1) {
      setJumlah(jumlah - 1);
      dispatch({
        type: DECREASE_PRODUCT,
        payload: produk,
      });
    }
  };

  const handelChange = (ev) => {
    const newJumlah = parseInt(ev.target.value);
    if (newJumlah > 0) {
      if (jumlah !== newJumlah) {
        setJumlah(newJumlah);
        dispatch({
          type: SET_PRODUCT_COUNT,
          payload: {
            ...produk,
            jumlah: newJumlah,
          },
        });
      }
    }
  };

  const handleDeleteProduct = () => {
    if (window.confirm('Hapus produk ini dari keranjang?') === true) {
      dispatch({
        type: DELETE_PRODUCT,
        payload: produk,
      });
    }
  };

  return (
    <>
      <tr>
        <td className='text-center'>
          <img className='gambar-produk' src={produk.gambar} alt={produk.nama} />
        </td>
        <td className='text-start'>
          <h6>{produk.nama}</h6>
          <small>{produk.jumlah} buah</small>
        </td>
        <td className='text-end'>Rp {produk.harga}</td>
        <td>
          <Counter
            handleIncrement={handleIncrement}
            handleDecrement={handleDecrement}
            handelChange={handelChange}
            jumlah={jumlah}
          />
        </td>
        <td className='text-end'>Rp {produk.harga * produk.jumlah}</td>
        <td>
          &nbsp;
          <Button href='#' variant='danger' onClick={handleDeleteProduct}>
            Hapus
          </Button>
        </td>
      </tr>
    </>
  );
};

export default KeranjangItem;
