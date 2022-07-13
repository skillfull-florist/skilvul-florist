import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function Transaksi() {
  const params = useParams();
  useEffect(() => {
    const getTanamanHiasById = async () => {
      // axios
      const result = await axios.get(`https://62bd2977bac21839b6fd61be.mockapi.io/api/tanamanhias/${params.id}`);
      console.log(result.data);
    };

    getTanamanHiasById();
  }, []);
  return <div>Transaksi {params.id}</div>;
}

export default Transaksi;
