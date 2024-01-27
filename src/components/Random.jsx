import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { resourceVN } from "../resources/resourceVN";

export default function Random() {
  const dispatch = useDispatch();
  const random = useSelector((state) => state.random);
  console.log(JSON.stringify(random));

  const handleRandom = () => {
    dispatch({
      type: "RANDOM",
      payload: Math.ceil(Math.random() * 10), // Dữ liệu truyền lên reducer
    });
  };
  return (
    <div>
      <h1>{resourceVN.feature}</h1>
      <h3>Random: {JSON.stringify(random)}</h3>
      <button onClick={handleRandom}>Radom</button>
    </div>
  );
}
