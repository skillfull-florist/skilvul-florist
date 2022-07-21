import React from 'react';

const HistoryItem = ({ pesanan }) => {
  return (
    <div className='d-flex p-2'>
      <img src={pesanan.gambar} alt='produk' width='48px' />
      <div className='ms-2 text-start'>
        <h5>{pesanan.nama}</h5>
        <p>Jumlah: {pesanan.jumlah}</p>
      </div>
    </div>
  );
};

export default HistoryItem;
