import mockapi from './../apis/mockapi2';

/*{
    createdAt: "",
    idKeranjang: "",
    idUser: "",
    data: [
      {
        idProduk: '', // id produk
        nama: '', // nama produk
        gambar: '', // url gambar
        jumlah: '', // jumlah produk
        harga: '', // harga produk
        tipe: '', // tipe produk, buket / tanamanhias
        status: '', // diproses, dikirim
        pengiriman: []
      }
    ],
    id: ""
  }
*/

export const postTransaksi = (keranjang) => {
  const newData = keranjang.data.map((item) => {
    return {
      idProduk: item.idProduk,
      nama: item.nama,
      gambar: item.gambar,
      jumlah: item.jumlah,
      harga: item.harga,
      tipe: item.tipe,
      status: 'Diproses',
      pengiriman: [
        {
          waktu: new Date().toISOString(),
          status: 'Diproses',
        },
      ],
    };
  });
  const payload = {
    createdAt: new Date().toISOString(),
    idKeranjang: keranjang.id,
    idUser: keranjang.idUser,
    data: newData,
    id: '',
  };
  return mockapi.post(`/transaksi`, payload).then((res) => res.data);
};

export const getTransaksiByUserId = async (userId) => {
  const res = await mockapi.get('/transaksi');
  const transaksi = res.data.filter((item) => `${item.idUser}` === `${userId}`);
  if (transaksi.length > 0) {
    return transaksi[0];
  }
  throw new Error('Transaksi tidak ditemukan');
};
