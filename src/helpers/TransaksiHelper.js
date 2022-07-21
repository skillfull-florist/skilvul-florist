import mockapi from './../apis/mockapi2';

export const postTransaksi = (keranjang) => {
  const newData = keranjang.data.map((item) => {
    return {
      idProduk: item.idProduk,
      nama: item.nama,
      gambar: item.gambar,
      jumlah: item.jumlah,
      harga: item.harga,
      tipe: item.tipe,
    };
  });
  const payload = {
    createdAt: new Date().toISOString(),
    idKeranjang: keranjang.id,
    idUser: keranjang.idUser,
    data: newData,
    id: '',
    status: 'Diproses',
    pengiriman: [
      {
        waktu: new Date().toISOString(),
        status: 'Diproses',
      },
    ],
  };
  return mockapi.post(`/transaksi`, payload).then((res) => res.data);
};

export const getTransaksiByUserId = async (userId, sort = null) => {
  const res = await mockapi.get('/transaksi');
  const transaksi = res.data.filter((item) => `${item.idUser}` === `${userId}`);
  if (transaksi.length > 0) {
    if (sort !== null) {
      return transaksi.sort(sort);
    }
    return transaksi;
  }
  throw new Error('Transaksi tidak ditemukan');
};
