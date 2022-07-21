import mockapi from './../apis/mockapi';

export const postKeranjang = (payload) => {
  return mockapi.post(`/keranjang`, payload).then((res) => res.data);
};

export const putKeranjangById = (idKeranjang, prePayload) => {
  const { id, ...payload } = prePayload;
  return mockapi.put(`/keranjang/${idKeranjang}`, payload).then((res) => res.data);
};

export const deleteKeranjangById = (id) => {
  return mockapi.delete(`/keranjang/${id}`).then((res) => res.data);
};

export const getKeranjangByUserId = async (userId) => {
  const res = await mockapi.get('/keranjang/');
  const keranjang = res.data.filter((item) => `${item.idUser}` === `${userId}`);
  if (keranjang.length > 0) {
    return keranjang[0];
  }
  throw new Error('Keranjang tidak ditemukan');
};

export const getRemainingProduct = async (id, type) => {
  const product = await mockapi.get(`/${type}/${id}`);
  return {
    id: product.data.id,
    sisa: product.data.sisa,
    tipe: type,
  };
};
