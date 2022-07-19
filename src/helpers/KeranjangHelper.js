import mockapi from './../apis/mockapi';

export const getKeranjangByUserId = (userId) => {
  return mockapi.get(`/keranjang/${userId}`).then((res) => res.data);
};

export const postKeranjang = (payload) => {
  return mockapi.post(`/keranjang`, payload).then((res) => res.data);
};

export const putKeranjangById = (id, payload) => {
  return mockapi.put(`/keranjang/${id}`, payload).then((res) => res.data);
};

export const getRemainingProduct = async (id, type) => {
  const product = await mockapi.get(`/${type}/${id}`);
  return {
    id: product.data.id,
    sisa: product.data.sisa,
    tipe: type,
  };
};
