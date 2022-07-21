import * as Helper from './../../helpers/PesananHelper';
import HistoryItem from './HistoryItem';

const PesananItem = ({ pesanan }) => {
  return (
    <div>
      {Helper.getDate(pesanan.createdAt)}
      <hr />
      {pesanan.data.map((item, idx) => (
        <HistoryItem key={idx} pesanan={item} />
      ))}
    </div>
  );
};

export default PesananItem;
