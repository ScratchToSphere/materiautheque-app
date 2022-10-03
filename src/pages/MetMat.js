import axios from "axios";
import React, { useEffect, useState } from "react";

const MetMat = () => {
  const [dataMat, setDataMat] = useState([]);
  useEffect(() => {
    axios
      .get("data.json")
      .then((res) => setDataMat(res.data.MetMateriaux))
      .then(console.log(dataMat.echantillon1));
  }, []);
  return (
    <div>
      {/* {dataMat.map((ech, index) => (
        <li key={index}>{ech.name}</li>
      ))} */}
    </div>
  );
};

export default MetMat;
