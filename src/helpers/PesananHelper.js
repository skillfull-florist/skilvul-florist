export const dayNames = [
  'Minggu',
  'Senin',
  'Selasa',
  'Rabu',
  'Kamis',
  'Jumat',
  'Sabtu',
];

export const getDate = (date) =>
  (dayNames[new Date(date).getDay()] + ', ' + new Date(date).toLocaleString('id-ID'))
    .replace(/[/]/g, '-')
    .replace(/[.]/g, ':');

export const getTotalPrice = (data) => {
  if (data.length > 1) {
    const newTotal = data.reduce((sum, item) => {
      if (typeof sum === 'object') {
        return sum.jumlah * sum.harga + item.jumlah * item.harga;
      }
      return sum + item.jumlah * item.harga;
    });
    return newTotal;
  }
  if (data.length === 1) {
    return data[0].jumlah * data[0].harga;
  }
};

export const getTotalItem = (data) => {
  if (data.length > 1) {
    const newTotal = data.reduce((sum, item) => {
      if (typeof sum === 'object') {
        return sum.jumlah + item.jumlah;
      }
      return sum + item.jumlah;
    });
    return newTotal;
  }
  if (data.length === 1) {
    return data[0].jumlah;
  }
};
