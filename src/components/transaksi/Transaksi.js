import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function Transaksi() {
  const params = useParams();
  useEffect(() => {
    const getTanamanHiasById = async () => {
      // axios
      let url = "";
      if (params.type === "buket") {
        url = `https://62bd2977bac21839b6fd61be.mockapi.io/api/buket/${params.id}`;
      }

      if (params.type === "tanamanhias") {
        url = `https://62bd2977bac21839b6fd61be.mockapi.io/api/tanamanhias/${params.id}`;
      }

      const result = await axios.get(url);
      console.log(result.data);
    };

    getTanamanHiasById();
  }, [params.id, params.type]);
  return <div>Transaksi {params.id}</div>;
}

export default Transaksi;
