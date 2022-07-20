import './Keranjang.css';

const Counter = ({ handleIncrement, handleDecrement, handelChange, jumlah = 0 }) => {
  return (
    <div className='d-flex align-items-center'>
      <button className='jumlah' onClick={handleDecrement}>
        -
      </button>
      <span>
        <input
          style={{ width: '2.5em' }}
          type='number'
          className='form-control text-center p-1'
          placeholder='0'
          onFocus={(ev) => ev.target.select()}
          value={jumlah}
          onChange={handelChange}
        />
      </span>
      <button className='jumlah' onClick={handleIncrement}>
        +
      </button>
    </div>
  );
};

export default Counter;
